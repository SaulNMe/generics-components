import { StyleSheet, Platform } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	headerBg: {
		position: 'absolute',
		top: 0
	},
	filtersContainer: {
		position: 'absolute',
		width: Metrics.screenWidth,
		height: Metrics.screenWidth * 0.576,
		paddingRight: Metrics.baseMargin,
		paddingLeft: Metrics.doubleBaseMargin,
		paddingTop: Metrics.screenWidth * 0.12
	},
	childImg: {
		width: Metrics.circleIcons.base,
		height: Metrics.circleIcons.base,	
		borderRadius: (Platform.OS === 'ios') ? Metrics.circleIcons.base/2 : Metrics.circleIcons.base,
	},
	active: {
		borderWidth: 1,
		borderColor: Colors.white
	},
	list: {
		width: (Metrics.screenWidth - 48 - (Metrics.screenWidth - 48) % 48),
		marginTop: Metrics.smallMargin
	},
	indicator: {
		width: 3,
		height: 3,	
		borderRadius: (Platform.OS === 'ios') ? 1.5 : 3,
		backgroundColor: Colors.white,
		marginTop: Metrics.smallestMargin
	},
	unselected: {
		opacity: 0.4
	}
});
