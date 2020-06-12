import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ApiService from 'saeko-native/app/services/ApiService';
import NavigationService from 'saeko-native/app/services/NavigationService.js';
import Selectors from 'saeko-native/app/Selectors';

async function fetchLectures(studentId, startDay, endDay, appId) {
	const except_group_course = appId === 'cecyte';
	const result = await ApiService.getLecturesByStudentId({ 
		student_id: studentId, 
		start_date: startDay, 
		end_date: endDay, 
		except_group_course 
	});
	return result.lectures;
}

async function fetchAttendance(lectures) {
	const result = await ApiService.selectAttendanceLogsByLectureIds({ ids: lectures.map(l => l.id) });
	return result.attendance_logs
}

export default function GetLecturesAndLogsContainer (props) {	
	const env = useSelector(Selectors.selectEnv);
	const [lectures, setLectures] = useState([]);
	const [attendance, setAttendance] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const getLecturesAndLogs = async (screen = '', params = {}) => {
		setIsLoading(true);
		return fetchLectures(params.student || props.student.id, props.startDay, props.endDay, env.appId).then( async resultLectures => {
			if(resultLectures.length == 0){
				setIsLoading(false);
				return screen ? NavigationService.navigate(screen, { ...params, lectures: resultLectures, attendance: [] }): ({resultLectures});
			} else  {
				return fetchAttendance(resultLectures).then( resultAttendance => {
					setIsLoading(false);
					return screen ? NavigationService.navigate(screen, { ...params, lectures: resultLectures, attendance: resultAttendance }): ({ resultLectures, resultAttendance });
				});
			}
		});
	};

	return (props.children({lectures, attendance, isLoading, error, getLecturesAndLogs}));
}
