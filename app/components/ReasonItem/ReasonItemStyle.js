import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	reasonContainer: {
		flex: 1,
		paddingVertical: Metrics.smallMargin
	},
});
