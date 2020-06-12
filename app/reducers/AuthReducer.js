import {
	LOGIN_BEGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	UPDATE_AUTH_DATA,
	SET_LOCAL,
	CLEAR_SESSION,
} from 'saeko-native/app/actions/AuthActions.js';

const initialState = {
	access_token: '',
	token_type: '',
	expires_in: null,
	refresh_token: '',
	scope: '',
	created_at: '',
	isLoading: false,
	error: '',
	loggedIn: false,
	locale: '',
};

export default function AuthReducer (state = initialState, action) {
	switch (action.type) {
		case 'EX':
		return {
			...state,
			loggedIn: false
		}
		case LOGIN_BEGIN:  
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case LOGIN_SUCCESS: 
			return {
				...state,
				access_token: action.payload.access_token,
				token_type: action.payload.token_type,
				expires_in: action.payload.expires_in,
				refresh_token: action.payload.refresh_token,
				scope: action.payload.scope,
				created_at: action.payload.created_at,
				isLoading: false,
				loggedIn: true
			}		
		case LOGIN_FAILURE: 
			return {
				...state,
				error: action.payload.error,
				isLoading: false
			}		
		case CLEAR_SESSION:
			return {
				...initialState,
				locale: state.locale,
			}
		case UPDATE_AUTH_DATA: 
			return {
				...state,
				...action.payload.authData,
			}
		case SET_LOCAL:
			return {
				...state,
				locale: action.payload.locale
			}
		default:
			return state;
	}
};