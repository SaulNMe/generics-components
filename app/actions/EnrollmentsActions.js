import ApiService from 'saeko-native/app/services/ApiService';
import normalizeById from 'saeko-native/app/utils/NormalizeById';

import { 
	fetchApiListBegin,
	fetchApiListSuccess,
	fetchApiListFailure
} from 'saeko-native/app/actions/ApiListActions';

export function fetchEnrollments(paramsData = {}) {
	return async (dispatch, getState) => {
		dispatch(fetchApiListBegin('ENROLLMENTS'));
		return ApiService.getEnrollments(paramsData)
			.then (
				result => {
					let normalized = normalizeById(result.enrollments, paramsData.keyId);
					dispatch(fetchApiListSuccess('ENROLLMENTS', normalized));
					return normalized;
				},
				error => {
					dispatch(fetchApiListFailure('ENROLLMENTS', error));
					throw ({ error, message: 'Unable to get Enrollments'});
				}
			);
	}
};