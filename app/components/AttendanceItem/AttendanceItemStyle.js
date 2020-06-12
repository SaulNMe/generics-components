import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	flex08: { 
		flex: 0.8 
	},
	flex01: { 
		flex: 0.1 
	},
	leftPadding: {
		paddingLeft: 10 
	},
	floatingLeft: { 
		position: 'absolute',
		top: -20,
		left: -10 
	},
	container: {
		flex: 1,
		borderRadius: 16,
		marginBottom: Metrics.smallMargin,
		backgroundColor: Colors.white,
		borderColor: Colors.gray,
		borderWidth: 1
	}
});
