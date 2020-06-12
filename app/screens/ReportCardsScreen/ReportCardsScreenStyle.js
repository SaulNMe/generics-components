import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	headerTitle: {
		position: 'absolute',
		top: (Metrics.screenWidth * 0.352) / 2.5,
		left: Metrics.baseMargin
	}
});
