import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
// import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	// ...ApplicationStyles.flexBox,
	// ...ApplicationStyles.margins,
	toggleBtn: {
		position: 'absolute',
		width: Metrics.screenWidth * 88 / 375,
		height: Metrics.screenWidth * 88 / 375,
		top: Metrics.screenWidth * 44/ 375,
		left: Metrics.screenWidth * 219/ 375
	},
	btnText: {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute'
	},
	filtersBtn: {
		position: 'absolute',
		width: Metrics.screenWidth * 40 / 375,
		height: Metrics.screenWidth * 40 / 375,
		top: Metrics.screenWidth * 71/ 375,
		left: Metrics.screenWidth * 319/ 375
	}
});
