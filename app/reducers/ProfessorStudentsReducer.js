// // Action names should be imported from their respective action modules
import {
	SET_STUDENTS,
	SET_LECTURE_ID,
	SET_CHECKED_AT,
	SET_COURSE_ID,
	SET_ATTENDANCE_CONFIG,
	SET_ATTENDANCE_CHANGE,
	SET_ATTENDANCE_LOGS,
	SET_UPDATING_LECTURES,
	RESET_PROFESSOR_STUDENTS,
	SET_COURSE,
	SET_DATE,
	SET_TIME,
// 	GET_ITEM_FAILURE
} from 'saeko-native/app/actions/ProfessorStudentsActions';

// Example initial state
const initialState = {
	studentsByLectureId: {},
	lectureCheckedAt: null,
	currentLectureId: '',
	currentCourseId: '',
	currentAttendanceConfig: {},
	attendanceLogs: {},
	isLoading: false,
	updatingLectures: false,
	date: '',
	time: '',
	course: ''
	// error: '' 
};

// Return a new state object with updated attributes
export default function ProfessorStudentsReducer (state = initialState, action) {
	switch (action.type) {
		case SET_STUDENTS:
			return {
				...state,
				studentsByLectureId: action.payload
			}
		case SET_LECTURE_ID:
			return {
				...state,
				currentLectureId: action.payload
			}
		case SET_CHECKED_AT:
			return {
				...state,
				lectureCheckedAt: action.payload
			}
		case SET_COURSE_ID:
			return {
				...state,
				currentCourseId: action.payload
			}
		case SET_COURSE:
			return {
				...state,
				course: action.payload
			}
		case SET_DATE:
			return {
				...state,
				date: action.payload
			}
		case SET_TIME:
			return {
				...state,
				time: action.payload
			}
		case SET_ATTENDANCE_CONFIG:
			return {
				...state,
				currentAttendanceConfig: action.payload
			}
		case SET_ATTENDANCE_LOGS:
			return {
				...state,
				attendanceLogs: action.payload
			}
		case SET_ATTENDANCE_CHANGE:
			return {
				...state,
				studentsByLectureId: action.payload
			}
		case SET_UPDATING_LECTURES:
			return {
				...state,
				updatingLectures: action.payload
			}
		case RESET_PROFESSOR_STUDENTS:
			return {
				...initialState
			}
		default:
			return state;
	}
};
