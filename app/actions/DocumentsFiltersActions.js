//import ApiService from 'saeko-native/app/services/ApiService';
// Declare action names as constants with uppercase string
export const SET_REPORTS_UNSELECTED = 'SET_REPORTS_UNSELECTED';
export const SET_PORTFOLIO_UNSELECTED = 'SET_PORTFOLIO_UNSELECTED';
export const RESET_DOCUMENTS_FILTERS = 'RESET_DOCUMENTS_FILTERS';


// Action: Function that returns an object with action data for reducer
export const setReportsUnselected = (id) => ({
	type: SET_REPORTS_UNSELECTED,
	payload: {
		id
	}
});

export const setPortfolioUnselected = (id) => ({
	type: SET_PORTFOLIO_UNSELECTED,
	payload: {
		id
	}
});