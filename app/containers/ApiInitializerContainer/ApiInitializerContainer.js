import React, { useEffect } from 'react';
import { saekoApiAxios, saekoAuthAxios } from "saeko-native/app/utils/Axios";
import { useStore } from 'react-redux';
import { suscribeForRefreshAuth } from 'saeko-native/app/actions/AuthActions';
import Selectors from 'saeko-native/app/Selectors';

export default function ApiInitializerContainer (props) {
	const store = useStore();

	useEffect(() => {
		//Seting up axios instances
		saekoApiAxios.interceptors.request.use(request => {
			const state = store.getState();
			const tokenData = Selectors.selectAuthData(state);
			const accessToken = tokenData.access_token;
			const baseURL = Selectors.selectEnv(state).apiHost;
			request.headers['Authorization'] = `Bearer ${accessToken}`;
			request.baseURL = baseURL;
			return request;
		});
		saekoAuthAxios.interceptors.request.use(request => {
			const state = store.getState();
			const baseURL = Selectors.selectEnv(state).authHost;
			request.baseURL = baseURL;
			return request;
		});
		//Setting up refresh tokens
		saekoApiAxios.interceptors.response.use(response => response, async error => {
			const status = error.response ? error.response.status : null;
			if (status === 401) {
				await store.dispatch(suscribeForRefreshAuth());
				return saekoApiAxios(error.config);
			}
			return Promise.reject(error);
		});
	}, [])

	return (props.children);
}
