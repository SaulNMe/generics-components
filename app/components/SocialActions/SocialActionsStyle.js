import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';
export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingTop: 16,
		marginLeft: 19
	},
	actions:{
		flexDirection: 'row',
		justifyContent: 'flex-end'
	}
});