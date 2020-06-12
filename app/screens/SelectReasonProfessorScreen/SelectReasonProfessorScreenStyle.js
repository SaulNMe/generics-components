import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	...ApplicationStyles.screen,
	container: {
		flex: 1
	},
	footerSpace: {
		height: 75
	},
	floatBtn: {
		position: 'absolute',
		bottom: Metrics.doubleBaseMargin,
		right: Metrics.doubleBaseMargin
	},
	reasonsList: {
		width: Metrics.screenWidth * 0.7,
		marginTop: Metrics.baseMargin
	},
	dot: {
		width: 4,
		height: 4,
		borderRadius: 2,
		backgroundColor: Colors.white
	}
});
