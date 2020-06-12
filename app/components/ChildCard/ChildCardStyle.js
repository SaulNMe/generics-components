import { StyleSheet, Dimensions } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'saeko-native/app/styles';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.margins,
	...ApplicationStyles.flexBox,

	container: {
		width: SCREEN_WIDTH - 30,
		height: SCREEN_HEIGHT - 220,
		justifyContent: 'flex-end', 
		position: 'absolute'
	},
	img: {
		flex: 1, 
		height: null, 
		width: null, 
		resizeMode: 'cover', 
		borderRadius: 20
	},
	doubleTopMargin: {
		marginTop: 100
	},
});
