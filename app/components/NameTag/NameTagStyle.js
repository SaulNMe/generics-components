import { StyleSheet, Dimensions } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.margins,
	...ApplicationStyles.flexBox,

	container: {
		height: 56,
		opacity: 0.8
	}
});
