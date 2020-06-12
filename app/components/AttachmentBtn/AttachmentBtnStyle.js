import { StyleSheet } from 'react-native';
import { Fonts, Colors, ApplicationStyles } from 'saeko-native/app/styles';


export default StyleSheet.create({
	...ApplicationStyles.screen,
	container:{
		marginTop: 3,
		flexDirection: 'row',
		borderWidth: 1,
		borderRadius: 40,
		paddingLeft: 10,
		paddingRight:10,
		paddingBottom: 5,
		paddingTop: 5,
		alignSelf: 'flex-start'
	},
	imageContainer: {
		width: 19,
		height: 22,
		marginRight: 5
	},
	fileName: {
		color: Colors.dark,
		fontSize: 16
	}
});
