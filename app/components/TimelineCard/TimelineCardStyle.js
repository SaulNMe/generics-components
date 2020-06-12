import { StyleSheet, Platform } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	textStyle: {
		fontSize: Fonts.size.label,
		color: "#6FCF97"
	},
	verticalDivider: {
		backgroundColor: Colors.ocean,
		width: 1,
		marginHorizontal: 9.5
	},
	time: {
		width: 55,
		alignItems: 'center',
		marginTop: 4,
		marginLeft: Metrics.baseMargin,
		marginRight: 10
	},
	timelineCard: {
		borderWidth: 1,
		borderRadius: 10,
		paddingHorizontal: Metrics.baseMargin,
		paddingVertical: Metrics.smallMargin,
		width: '100%'
	},
	dot: {
		width: 4,
		height: 4,
		borderRadius: 2,
		marginHorizontal: Metrics.smallMargin
	}
});