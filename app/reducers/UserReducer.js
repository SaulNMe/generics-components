import {
	USER_BEGIN,
	USER_SUCCESS,
	USER_FAILURE
} from 'saeko-native/app/actions/UserActions';

import { CLEAR_SESSION } from 'saeko-native/app/actions/AuthActions';

const initialState = {
	id: '',
	type: '',
	email: '',
	first_name: '',
	surname: '',
	avatar: null,
	timezone: null,
	server: '',
	actor_id: '',
	isLoading: false,
	error: ''

};

export default function LoginReducer (state = initialState, action){
	switch(action.type){
		case USER_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case USER_SUCCESS:
			return {
				...state,
				id: action.payload.id,
				type: action.payload.type,
				email: action.payload.email,
				first_name: action.payload.first_name,
				surname: action.payload.surname,
				avatar: action.payload.avatar,
				timezone: action.payload.timezone,
				server: action.payload.server,
				actor_id: action.payload.actor_id,
				isLoading: false
			}
		case USER_FAILURE:
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
