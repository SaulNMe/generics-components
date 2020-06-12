import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Fonts, Colors, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: (Platform.OS === 'ios') ? 25 : 30	
	},
	disabled: {
		opacity: 0.7
	},
	avatarbigHuge: {
		width: Metrics.circleIcons.bighuge,
		height: Metrics.circleIcons.bighuge,
		borderRadius: (Platform.OS === 'ios') ? Metrics.circleIcons.bighuge/2 : Metrics.circleIcons.bighuge	
	},
	avatarHuge: {
		width: Metrics.circleIcons.huge,
		height: Metrics.circleIcons.huge,
		borderRadius: (Platform.OS === 'ios') ? Metrics.circleIcons.huge/2 : Metrics.circleIcons.huge	
	},
	avatarBase: {
		width: Metrics.circleIcons.base,
		height: Metrics.circleIcons.base,	
		borderRadius: (Platform.OS === 'ios') ? Metrics.circleIcons.base/2 : Metrics.circleIcons.base
	},
	avatarSmall: {
		width: Metrics.circleIcons.small,
		height: Metrics.circleIcons.small,	
		borderRadius: (Platform.OS === 'ios') ? Metrics.circleIcons.small/2 : Metrics.circleIcons.small	
	},
	avatarTiny: {
		width: Metrics.circleIcons.tiny,
		height: Metrics.circleIcons.tiny,	
		borderRadius: (Platform.OS === 'ios') ? Metrics.circleIcons.tiny/2 : Metrics.circleIcons.tiny	
	},
});
