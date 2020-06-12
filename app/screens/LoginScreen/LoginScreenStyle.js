import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	textInputStyle: {
    	color: Colors.dark,
    	fontSize: Fonts.size.regular,
		borderColor: 'transparent',
		padding: Metrics.baseMargin,
		width: '80%'
    },
    backContainer: {
    	position: 'absolute',
		paddingTop: Metrics.screenHeight * 0.4,
		width: '100%'
    },
    flex15: {
    	flex: 1.5
    },
    logoSvg: {
    	alignItems: 'center',
        justifyContent: 'center',
    	right: 0,
    	left: 0,
    	top: Metrics.screenHeight * 0.17
    },
    footer: { 
        top: Metrics.screenHeight - Metrics.screenWidth * 0.74
    },
    header: {
        top: -5
    },
    logoLoading: {
        width: Metrics.screenWidth * 0.25,
        height: Metrics.screenWidth * 0.25,
    }
});

 