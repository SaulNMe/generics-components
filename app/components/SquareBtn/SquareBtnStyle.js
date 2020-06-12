import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	btn: {
		width: 150, 
		height: 150,
		padding: Metrics.smallestMargin
	},
	bg: {
		borderRadius: 24,
		paddingVertical: Metrics.doubleBaseMargin,
		paddingHorizontal: Metrics.doubleBaseMargin,
		width: '100%',
		height: '100%'
	}
});
