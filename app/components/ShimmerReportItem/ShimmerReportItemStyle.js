import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'saeko-native/app/styles';

const circle_size = 60

export default StyleSheet.create({
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	circle: {
		width: circle_size,
		height: circle_size,
		position: 'absolute',
		top: -5,
		right: -10,
		borderRadius: circle_size
	},
});
