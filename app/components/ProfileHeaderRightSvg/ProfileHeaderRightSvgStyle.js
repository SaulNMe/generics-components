import { StyleSheet, Platform } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';

let topSpace = (Platform.OS === 'ios') ? -(((225/224)*Metrics.screenWidth)+(1600/7)) : -(((109375/59222)*Metrics.screenWidth)-(9335875/947552));
let topSpaceImgs = (Platform.OS === 'ios') ? -(((225/224)*Metrics.screenWidth)+(1600/7)) : -(((3300000/2409389)*Metrics.screenWidth)+(113070060/2409389));


export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	absolute: { position: 'absolute' },
	topSpace: { top: -530, right: -4},
	topSpaceImgs: { top: -535},
	cicleSpace: { width: 160, position: 'absolute', top: 0, right: 0 },
	imgLayout: { marginTop: 60, right: -20 },
	smallImg: { bottom: -30 },
	hugeImg: { bottom: -20 }

});

