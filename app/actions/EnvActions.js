export const ENV_BEGIN ='ENV_BEGIN';
export const ENV_SUCCESS ='ENV_SUCCESS';
export const ENV_FAILURE ='ENV_FAILURE';

export const fetchEnvBegin = () => ({
	type: ENV_BEGIN
});

export const fetchEnvSuccess = data => ({
	type: ENV_SUCCESS,
	payload: data
});

export const fetchEnvFailure = error => ({
	type:ENV_FAILURE,
	payload: error
});

