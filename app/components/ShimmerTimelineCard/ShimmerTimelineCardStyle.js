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
	timelineCard: {
		height: 90,
	},
	verticalDivider: {
		backgroundColor: Colors.light,
		height: '90%',
		width: 1,
	},
	dataContainer: {
		marginLeft: Metrics.baseMargin
	},
	time: {
		width: 50,
		alignItems: 'center',
		marginTop: 4,
		marginLeft: Metrics.baseMargin,
		marginRight: 10
	},
	paddingTop: {
		paddingTop: 5
	}
});