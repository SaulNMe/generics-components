import { StyleSheet, Dimensions } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	boxContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	inner:{
		borderWidth: 3,
		borderRadius: 8,
		paddingHorizontal: Metrics.baseMargin,
	},
	absent: {
		color: Colors.absent,
		fontSize: Fonts.size.title,
		letterSpacing: 3
	},
	present: {
		color: Colors.present,
		fontSize: Fonts.size.title,
		letterSpacing: 3
	}
});
