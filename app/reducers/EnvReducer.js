import {
	ENV_BEGIN,
	ENV_SUCCESS,
	ENV_FAILURE
} from 'saeko-native/app/actions/EnvActions';

import { CLEAR_SESSION } from 'saeko-native/app/actions/AuthActions';

const initialState = {
	apiClientId: '',
	apiHost: '',
	authHost: '',
	appId: '',
	isLoading: false,
	error: ''

};

export default function LoginReducer (state = initialState, action){
	switch(action.type){
		case ENV_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case ENV_SUCCESS:
			return {
				...state,
				apiClientId: action.payload.apiClientId,
				apiHost: action.payload.apiHost,
				authHost: action.payload.authHost,
				appId: action.payload.appId,
				isLoading: false
			}
		case ENV_FAILURE:
			return{
				...state,
				isLoading: false,
				error: action.payload.Message
			}
		case CLEAR_SESSION:
			return {
				...initialState
			}
		default:
			return state
	}
};
