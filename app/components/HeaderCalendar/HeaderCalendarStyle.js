import { StyleSheet } from 'react-native';
import { Colors, ApplicationStyles, Metrics } from 'saeko-native/app/styles';
import { Platform } from 'react-native';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	weekContainer: {
		width: Metrics.screenWidth,
		height: 15,
		flexDirection: 'row',
	},
	txtWeekEnd: {
		color: Colors.lighter,
		fontSize: 14,
	},
	txtWeekDay: {
		color: Colors.white,
		fontSize: 14,
	},
	txtActiveDay:{
		color: Colors.purple,
		fontSize: 14,
	},
	week: {
		flex: 1,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	circleButton: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	circleNum: { 
		width: Metrics.screenWidth / 7,
		height: 50,
	},
	tocuhCircle: { 
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle: { 
		justifyContent: 'center',
		alignItems: 'center',
		width: 35,
		height: 35,
		borderRadius: 20,
		borderColor: '#fff'
	},
	circleTxt: { 
		fontSize: 15,
		lineHeight: Platform.OS === 'ios' ? 19 : 15
	},
	item: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},
	point: { height: 4, width: 4, backgroundColor: 'white', width: 4, height: 4, borderRadius: 2, bottom: 3 }
});