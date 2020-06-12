import { StyleSheet } from 'react-native';
import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.margins,
	lessBtn: {
		position: 'absolute'
	},
	animatedContainer: {
		overflow: 'hidden'
	}
});
