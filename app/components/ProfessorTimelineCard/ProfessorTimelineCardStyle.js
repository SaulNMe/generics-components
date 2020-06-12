import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	verticalDivider: {
		backgroundColor: Colors.light,
		height: '90%',
		width: 1,
	},
	time: {
		width: 55,
		alignItems: 'center',
		marginTop: 4,
		marginRight: 10
	},
	paddingTop: {
		paddingTop: 5
	},
	timelineCard: {
		borderWidth: 1,
		borderRadius: 10,
		paddingHorizontal: Metrics.baseMargin,
		paddingVertical: Metrics.smallMargin,
		width: '100%'
	}
	// timelineCard: {
	// 	height: 90,
	// },
});
