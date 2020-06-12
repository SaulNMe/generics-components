import { StyleSheet, Dimensions } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	buttonContainer: {
		width: 120,
		borderRadius: 100,
	}
});
