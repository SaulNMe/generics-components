import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	textInputStyle: {
		borderColor: 'transparent',
		padding: 5,
		width: '100%',
    	color: Colors.white,
    	fontSize: Fonts.size.regular,
    	fontWeight: Fonts.weight.bold
    },
});
