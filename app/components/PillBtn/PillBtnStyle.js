import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	shadow: {
		shadowColor: '#000',
		borderBottomWidth: 0,
		shadowRadius: 4,
		shadowOpacity: 0.3,
		shadowOffset: { width: 0, height: 3 },
		elevation: 5
	},
	hidden: {
		overflow: 'hidden',
	},
	leftBtn: {
		borderBottomRightRadius: 100,
		borderTopRightRadius: 100
	},
	rightBtn: {
		borderBottomLeftRadius: 100,
		borderTopLeftRadius: 100
	}
});
