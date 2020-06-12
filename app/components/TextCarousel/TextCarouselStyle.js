import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	activeIndicator: {
		marginTop: Metrics.doubleBaseMargin,
		justifyContent: 'flex-end',
		backgroundColor: Colors.white
	},
	opacity07: {
		opacity: 0.7
	}
});
