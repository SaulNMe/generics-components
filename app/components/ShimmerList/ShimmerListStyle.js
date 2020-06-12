import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	circle: {
		width: Metrics.circleIcons.huge, 
		height: Metrics.circleIcons.huge, 
		borderRadius: 80
	},
	column: {
		flexDirection: 'column'
	},
	icon: {
		width: Metrics.icons.regular, 
		height: Metrics.icons.regular, 
	}
});