import {
	SET_REPORTS_UNSELECTED,
	SET_PORTFOLIO_UNSELECTED,
	RESET_DOCUMENTS_FILTERS,
} from 'saeko-native/app/actions/DocumentsFiltersActions';

const initialState = {
	reportsUnselected: [],
	portfolioUnselected: []
};

export default function DocumentsFiltersReducer (state = initialState, action) {
	switch (action.type) {
		case SET_REPORTS_UNSELECTED: {
			let arr = state.reportsUnselected.slice();
			let i = arr.indexOf(action.payload.id);
			if(i !== -1) {
				arr.splice(i, 1);
			} else {
				arr.push(action.payload.id);
			}
			return {
				...state,
				reportsUnselected: arr
			}
		}
		case SET_PORTFOLIO_UNSELECTED: {
			let arr = state.portfolioUnselected.slice();
			let i = arr.indexOf(action.payload.id);
			if(i !== -1)
				arr.splice(i, 1);
			else
				arr.push(action.payload.id);
			return {
				...state,
				portfolioUnselected: arr
			}
		}
		case RESET_DOCUMENTS_FILTERS:
			return {
				...initialState
			}
		default:
			return state;
	}
};

