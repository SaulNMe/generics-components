import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'saeko-native/app/styles';


export default StyleSheet.create({
	...ApplicationStyles.flexBox,
	container: {
		height: Metrics.navBarHeight * 0.8,
		width: '100%',
		borderTopWidth: 1,
		borderTopColor: '#9CADC666'
	}
});
