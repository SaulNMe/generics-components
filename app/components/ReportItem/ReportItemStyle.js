import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.margins,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.screen,
	flex08: {
		flex: 0.8
	},
	flex01: {
		flex: 0.1
	},
	floatingLeft: {
		position: 'absolute',
		top: -20,
		left: -10
	},
	leftPadding: {
		paddingLeft: 10
	},
	floatingRight: {
		position: 'absolute',
		top: -20,
		right: -10
	},
	rightPadding: {
		paddingRight: 10
	},
	simpleCard: {
		...ApplicationStyles.screen.card,
		paddingVertical: Metrics.baseMargin,
		borderRadius: 16,
		elevation: 11
	}
});
