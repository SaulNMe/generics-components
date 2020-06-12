import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
// import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	// ...ApplicationStyles.flexBox,
	// ...ApplicationStyles.margins,
	closeBtn: {
		position: 'absolute',
		width: Metrics.screenWidth * 32 / 375,
		height: Metrics.screenWidth * 32 / 375,
		top: Metrics.screenWidth * 69/ 375,
		left: Metrics.screenWidth * 319/ 375
	},
	btnText: {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute'
	}
});
