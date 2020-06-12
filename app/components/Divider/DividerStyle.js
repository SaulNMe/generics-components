import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.margins,
	divider: {
		height: 1,
		backgroundColor: Colors.gray,
		width:'100%'
	}
});
