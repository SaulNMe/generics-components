import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	defaultStyle: {
		height: 35,
		width: 150,
		paddingVertical: Metrics.smallMargin,
		paddingHorizontal: Metrics.smallMargin,
		borderRadius: 100
	},
	blueButton: {
		backgroundColor: Colors.main,
	},
	disabledButton: {
		backgroundColor: Colors.gray,	
	},
	opacityButton: {
		backgroundColor: "rgba(255, 255, 255, 0.25)",
	},
	opacityDisabledButton: {
		backgroundColor: 'transparent',
		borderColor: "rgba(255, 255, 255, 0.25)",
		borderWidth: 1,
	},
	whiteButton: {
		backgroundColor: Colors.white,	
	},
	textBlue: {
		color: Colors.main,
		fontSize: Fonts.size.label,
	},
	textWhite: {
		color: Colors.white,
		fontSize: Fonts.size.label,
	},
	textOpacity: {
		color: Colors.white,
		fontSize: Fonts.size.label,
		fontWeight: Fonts.weight.bold
	},
	textDisabledOpacity: {
		color: "rgba(255, 255, 255, 0.5)"
	}
});
