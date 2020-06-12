import GaService from 'saeko-native/app/services/GaService';
import ApiService from 'saeko-native/app/services/ApiService';
import { fetchEnvBegin, fetchEnvSuccess, fetchEnvFailure } from 'saeko-native/app/actions/EnvActions';
import config from 'saeko-native/config/environment.js';
import firstToResolve from 'saeko-native/app/utils/FirstToResolve';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import NavigationService from 'saeko-native/app/services/NavigationService.js';
import Selectors from 'saeko-native/app/Selectors';

import { resetApiList } from 'saeko-native/app/actions/ApiListActions';
import { resetStudentAttendance } from 'saeko-native/app/actions/ProfessorStudentsActions';

import Constants from 'expo-constants';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const CLEAR_SESSION = 'CLEAR_SESSION';
export const UPDATE_AUTH_DATA = 'UPDATE_AUTH_DATA';
export const SET_LOCAL = 'SET_LOCAL';
export const SET_REFRESH_TOKEN_FLAGS = 'SET_REFRESH_TOKEN_FLAGS';
export const CLEAR_REFRESH_TOKEN_FLAGS = 'CLEAR_REFRESH_TOKEN_FLAGS';

const registerDevice = () => {
	return async dispatch => {
		const isEmulator = !Constants.isDevice;
		if (isEmulator) return; 
		const { status: existingStatus } = await Permissions.getAsync(
			Permissions.NOTIFICATIONS
		);
		let finalStatus = existingStatus;

		if (existingStatus !== 'granted') {
			const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
			finalStatus = status;
		}
		if (finalStatus !== 'granted') {
			return;
		}
		let token = await Notifications.getExpoPushTokenAsync();
		ApiService.registerDevice(token).catch(() => alert('Unable to register device'));
	}
}

export function setEnvFromEmail(email) {
	return async dispatch => {
		let backendConfig = config.backendConfig;
		let promises = [];
		for (let key in backendConfig) {
			if (backendConfig.hasOwnProperty(key)) {
				let envConfig = backendConfig[key];
				let promise = _pingServer(envConfig, email);
				promises.push(promise);
			}
		}
		let env = await firstToResolve(promises);
		dispatch(fetchEnvSuccess(env));
	};
}

export function autenticateUser(loginCredentials) {
	return async (dispatch, getState) => {
		const result = await ApiService.login(loginCredentials, Selectors.selectEnv(getState()))
		dispatch(loginSuccess(result));
		return result;
	};
}


export function refreshAuth() {
	return async (dispatch, getState) => {
		let tokenData = Selectors.selectAuthData(getState());
		let refreshToken = tokenData.refresh_token;
		return ApiService.getNewToken(refreshToken)
			.then(
				result => {
					dispatch(updateAuthData(result));
				},
				error => {
					dispatch(logout());
					throw ({error: error, message: 'No se logró actualizar la sesión'});
				}
			)
	};
}

export function suscribeForRefreshAuth() {
	return async (dispatch, getState) => {
		if(Selectors.selectIsRefreshingToken(getState())) {
			await Selectors.selectRefreshCall(getState());
		} else {
			const refreshPromise = dispatch(refreshAuth());
			dispatch(setRefreshTokenFlags(refreshPromise));
			await refreshPromise;
			dispatch(clearRefreshTokenFlags())
		}
	};
}

export function logout() {
	return async dispatch => {
		dispatch(clearSession());
		NavigationService.navigate('AuthLoading');
	};
}

export function login(loginCredentials) {
	return async (dispatch, getState) => {
		try {
			await dispatch(setEnvFromEmail(loginCredentials.email));
			await dispatch(autenticateUser(loginCredentials));
			GaService.loginEvent('login');
		} catch (e) {
			dispatch(clearSession());
			throw(e);
		}
		dispatch(registerDevice());
		setTimeout(() => {
			NavigationService.navigate('AuthLoading');
		}, 3000);
	};
}

export function resetStore(loginCredentials) {
	return async (dispatch, getState) => {
		dispatch(clearSession());
		dispatch(clearRefreshTokenFlags());
		dispatch(resetStudentAttendance());
		dispatch(resetApiList('STUDENTS'));
		dispatch(resetApiList('ATTENDANCE_CONFIGS'));
		dispatch(resetApiList('COURSES'));
		dispatch(resetApiList('ENROLLMENTS'));
		dispatch(resetApiList('CURRENT_REPORTS'));

	};
}

export const setLocal = locale => ({
	type: SET_LOCAL,
	payload: { locale }
})

export const updateAuthData = authData => ({
	type: UPDATE_AUTH_DATA,
	payload: { authData }
})

export const loginSuccess = authData => ({
	type: LOGIN_SUCCESS,
	payload: authData
})

export const clearSession = () => ({
	type: CLEAR_SESSION,
});

export const setRefreshTokenFlags = refreshCall => ({
	type: SET_REFRESH_TOKEN_FLAGS,
	payload: { refreshCall }
});

export const clearRefreshTokenFlags = () => ({
	type: CLEAR_REFRESH_TOKEN_FLAGS,
});

function _pingServer (config, email) {
	let url = `${config.apiHost}/api/v1/provisioning/ping/${email}`;
	return fetch(url).then(({ status }) => {
		return { config, status };
	});
}
