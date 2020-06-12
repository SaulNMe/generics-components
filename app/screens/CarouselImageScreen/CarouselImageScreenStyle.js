import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: Colors.black,
	},
	buttonStyle: {
		position: 'absolute',
		zIndex: 10,
		right: Metrics.baseMargin,
	}
});
