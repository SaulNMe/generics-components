import React, { useEffect, useState } from 'react';
import { useSelector, useStore } from 'react-redux';
import ApiService from 'saeko-native/app/services/ApiService';
import moment from 'moment';
import Local from 'saeko-native/app/services/Local';
import useStudents from "saeko-native/app/hooks/useStudents";
import Selectors from 'saeko-native/app/Selectors';
import useCurrentUser from 'saeko-native/app/hooks/useCurrentUser';

export default function ReportCardsContainer(props) {
	const store = useStore();
	const state = store.getState();
	const tokenData = Selectors.selectAuthData(state);
	const env = useSelector(Selectors.selectEnv);
	const filters = useSelector(Selectors.selectReportsUnselected)

	const [currentReports, setCurrentReports] = useState([]);
	const [pastReports, setPastReports] = useState([]);
	const [userData, userLoader] = useCurrentUser();
	const [isLoading, setIsLoading] = useState(true);
	let section = []

	const [studentsData, studentsLoader] = useStudents();


	useEffect(() => {
		loadData();
	}, [studentsLoader.isLoading]);

	const loadData = async () => {
		if (!studentsData.length && userData.type === 'relative') return;
		setIsLoading(true);
		section = [];
		let current = []
		let past = [];
		const makeFinalReports = env.appId === 'cecyte';
		let enrollmentsPromise = userData.type === 'relative' ? await fetchEnrollments() : await fetchEnrollment();
		const [enrollments] = await Promise.all([enrollmentsPromise]);
		enrollments.forEach((enrollment, indexEnrollments) => {
			const periods = enrollment.term.periods;
			const list = enrollment.term.is_current ? current : past;
			if (makeFinalReports && !enrollment.term.is_current) {
				list.push({ period: { id: 0, name: 'FINAL' }, enrollment, start_at: enrollment.term.ends_at })
			}
			periods.forEach((period, index) => {
				const previousPeriod = periods[index - 1];
				const start_at = previousPeriod ? previousPeriod.date : enrollment.term.begins_at
				const end_at = period.date;
				const is_completed = moment().isAfter(end_at);
				const baseURL = Selectors.selectEnv(state).apiHost;
				const url = `${baseURL}/api/v1/grading/students/${enrollment.student_id}/report_card.pdf?enrollment_id=${enrollment.id}&period_id=${period.id}&access_token=${tokenData.access_token}`
				if (is_completed) list.push({ period, enrollment, start_at, end_at, pdf_url: url, is_completed, id: `${indexEnrollments}${index}` });
			});
		});
		setCurrentReports(current);
		setPastReports(past);
		setIsLoading(false);
	}

	const fetchEnrollment = async () => {
		const result = await ApiService.getEnrollments();
		return result.enrollments.map(e => {
			e.first_name = userData.first_name;
			e.avatar = userData.avatar;
			return e;
		});
	};

	const fetchEnrollments = async () => {
		const enrollments = [];
		await Promise.all(studentsData.map(async (student) => {
			const result = await ApiService.getEnrollmentsByStudentId({ student_id: student.id });
			let studentEnrollments = result.enrollments.map(enrollment => ({
				...enrollment,
				first_name: student.first_name,
				student_id: student.id,
				avatar: student.avatar
			}));
			enrollments.push(...studentEnrollments);
		}));
		return enrollments;
	}

	let currentData = userData.type === 'relative' ? currentReports.filter(report => filters.indexOf(report.enrollment.student_id) === -1) : currentReports;
	let pastData = userData.type === 'relative' ? pastReports.filter(report => filters.indexOf(report.enrollment.student_id) === -1) : pastReports;

	if (currentData.length) section.push({
		title: Local.get('reportCardsScreen.currentReport'),
		data: currentData
	});
	if (pastData.length) section.push({
		title: Local.get('reportCardsScreen.pastReport'),
		data: pastData
	});

	return (
		<React.Fragment>
			{
				props.children({ section, isLoading, loadData, filters })
			}
		</React.Fragment>
	);

}
