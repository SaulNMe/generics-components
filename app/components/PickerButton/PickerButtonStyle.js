import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics, ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.margins,
	pickerContainer: {
		height: Metrics.screenHeight * 0.30,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		borderWidth: 1,
	}
});
