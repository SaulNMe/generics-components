import ApiService from 'saeko-native/app/services/ApiService';
import Local from 'saeko-native/app/services/Local';
import { Alert } from 'react-native';
// Declare action names as constants with uppercase string
export const SET_STUDENTS = 'SET_STUDENTS';
export const SET_LECTURE_ID = 'SET_LECTURE_ID';
export const SET_CHECKED_AT = 'SET_CHECKED_AT';
export const SET_COURSE_ID = 'SET_COURSE_ID';
export const SET_COURSE = 'SET_COURSE';
export const SET_DATE = 'SET_DATE';
export const SET_TIME = 'SET_TIME';
export const SET_ATTENDANCE_CONFIG = 'SET_ATTENDANCE_CONFIG';
export const SET_ATTENDANCE_CHANGE = 'SET_ATTENDANCE_CHANGE';
export const SET_ATTENDANCE_LOGS = 'SET_ATTENDANCE_LOGS';
export const SET_UPDATING_LECTURES = 'SET_UPDATING_LECTURES';
export const RESET_PROFESSOR_STUDENTS = 'RESET_PROFESSOR_STUDENTS';

export function setStudentAttendance(id, value) {
	return async (dispatch, getState) => {
		let { ProfessorStudents } = getState();
		let studentsByLectureId = ProfessorStudents.studentsByLectureId;
		let students = studentsByLectureId[ProfessorStudents.currentLectureId].slice();
		studentsByLectureId[ProfessorStudents.currentLectureId] = students;
		dispatch(setAttendanceChange(studentsByLectureId));
	}
}

export function setStudentAttendanceLog(id, log) {
	return async (dispatch, getState) => {
		let { ProfessorStudents } = getState();
		let studentsByLectureId = ProfessorStudents.studentsByLectureId;
		let students = studentsByLectureId[ProfessorStudents.currentLectureId].slice();
		students.map(student => {
			if(student.id === id)
				student.attendance_log = log;
			return student;
		})
		studentsByLectureId[ProfessorStudents.currentLectureId] = students;
		dispatch(setAttendanceChange(studentsByLectureId));
	}
}

export function fetchStudentsByLecture() {
	return async (dispatch, getState) => {
		let { ProfessorStudents } = getState();
		let courseId = ProfessorStudents.currentCourseId;
		let lectureId = ProfessorStudents.currentLectureId;
		let currentStudents = ProfessorStudents.studentsByLectureId;
		return await ApiService.getStudentsByCourses({ courseId })
			.then(
				result => {
					let { students } = result;
					currentStudents[lectureId] = students;
					dispatch(setStudents(currentStudents));
				},
				error => {
					Alert.alert(Local.get('errorState.title'), Local.get('errorState.subtitle'));
					throw ({error: error});
				}
			)
	}
}

export function getAttendanceConfig() {
	return async (dispatch, getState) => {
		let { ProfessorStudents } = getState();
		let course_id = ProfessorStudents.currentCourseId;
		return await ApiService.getConfigsByCourseId({ course_id })
			.then(
				result => {
					dispatch(setAttendanceConfig(result.attendance_config));
					return result.attendance_config;
				},
				error => {
					Alert.alert(Local.get('errorState.title'), Local.get('errorState.subtitle'));
					throw ({error: error});
				}
			)
	}
}

export function selectAttendanceLogs() {
	return async (dispatch, getState) => {
		let { ProfessorStudents } = getState();
		let lecture_id = ProfessorStudents.currentLectureId;
		return ApiService.selectAttendanceLogsByLectureIds({ids: [lecture_id]})
			.then(
				result => {
					dispatch(setAttendanceLogs(result.attendance_logs));
					return result.attendance_logs;
				},
				error => {
					Alert.alert(Local.get('errorState.title'), Local.get('errorState.subtitle'));
					throw ({error: error});
				}
			)
	}
}

export const setStudents = studentsByLectureId => ({
	type: SET_STUDENTS,
	payload: studentsByLectureId
});

export const setLectureId = id => ({
	type: SET_LECTURE_ID,
	payload: id
})

export const setCheckedAt = checkedAt => ({
	type: SET_CHECKED_AT,
	payload: checkedAt
})

export const setCourseId = id => ({
	type: SET_COURSE_ID,
	payload: id
})

export const setCourse = course => ({
	type: SET_COURSE,
	payload: course
})

export const setCurrentDate = date => ({
	type: SET_DATE,
	payload: date
})

export const setCurrentTime = time => ({
	type: SET_TIME,
	payload: time
})

export const setAttendanceConfig = config => ({
	type: SET_ATTENDANCE_CONFIG,
	payload: config
})

export const setAttendanceLogs = attendanceLogs => ({
	type: SET_ATTENDANCE_LOGS,
	payload: attendanceLogs
})

export const setAttendanceChange = studentsByLectureId => ({
	type: SET_ATTENDANCE_CHANGE,
	payload: studentsByLectureId
})

export const setUpdatingLectures = studentsByLectureId => ({
	type: SET_UPDATING_LECTURES,
	payload: studentsByLectureId
})

export const resetStudentAttendance = () => ({
	type: RESET_PROFESSOR_STUDENTS,
})