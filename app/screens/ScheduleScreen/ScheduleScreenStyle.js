import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	container: {
		flex: 1,
		backgroundColor: Colors.white
	},
	footerSpace: {
		height: 75
	},
	emptyImg: {
		// width: Metrics.screenWidth * 0.8,
		height: Metrics.screenHeight * 0.4,
	},
	bottomBtn: {
		position: 'absolute',
		bottom: 0,
		right: 0
	}
});
