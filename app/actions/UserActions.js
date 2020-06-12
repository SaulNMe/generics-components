import ApiService from 'saeko-native/app/services/ApiService';
export const USER_BEGIN ='USER_BEGIN';
export const USER_SUCCESS ='USER_SUCCESS';
export const USER_FAILURE ='USER_FAILURE';

export function fetchUser(){
	return async dispatch => {
		dispatch(fetchUserBegin());
		return ApiService.selectUser()
			.then(
				result => {
					dispatch(fetchUserSuccess(result.user));
					return result.user;
				},
				error => {
					dispatch(fetchUserFailure(error))
					return error;
					//return 'No se encontró el usuario'
				}
			)
	}
}

export const fetchUserBegin = () => ({
	type: USER_BEGIN
});

export const fetchUserSuccess = data => ({
	type: USER_SUCCESS,
	payload: data
});

export const fetchUserFailure = error => ({
	type:USER_FAILURE,
	payload: error
});

