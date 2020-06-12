import { fetchStudents } from 'saeko-native/app/actions/StudentsActions';
import { fetchEnrollments } from 'saeko-native/app/actions/EnrollmentsActions';

import Selectors from 'saeko-native/app/Selectors';

import { 
	fetchApiListBegin,
	fetchApiListSuccess,
	fetchApiListFailure,
	resetApiList
} from 'saeko-native/app/actions/ApiListActions';


export function fetchCurrentReports(paramsData = {}) {
	return async (dispatch, getState) => {
		//await dispatch(fetchApiListBegin('CURRENT_REPORTS'));
		await dispatch(fetchStudents());
		if(Selectors.selectErrorStudents( getState()) !== '') {
			dispatch(fetchApiListFailure('CURRENT_REPORTS', Selectors.selectErrorStudents( getState())));
			alert('Error');
			return;
		}
		let students = Selectors.selectStudents( getState());
		if(students.length === 0) return
		students.map( async s => await dispatch(fetchEnrollments({studentId: s.id})));
		let enrollments = Selectors.selectApiListData('Enrollments', getState());
		if(enrollments.length === 0) return;
		else if(Selectors.selectErrorApiList('Enrollments', getState()) !== '') {
			dispatch(fetchApiListFailure('CURRENT_REPORTS', Selectors.selectErrorApiList('Enrollments', getState())));
			alert('Error');
			return;
		}
		dispatch(fetchApiListFailure('CURRENT_REPORTS', 'TEST ERROR'));
	}
};
		// dispatch(fetchApiListBegin('Enrollments'));
		// 	.then (
		// 		result => {
		// 			let normalized = normalizeById(result.enrollments, paramsData.keyId);
		// 			dispatch(fetchApiListSuccess('Enrollments', normalized));
		// 			return normalized;
		// 		},
		// 		error => {
		// 			dispatch(fetchApiListFailure('Enrollments', error));
		// 			throw ({ error, message: 'Unable to get Enrollments'});
		// 		}
		// 	);