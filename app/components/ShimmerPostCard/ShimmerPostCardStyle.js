import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'saeko-native/app/styles';

const circle_size = 80;

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,

	circle: {
		width: circle_size,
		height: circle_size,
		position: 'absolute',
		top: -80,
		left: -30,
		borderRadius: circle_size
	},
});
