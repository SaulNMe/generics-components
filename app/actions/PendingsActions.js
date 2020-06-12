import ApiService from 'saeko-native/app/services/ApiService';
import normalizeById from 'saeko-native/app/utils/NormalizeById';
// Declare action names as constants with uppercase string
export const GET_PENDINGS_BEGIN = 'GET_PENDINGS_BEGIN';
export const GET_PENDINGS_SUCCESS = 'GET_PENDINGS_SUCCESS';
export const GET_PENDINGS_FAILURE = 'GET_PENDINGS_FAILURE';
export const RESET_PENDINGS = 'RESET_PENDINGS';
export const GET_PENDINGS_DELETE_BY_ID = 'GET_PENDINGS_DELETE_BY_ID';
import Selectors from 'saeko-native/app/Selectors';

// Thunk: this is a special type of action that can dispatch other actions
export function getPendings(onRefresh = false) {
	return async (dispatch, getState) => {
		const limit = Selectors.selectPendingsLimit(getState());
		if(limit < 15) return
		let cursor = {};
		const cursorValue = Selectors.selectPendingsCursor(getState());
		if(cursorValue && !onRefresh) cursor = {cursor: cursorValue};
		dispatch(getPendingsBegin());
		await ApiService.getLecturesByProfessor({ filters: 'unchecked;active_terms', limit: limit, ...cursor })
			.then(
				result => {
					let normalized = normalizeById(result.lectures, 'id');
					dispatch(getPendingsSuccess({...normalized, ...result.meta}, onRefresh));
				},
				error => {
					dispatch(getPendingsFailure(error));
					throw ({error: error, message: 'This is a demo error message'});
				}
			)
	};
}

export const getPendingsDeleteById = id => ({
	type: GET_PENDINGS_DELETE_BY_ID,
	payload: { id }
});

// Action: Function that returns an object with action data for reducer
export const getPendingsBegin = () => ({
	type: GET_PENDINGS_BEGIN
});
export const getPendingsSuccess = (data, onRefresh = false) => ({
	type: GET_PENDINGS_SUCCESS,
	payload: { data },
	onRefresh: onRefresh
});
export const getPendingsFailure = error => ({
	type: GET_PENDINGS_FAILURE,
	payload: { error }
});
export const resetPendings = () => ({
	type: RESET_PENDINGS
});

