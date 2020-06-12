import { Dimensions, Platform, StatusBar } from 'react-native';
const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin


const metrics = {
	doubleBaseMargin: 32,
	bigMargin: 24,
	baseMargin: 16,
	smallMargin: 8,
	smallestMargin: 4,
	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
	navBarHeight: (Platform.OS === 'ios') ? 64 : 79,
	statusBarHeight: StatusBar.currentHeight,
	buttonRadius: 5,
	icons: {
		small: 16,
		regular: 24,
		large: 48,
	},
	imageIcons: {
		ultraHuge: 70,
		huge: 60,
		base: 40,
		small: 32,
		tiny: 24
	},
	circleIcons: {
		ultraHuge: 160,
		extraHuge: width < 375 ? 120 : 136,
		bigHuge: 80,
		bighuge: 80,
		huge: 60,
		base: 40,
		small: 32,
		tiny: 24
	},
	imageViewHeight: 274
};

export default metrics;
