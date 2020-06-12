import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.main,
	},
	logoContainer: {
		width: Metrics.screenWidth*0.3,
		height: Metrics.screenWidth*0.3,
		marginBottom: 15
	}
});
