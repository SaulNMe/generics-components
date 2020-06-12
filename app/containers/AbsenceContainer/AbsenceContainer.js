import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from 'saeko-native/app/actions/StudentsActions';
import ApiService from 'saeko-native/app/services/ApiService';
import NavigationService from 'saeko-native/app/services/NavigationService';
import GaService from 'saeko-native/app/services/GaService';

export default function AbsenceContainer (props) {
	const [isLoading, setIsLoading] = useState(false);

	const setAttendanceLogs = async (params) => await ApiService.setAttendanceLogs(params);

	const setAllAttendanceLogs = async (lectures, attendance, data) => await Promise.all(lectures.map(async (lecture) => {
		let checksum = {}
		let temp = attendance.find(a => a.lecture_id === lecture.id);
		if ((temp || {}).id) {
			checksum = temp.checksum? {checksum: temp.checksum } : {};
		}
		GaService.timetableEvent('explain:absence', null, lecture.id);
		try {
			await setAttendanceLogs({
				lecture_id: lecture.id,
				data: {
					...data,
					...checksum
				}
			});			
		} catch (e) {/* e => console.log(e) */};
	}));
	
	return (props.children({isLoading, setAttendanceLogs, setIsLoading, setAllAttendanceLogs}));
}