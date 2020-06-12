import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from 'saeko-native/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.margins,
	...ApplicationStyles.flexBox,
	card: {
		...ApplicationStyles.screen.card,
		borderRadius: 16,
		elevation: 11,
		paddingVertical: Metrics.baseMargin
	},
	flex02: { flex: 0.2 },
	flex07: { flex: 0.7 },
	flex01: { flex: 0.1 },
	sizeImg: { height: 20, width: 20 },
	sizeFloatingImg: { position: 'absolute', top: -40, left: -20 }
});