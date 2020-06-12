import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from 'saeko-native/app/styles';


export default StyleSheet.create({
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	...ApplicationStyles.screen,
	container: {
		flex: 1,
		backgroundColor: Colors.white
	}
});
