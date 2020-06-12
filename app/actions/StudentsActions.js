import ApiService from 'saeko-native/app/services/ApiService';
import normalizeById from 'saeko-native/app/utils/NormalizeById';

import { 
	fetchApiListBegin,
	fetchApiListSuccess,
	fetchApiListFailure,
	resetApiList
} from 'saeko-native/app/actions/ApiListActions';

export function fetchStudents() {
	return async dispatch => {
		dispatch(fetchApiListBegin('STUDENTS'));
		return ApiService.getStudents()
			.then (
				result => {
					let normalized = normalizeById(result.students, 'id');
					dispatch(fetchApiListSuccess('STUDENTS', normalized));
					return normalized;
				},
				error => {
					dispatch(fetchApiListFailure('STUDENTS', error));
					throw ({ error, message: 'Unable to get Students'});
				}
			);
	}
};

export const setInfoInStudent = (params) => ({
	type: `UPDATE_STUDENTS_BY_ID`,
	name: 'STUDENTS',
	payload: { ...params },
});