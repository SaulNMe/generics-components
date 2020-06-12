import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.margins,
	...ApplicationStyles.flexBox,
	paddingBottom: {
		paddingBottom: 12
	},
	whiteBg: {
		backgroundColor: Colors.white
	},
	childImg: {
		width: 68,
		height: 68,	
		borderRadius: 34,
		borderWidth: 2,
		borderColor: Colors.white
	},
	indicator: {
		width: 4,
		height: 4,	
		borderRadius: 2,
		backgroundColor: Colors.white,
		marginHorizontal: Metrics.smallMargin
	},
	unSelected: {
		opacity: 0.4,
		borderWidth: 0,
		width: 68,
		height: 68,	
		borderRadius: 35
	},
	opacity: { opacity: 0.4 },
	nextBtn: {
		position: 'absolute',
		right: Metrics.baseMargin,
		bottom: Metrics.baseMargin
	}
});
