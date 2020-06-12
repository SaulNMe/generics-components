import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics, ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	circularImg: {
		height: 55,
		width: 55,
		borderRadius: 55 / 2,
		backgroundColor: Colors.lightBlue
	}
});
