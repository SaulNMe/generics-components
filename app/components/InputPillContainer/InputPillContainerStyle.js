import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	// ...ApplicationStyles.margins,
	container: {
		borderBottomRightRadius: 100,
		borderTopRightRadius: 100,
		shadowColor: Colors.black,
		shadowRadius: 4,
		shadowOpacity: 0.3,
		shadowOffset: { width: 0, height: 3 },
		elevation: 5,
		// minWidth: 30,
		width: '100%',
		maxWidth: Metrics.screenWidth * 0.8,
	},
	btn: {
		flexDirection: 'column',
		justifyContent: 'center',
		marginLeft: -30,
		zIndex: 10,
		elevation: 6
	},
	whiteBg: {
		height: 60,
		zIndex: 11,
		width: 60,
		borderRadius: 30,
		backgroundColor: Colors.white
	}
});
