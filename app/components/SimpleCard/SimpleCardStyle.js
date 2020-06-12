import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	card: {
		...ApplicationStyles.screen.card,
		borderRadius: 0,
		elevation: 11
	},
	border: {
		borderRadius: 16
	}
});
