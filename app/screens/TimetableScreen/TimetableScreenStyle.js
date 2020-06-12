import { StyleSheet } from 'react-native';
import { Fonts, Colors, ApplicationStyles, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	footerSpace: {
		height: 75
	},
	emptyImg: {
		// width: Metrics.screenWidth * 0.8,
		height: Metrics.screenHeight * 0.4,
	}
});
