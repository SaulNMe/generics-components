import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
	View
} from 'react-native';

import styles from './SelectLanguageScreenStyle';

import HugeText from 'saeko-native/app/components/HugeText';
import CloseBtn from 'saeko-native/app/components/CloseBtn';
import PickerButton from 'saeko-native/app/components/PickerButton';
import HeaderNavbar from 'saeko-native/app/components/HeaderNavbar';

import Local from 'saeko-native/app/services/Local';
import moment from 'moment';
import 'saeko-native/locales/moment-es'
import Selectors from 'saeko-native/app/Selectors';
import { Colors } from 'saeko-native/app/styles';

import { useDispatch, useSelector } from 'react-redux';
import { setLocal } from 'saeko-native/app/actions/AuthActions.js';
import GaService from 'saeko-native/app/services/GaService';

export default function SelectLanguageScreen(props) {

	const dispatch = useDispatch();
	const local = useSelector(Selectors.selectLocal);

	return (
		<LinearGradient
			colors={[Colors.magenta, Colors.purple]}
			start={[1, 0]}
			end={[0, 1]}
		>
			<View style={[styles.fullHeight]}>
				<HeaderNavbar
					statusBar='light-content'
					right={
						<CloseBtn
							onPress={() => props.navigation.navigate('AuthLoading')}
							dark
						/>
					}
				/>
				<View style={styles.flex1}>
					<View style={styles.baseHorizontalMargin}>
						<HugeText
							text={Local.get('selectLanguageScreen.title')}
							weight='medium'
							color='white'
						/>
					</View>
					<PickerButton
						onPress={() => {
							if (local === 'en-US') {
								props.navigation.navigate('AuthLoading');
							} else {
								Local.setLocal('en-US');
								dispatch(setLocal('en-US'))
								moment.locale('en');
								//setLocalRedux('en-US');
								props.navigation.navigate('AuthLoading');
							}
						}}
						iconName='globe'
						labelText={Local.get('selectLanguageScreen.english')}
					/>
					<PickerButton
						onPress={() => {
							if (local === 'es-MX') {
								props.navigation.navigate('AuthLoading');
							} else {
								Local.setLocal('es-MX');
								dispatch(setLocal('es-MX'))
								moment.locale('es');
								//setLocalRedux('es-MX');
								props.navigation.navigate('AuthLoading');
							}
						}}
						iconName='globe'
						labelText={Local.get('selectLanguageScreen.spanish')}
					/>
				</View>
			</View>
		</LinearGradient>
	);
}