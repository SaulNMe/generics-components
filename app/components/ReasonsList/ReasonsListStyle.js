import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from 'saeko-native/app/styles';


export default StyleSheet.create({
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	footerSpace: {
		height: 75
	}
});
