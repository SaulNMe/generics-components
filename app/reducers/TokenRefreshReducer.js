import {
	SET_REFRESH_TOKEN_FLAGS,
	CLEAR_REFRESH_TOKEN_FLAGS
} from 'saeko-native/app/actions/AuthActions';

const initialState = {
	isRefreshingToken: false,
	refreshCall: null
};

export default function TokenRefreshReducer (state = initialState, action){
	switch(action.type){
		case SET_REFRESH_TOKEN_FLAGS:
			return {
				...state,
				isLoading: true,
				refreshCall: action.payload.refreshCall
			}
		case CLEAR_REFRESH_TOKEN_FLAGS:
			return {
				...initialState,
			}
		default:
			return state
	}
};
