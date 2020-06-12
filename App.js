import 'saeko-native/config/ReactotronConfig';
import GaService from 'saeko-native/app/services/GaService';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import MainNavigation from './app/Router';
import ApiInitializerContainer from 'saeko-native/app/containers/ApiInitializerContainer';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Provider } from 'react-redux';
import Store from 'saeko-native/app/Store.js';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from 'saeko-native/app/Store.js';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import NavigationService from 'saeko-native/app/services/NavigationService';
function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class App extends Component {
	state = {
		isReady: false
	}

	constructor (props) {
		super(props);
		//Disable font scaling in all Texts. This prevents that icons and texts are over or undersized
		Text.defaultProps = Text.defaultProps || {};
		Text.defaultProps.allowFontScaling = false;
	}

	async _cacheResourcesAsync() {
		const images = [
			require('saeko-native/assets/logo_saeko_letter.gif'),
			require('saeko-native/assets/logo_saeko_letter_40.gif'),
			require('saeko-native/assets/bg_image.jpg'),
			require('saeko-native/assets/splash.png'),
			require('saeko-native/assets/saeko-logo.png'),
			require('saeko-native/assets/logo-saeko.png'),
			require('saeko-native/assets/Images/docx.png'),
			require('saeko-native/assets/Images/file.png'),
			require('saeko-native/assets/Images/pdf.png'),
			require('saeko-native/assets/Images/xls.png'),
			require('saeko-native/assets/Images/empty.png'),
			require('saeko-native/assets/Images/error.png'),
			require('saeko-native/assets/vector.png'),
			require('saeko-native/assets/verde.png'),
		];
		const cacheImages = images.map((image) => {
			return Asset.fromModule(image).downloadAsync();
		});

		const fontAssets = cacheFonts([Feather.font, MaterialIcons.font]);

		return Promise.all([ ...cacheImages, ...fontAssets ]);
	}

	getActiveRouteName(navigationState) {
		if (!navigationState) {
			return null;
		}
		const route = navigationState.routes[navigationState.index];
		if (route.routes) {
			return this.getActiveRouteName(route);
		}
		return route.routeName;
	}
	
	render() {
		if (!this.state.isReady) {
			return (
				<AppLoading
					startAsync={this._cacheResourcesAsync}
					onFinish={() => this.setState({ isReady: true })}
					onError={console.warn}
				/>
			);
		}
		return (
			<Provider store={Store}>
				<PersistGate persistor={persistor}>
					<ApiInitializerContainer>
						<View style={styles.container}>
							<MainNavigation 
								ref={navigatorRef => {
									NavigationService.setTopLevelNavigator(navigatorRef);
								}}
								onNavigationStateChange={(prevState, currentState) => {
									const currentScreen = this.getActiveRouteName(currentState);
									const prevScreen = this.getActiveRouteName(prevState);
									if (prevScreen !== currentScreen) GaService.changeScreen(currentScreen);
								}}
							/>
						</View>
				</ApiInitializerContainer>
				</PersistGate>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});
