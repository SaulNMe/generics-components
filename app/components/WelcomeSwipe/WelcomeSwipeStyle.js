import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,

	container: {
		height: Metrics.statusBarHeight ? Metrics.screenHeight - Metrics.statusBarHeight: Metrics.screenHeight,
		zIndex: 11
	},
	welcomeSvg: {
		bottom: Metrics.screenHeight / 2, 
	},
	whiteContainer: { backgroundColor: '#fff' },
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
		zIndex: 11
	}
});
