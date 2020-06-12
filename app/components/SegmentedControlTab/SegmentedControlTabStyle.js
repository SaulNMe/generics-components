import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	tabsConteiner: {
		width: '90%',
		alignSelf: 'center',
		borderRadius: 5,
		borderColor: Colors.main,
		borderWidth: 1
	},
	blueButton: {
		backgroundColor: Colors.main,
	},
	whiteButton: {
		backgroundColor: Colors.white,	
	},
	buttonStyleLeft: {
		flex: 0.5,
		padding: Metrics.smallMargin,
		borderTopLeftRadius: 4,
		borderBottomLeftRadius: 4
	},
	buttonStyleRight: {
		flex: 0.5,
		padding: Metrics.smallMargin,
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4
	},
});
