import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';

const circle_size = 60;

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	circle: {
		width: circle_size,
		height: circle_size,
		position: 'absolute',
		top: -60,
		left: -25,
		borderRadius: circle_size
	}
});
