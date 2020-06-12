import { StyleSheet, Dimensions } from 'react-native';
import { ApplicationStyles, Colors } from 'saeko-native/app/styles';


const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	container: {
		flex: 1,
		flexWrap: 'wrap',
		flexDirection: 'row',
		marginVertical: 10,
		//height: 274
	},
	overlayContainer: {
		position: 'absolute',
		backgroundColor: 'rgba(0,0,0,0.7)',
		top: 1,
		bottom: 1,
		left: 1,
		right: 1,
	},
	text: {
		fontSize: 30,
		color: Colors.white
	},
	imgDimensions: { 
		height: imageHeight,
		width:imageWidth
	}
});
