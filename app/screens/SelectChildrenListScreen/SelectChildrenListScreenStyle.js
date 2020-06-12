import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	colorMain: {
		color: Colors.main
	},
	contentContainer: {
		height: Metrics.screenHeight - 140,
	},
	footerSpace: {
		height: 70
	},
	headerTitle: {
		position: 'absolute',
		width: Metrics.screenWidth * 0.5,
		top: (Metrics.screenWidth * 0.36) / 3,
		left: Metrics.baseMargin
	},
	floatBtn: {
		position: 'absolute',
		bottom: Metrics.baseMargin,
		right: Metrics.baseMargin
	}
});
