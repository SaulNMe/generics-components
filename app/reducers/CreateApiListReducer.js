import Selectors from 'saeko-native/app/Selectors';

import { createSelector } from 'reselect'

import camelcase from 'camelcase';

const initialState = {
	byId: {},
	allIds: [],
	isLoading: false,
	error: ''
}

export default function CreateApiReducer (modelName) {
	
	const stateKey = camelcase(modelName, {pascalCase: true});
	
	Selectors[`selectIsLoading${stateKey}`] = state => state[stateKey].isLoading;
	Selectors[`selectIsRefreshing${stateKey}`] = state => state[stateKey].isLoading && (state[stateKey].offset === 0);
	Selectors[`selectError${stateKey}`] = state => state[stateKey].error;
	Selectors[`select${stateKey}ById`] = state => state[stateKey].byId;
	Selectors[`select${stateKey}`] = createSelector(
		state => state[stateKey].allIds,
		state => state[stateKey].byId,
		(allIds, byId) => allIds.map( id => byId[id]),
	);
	Selectors[`selectNormalized${stateKey}`] = createSelector(
		state => state[stateKey].allIds,
		state => state[stateKey].byId,
		(allIds, byId) => ({ allIds, byId }),
	);

	return (state = initialState, action) => {
		const { name } = action;
		if (name !== modelName) return state;
		switch(action.type){
			case `FETCH_${modelName}_BEGIN`:
				return {
					...state,
					isLoading: true,
					error: ''
				}
			case `FETCH_${modelName}_SUCCESS`:
				let allIds = [...new Set(state.allIds.concat(action.payload.apiList.allIds))];
				let byId = {
					...state.byId,
					...action.payload.apiList.byId
				};
				return{
					...state,
					allIds,
					byId,
					isLoading: false,
				}
			case `FETCH_${modelName}_FAILURE`:
				return{
					...state,
					isLoading: false,
					error: action.payload.error,
				}
			case `UPDATE_${modelName}_BY_ID`:
				let byIdUpdate = {...state.byId};
				byIdUpdate[action.payload.studentId] = {
					...byIdUpdate[action.payload.studentId],
					...action.payload

				};
				return{
					...state,
					byId: byIdUpdate,
					isLoading: false,
					error: action.payload.error,
				}
			case `RESET_${modelName}`:
				return{
					...initialState
				}
			default:
				return state
		}
	}
};