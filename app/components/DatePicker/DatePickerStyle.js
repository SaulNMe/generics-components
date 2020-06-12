import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		opacity: 0.4,
    	backgroundColor: Colors.black
	},
	IOSDatePicker: {
		borderRadius: 10,
		width: '100%',
		backgroundColor: Colors.white,
		marginBottom: Metrics.smallMargin
	},
	IOSDatePickerContainer: {
		position: 'absolute',
		borderRadius: 10,
		bottom: Metrics.smallMargin,
		right: Metrics.smallMargin,
		left: Metrics.smallMargin,
	},
	cancelBtn: {
		padding: Metrics.baseMargin,
		alignItems: 'center'
	},
	fieldStyle: {
		width: '100%',
		height: 60,
		paddingVertical: Metrics.baseMargin,
	}
});
