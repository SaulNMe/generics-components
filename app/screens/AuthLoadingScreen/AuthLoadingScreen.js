import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import {
	View,
	Image,
	ActivityIndicator
} from 'react-native';
import * as Localization from 'expo-localization';

import styles from './AuthLoadingScreenStyle';
import Local from 'saeko-native/app/services/Local';
import moment from 'moment';
import 'saeko-native/locales/moment-es'
import { Colors } from 'saeko-native/app/styles'
import Selectors from 'saeko-native/app/Selectors';

import useCurrentUser from "saeko-native/app/hooks/useCurrentUser";
import { setLocal } from 'saeko-native/app/actions/AuthActions';
import { resetStore } from "saeko-native/app/actions/AuthActions";

export default function AuthLoadingScreen(props) {

	const dispatch = useDispatch();
	const loggedIn = useSelector(Selectors.selectIsLoggedIn);

	const [userData, userLoader] = useCurrentUser({ skipFirstFetch: !loggedIn });
	const local = useSelector(Selectors.selectLocal);

	useEffect(() => {
		if (!local) {
			let localId = Localization.locale.substring(0, 2);
			if (localId === 'es') {
				Local.setLocal('es-MX');
				dispatch(setLocal('es-MX'));
				moment.locale('es');
			} else {
				Local.setLocal('en-US');
				dispatch(setLocal('en-US'));
				moment.locale('en');
			}
		} else {
			if (local === 'en-US') {
				Local.setLocal('en-US');
				dispatch(setLocal('en-US'));
				moment.locale('en');
			}
			else {
				Local.setLocal('es-MX');
				dispatch(setLocal('es-MX'));
				moment.locale('es');
			}
		}
	}, [local]);

	useEffect(() => {
		if (loggedIn && userData.id) {
			if (userData.type !== 'relative' && userData.type !== 'professor' && userData.type !== 'admin' && userData.type !== 'student') {
				dispatch(resetStore());
				props.navigation.navigate('Auth');
			}
			props.navigation.navigate(userData.type);
		} else if (!loggedIn) {
			setTimeout(() => {
				props.navigation.navigate('Auth');
			}, 3000);
		}
	}, [loggedIn, userData]);

	return (
		<View style={styles.container}>
			<Image
				source={require('saeko-native/assets/logo_saeko_letter.gif')}
				style={styles.logoContainer}
			/>
		</View>
	);
}
