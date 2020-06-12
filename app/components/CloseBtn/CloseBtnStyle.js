import { StyleSheet } from 'react-native';
import { Fonts, Colors } from 'saeko-native/app/styles';

export default StyleSheet.create({
	mainBtnColor: {
		borderRadius: 15,
		width: 30,
       	height: 30,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor: '#00000030',
	},
	darkBtnColor: {
		borderRadius: 15,
		width: 30,
       	height: 30,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor: '#FFFFFF50',
	},
	mainStyle: {
		fontSize: Fonts.size.title,
		color: '#4F4F4F',
		opacity: 1
	},
	darkStyle: {
		fontSize: Fonts.size.title,
		color: Colors.white,
		opacity: 1
	}
});
