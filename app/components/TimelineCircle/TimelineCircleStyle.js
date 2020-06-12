import { StyleSheet, Platform} from 'react-native';
import { Metrics, Colors, ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	circleContainer: {
		padding: Metrics.smallestMargin,
		justifyContent: 'center',
		alignItems: 'center',
		width: 20,
		height: 20,
		borderRadius: 10
	},
	insideCircleContainer: {
		backgroundColor: Colors.white,
		padding: Metrics.smallestMargin,
		justifyContent: 'center',
		alignItems: 'center',
		width: 8,
		height: 8,
		borderRadius: 4
	},
});
