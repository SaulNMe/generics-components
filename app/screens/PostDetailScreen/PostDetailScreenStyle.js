import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	titleHeader: {
		position: 'absolute',
		left: Metrics.baseMargin,
		top: Metrics.screenWidth * 178/375 * 0.2
	},
	list: {
		marginTop: Metrics.screenWidth * 178/375 + Metrics.bigMargin
	},
	customIndicator: {

	},
	customIndicator: {
		backgroundColor: 'rgba(45, 147, 208, 0.3)'
	},
	activeIndicator: {
		backgroundColor: Colors.main
	},
});
