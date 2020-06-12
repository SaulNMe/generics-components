// Action names should be imported from their respective action modules
import {
	GET_PENDINGS_BEGIN,
	 GET_PENDINGS_SUCCESS,
	GET_PENDINGS_FAILURE,
	RESET_PENDINGS,
	GET_PENDINGS_DELETE_BY_ID
} from 'saeko-native/app/actions/PendingsActions';

const PAGE_SIZE = 15;

//Example initial state
const initialState = {
	byId: {},
	allIds: [],
	isLoading: false,
	cursor: 0,
	limit: PAGE_SIZE,
	endReached: false,
	error: '',
};


// Return a new state object with updated attributes
export default function PendingsReducer (state = initialState, action) {
	switch (action.type) {
		case GET_PENDINGS_BEGIN:
			return {
				...state,
				isLoading: true
			}
		case  GET_PENDINGS_SUCCESS:

			return {
				...state,
				byId: action.onRefresh ? action.payload.data.byId : {
					...state.byId,
					...action.payload.data.byId,
				},
				allIds: action.onRefresh ? action.payload.data.allIds : [...new Set(state.allIds.concat(action.payload.data.allIds))],
				total:  action.onRefresh ?  action.payload.data.total : state.total,
				cursor: action.payload.data.cursor,
				isLoading: false,
				limit: action.payload.data.allIds.length,
			}
		case GET_PENDINGS_FAILURE:
			return {
				...state,
				error: action.payload.error.status,
				isLoading: false
			}
		case RESET_PENDINGS:
			return {
				...initialState
			}
		case GET_PENDINGS_DELETE_BY_ID:
			const deleteId = String(action.payload.id);
			let byId = state.byId;
			delete byId[deleteId];
			let allIds = state.allIds;
			allIds = allIds.filter(id => String(id) !== String(deleteId));
			return {
				...state,
				byId,
				allIds,
				total: state.total-1
			}
		default:
			return state;
	}
};