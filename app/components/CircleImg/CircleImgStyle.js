import { StyleSheet, Platform } from 'react-native';
import { Fonts, Colors, Metrics } from 'saeko-native/app/styles';
import { ApplicationStyles } from 'saeko-native/app/styles';

export default StyleSheet.create({
	indicator: {
		flex: 1,
		justifyContent: 'center'
	},
	avatarCustomSize: (size = 0) => {
		return {
			width: size,
			height: size,
			borderRadius: (Platform.OS === 'ios') ? size / 2 : size
		}
	},
	avatarUltraHuge: {
		width: Metrics.circleIcons.ultraHuge,
		height: Metrics.circleIcons.ultraHuge,
		borderRadius: (Platform.OS === 'ios') ? Metrics.circleIcons.ultraHuge / 2 : Metrics.circleIcons.ultraHuge
	},
	avatarExtraHuge: {
		width: Metrics.circleIcons.extraHuge,
		height: Metrics.circleIcons.extraHuge,
		borderRadius: (Platform.OS === 'ios') ? Metrics.circleIcons.extraHuge / 2 : Metrics.circleIcons.extraHuge
	},
	avatarBigHuge: {
		width: Metrics.circleIcons.bigHuge,
		height: Metrics.circleIcons.bigHuge,
		borderRadius: (Platform.OS === 'ios') ? Metrics.circleIcons.bigHuge / 2 : Metrics.circleIcons.bigHuge
	},
	avatarHuge: {
		width: Metrics.circleIcons.huge,
		height: Metrics.circleIcons.huge,
		borderRadius: (Platform.OS === 'ios') ? Metrics.circleIcons.huge / 2 : Metrics.circleIcons.huge
	},
	avatarBase: {
		width: Metrics.circleIcons.base,
		height: Metrics.circleIcons.base,
		borderRadius: (Platform.OS === 'ios') ? Metrics.circleIcons.base / 2 : Metrics.circleIcons.base
	},
	avatarSmall: {
		width: Metrics.circleIcons.small,
		height: Metrics.circleIcons.small,
		borderRadius: (Platform.OS === 'ios') ? Metrics.circleIcons.small / 2 : Metrics.circleIcons.small
	},
	avatarTiny: {
		width: Metrics.circleIcons.tiny,
		height: Metrics.circleIcons.tiny,
		borderRadius: (Platform.OS === 'ios') ? Metrics.circleIcons.tiny / 2 : Metrics.circleIcons.tiny
	},
	icon: {
		borderWidth: 2,
		borderColor: Colors.white,
		width: '90%',
		height: '90%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: (Platform.OS === 'ios') ? 30 : 30
	},
	iconTiny: {
		borderWidth: 1
	},
	container: {
		position: 'absolute',
		backgroundColor: 'rgba(0,0,0,0.6)',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: (Platform.OS === 'ios') ? 25 : 30
	}
});
