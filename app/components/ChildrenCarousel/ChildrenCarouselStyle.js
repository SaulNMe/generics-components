import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from 'saeko-native/app/styles';
import {
	Dimensions
} from 'react-native';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.margins,
	childrenContainer:{
		height: Metrics.circleIcons.huge,
		alignItems: 'center',
	},
	childrensGroup: {
		flex: 1,
		flexDirection: 'row',
		width: Metrics.screenWidth,
		justifyContent: 'space-evenly'
	}
});
