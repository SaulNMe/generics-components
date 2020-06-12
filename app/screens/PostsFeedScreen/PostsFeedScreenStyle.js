import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';


export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.margins,
	...ApplicationStyles.flexBox,
	container: {
		flex: 1,
		backgroundColor: Colors.white
	},
	main: {
		backgroundColor: Colors.bgColor,
	},
	mainTitle: {
		marginTop: 0,
	},
	header: { 
		position: 'absolute',
	},
	headerLogo: {
		position: 'absolute',
		zIndex: 2,
		width: Metrics.screenWidth,
		height: Metrics.screenWidth * 0.3989,
	}
});
