import React from 'react';
import {
	View,
	TouchableOpacity,
} from 'react-native';

import {
	Svg,
	G,
	ClipPath,
	Defs,
	Stop,
	LinearGradient,
	Path,
	Rect
} from 'react-native-svg';
import { Metrics } from 'saeko-native/app/styles';
import styles from './ProfileHeaderLeftSvgStyle';

export default function ProfileHeaderLeftSvg(props) {
	return (
		<View style={[styles.top, styles.absolute]}>
			<Svg
				height={Metrics.screenWidth * 1.06}
				width={Metrics.screenWidth}
				viewBox="0 0 375 394"
				fill="none"
			>
				<G clipPath="url(#clip0)">
					<Path d="M72.5 93.5C47.7 149.1 13.8333 161 0 160V0H272.5C260.1 13.2 229.314 17.7332 210.5 20.5C176.5 25.5 97.3 37.9 72.5 93.5Z" fill="url(#paint0_linear)" />
				</G>
				<Defs>
					<LinearGradient id="paint0_linear" x1="272.5" y1="0" x2="132.706" y2="238.003" gradientUnits="userSpaceOnUse">
						<Stop offset="0" stopColor="#17AE4B" />
						<Stop offset="1" stopColor="#A7C538" />
					</LinearGradient>
					<ClipPath id="clip0">
						<Rect width="375" height="363" fill="white" />
					</ClipPath>
				</Defs>
			</Svg>
		</View>
	);
}

ProfileHeaderLeftSvg.propTypes = {
	// data: PropTypes.array
}

ProfileHeaderLeftSvg.defaultProps = {
	// data: []
}
