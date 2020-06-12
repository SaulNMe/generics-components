import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Selectors from 'saeko-native/app/Selectors';
import { fetchMissingCoursesByIds } from 'saeko-native/app/actions/CoursesActions';
import { fetchMissingConfigsByIds } from 'saeko-native/app/actions/AttendanceConfigsActions';
import ApiService from 'saeko-native/app/services/ApiService';
import moment from 'moment';
import PropTypes from 'prop-types';
import useCurrentUser from 'saeko-native/app/hooks/useCurrentUser';

async function fetchLectures(students, date, appId) {
	//This property must be activated in the request for cecyte schools
	const except_group_course = appId === 'cecyte';

	const lectures = [];

	await Promise.all(students.map(async (student) => {
		const result = await ApiService.getLecturesByStudentId({ student_id: student.id, start_date: date, end_date: date, except_group_course });
		//Adding student to each lecture. This will come in handy later.
		result.lectures.forEach(lecture => {
			lecture.student = student;
		});
		lectures.push(...result.lectures);
	}));
	return lectures;
}

async function fetchLectureByCurrentStudent(date, appId) {
	const except_group_course = appId === 'cecyte';
	const result = await ApiService.getLecturesByCurrentStudent({
		startDate: date,
		endDate: date,
		except_group_course
	});
	return result.lectures;
}

async function fetchAttendanceLogsByIds ( ids, userType) {
	if (ids.length === 0 ) return [];
	const result = userType === 'relative' ? await ApiService.selectAttendanceLogsByLectureIds({ ids }): await ApiService.selectAttendanceLogsByLectureIdsByCurrentStudent({ ids });
	return result.attendance_logs;
}

export default function AttendanceTimetableContainer (props) {
	const { date } = props;
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [cards, setCards] = useState([]);
	const dispatch = useDispatch();
	const students = useSelector(state => Selectors.selectStudents( state))
	const env = useSelector(Selectors.selectEnv);
	const courses = useSelector(state => Selectors.selectNormalizedCourses( state));
	const configs = useSelector(state => Selectors.selectNormalizedAttendanceConfigs( state));
	const [userData, userLoader] = useCurrentUser();

	const makeCards = useCallback(async () => {
		setError('');
		setIsLoading(true);
		props.setIsLoading(true);
		if (students.length === 0 && userData.type === 'relative') {
			setCards([]);
			return;
		}
		const lectures = (userData.type === 'relative') ? await fetchLectures(students, date, env.appId): await fetchLectureByCurrentStudent(date, env.appId);
		const lectureIds = lectures.map(lecture => lecture.id);
		const logs = await fetchAttendanceLogsByIds(lectureIds, userData.type);
		if (userData.type === 'relative') {
			lectures.forEach(lecture => {
				lecture.log = logs.find(log => {
					return log.student_id === lecture.student.id && log.lecture_id === lecture.id
				});
			});
			lectures.sort((a, b) => {
				let comparison = new Date(a.begin_at) - new Date(b.begin_at);
				//If the classes are at the same time, order by student name instead
				if (comparison === 0) comparison = a.student.first_name < b.student.first_name ? -1 : 1;
				return comparison;
			});
		} else {
			lectures.forEach(lecture => {
				lecture.log = logs.find(log => {
					return log.lecture_id === lecture.id
				});
			});
			lectures.sort((a, b) => {
				let comparison = new Date(a.begin_at) - new Date(b.begin_at);
				return comparison;
			});
		}
		setCards(lectures);
		setIsLoading(false);
		props.setIsLoading(false);
	},[ students.length, date, env.appId]);
	//TODO: Use reselect and read only students instead

	useEffect(() => {
		makeCards();
	}, [makeCards]);

	useEffect(() => {
		const courseIds = cards.map(card => card.course_id);
		dispatch(fetchMissingCoursesByIds(courseIds)).catch(error => setError(error));
	}, [cards]);

	useEffect(() => {
		const configIds = [];
		courses.allIds.forEach(courseId => { 
			if (courses.byId[courseId].attendance_config_id)
				configIds.push(courses.byId[courseId].attendance_config_id);
		});
		dispatch(fetchMissingConfigsByIds(configIds)).catch(error => setError(error));
	}, [courses.allIds.length]);

	let hours = cards.map(c => c.begin_at);
	hours = [...new Set(hours)];
	return (props.children({ cards, hours, configs, courses, isLoading, error, reload: makeCards }));
}

AttendanceTimetableContainer.propTypes = {
	date: PropTypes.string,
}

AttendanceTimetableContainer.defaultProps = {
	date: moment('2019-06-10').format('YYYY-MM-DD')
}
