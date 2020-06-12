import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'saeko-native/app/styles';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = Dimensions.get('window').height;

export default StyleSheet.create({
	indicator: {
		backgroundColor: Colors.light
	},
	activeIndicator: {
		backgroundColor: Colors.white
	},
	imgContent: { 
		width: BannerWidth,
		height: BannerHeight
	}
});
