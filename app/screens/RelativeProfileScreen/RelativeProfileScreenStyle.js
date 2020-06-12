import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.margins,
	...ApplicationStyles.flexBox,
	leftHeader: {
		width: 300,
		height: 180,
		position: 'absolute'
	},
	simpleShimer: {
		height: 28,
		width: 70
	},
	logoutBtnContainer: {
		top: 0,
		left: 0,
		zIndex: 999
	},
	logOut: {
		zIndex: 999,
		width: '50%'
	},
	diverIsLoading: {
		height: 10
	},
	mainContainer: {
		top: 0,
		bottom: 0,
		position: 'absolute',
		zIndex: -2,
		width: '100%'
	}

});
