import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.margins,
	...ApplicationStyles.flexBox,
	logo: {
		width: Metrics.screenWidth * 0.4
	},
	customIndicator: {
		backgroundColor: 'rgba(45, 147, 208, 0.3)'
	},
	activeIndicator: {
		backgroundColor: Colors.main
	},
	swiper: {
		marginTop: Metrics.screenHeight * 0.25
	}
});
