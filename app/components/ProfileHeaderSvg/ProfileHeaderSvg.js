import React from 'react';
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
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Metrics } from 'saeko-native/app/styles';

export default function ProfileHeaderSvg(props) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<G clipPath="url(#clip0)">
				<Path d="M72.5 93.5C47.7 149.1 13.8333 161 0 160V0H272.5C260.1 13.2 229.314 17.7332 210.5 20.5C176.5 25.5 97.3 37.9 72.5 93.5Z" fill="url(#paint0_linear)" />
				<Path d="M177.894 129.766C191.25 25.255 274.5 -21 375 -21V363C375 343.457 369.184 313.371 320.069 301.1C258.675 285.762 161.2 260.405 177.894 129.766Z" fill="url(#paint1_linear)" />
			</G>
			<Defs>
				<LinearGradient id="paint0_linear" x1="272.5" y1="0" x2="132.706" y2="238.003" gradientUnits="userSpaceOnUse">
					<Stop offset="0" stopColor="#17AE4B" />
					<Stop offset="1" stopColor="#A7C538" />
				</LinearGradient>
				<LinearGradient id="paint1_linear" x1="176" y1="-21" x2="489.741" y2="141.59" gradientUnits="userSpaceOnUse">
					<Stop offset="0" stopColor="#AA258C" />
					<Stop offset="1" stopColor="#F44336" />
				</LinearGradient>
				<ClipPath id="clip0">
					<Rect width="375" height="363" fill="white" />
				</ClipPath>
			</Defs>
		</Svg>
	);
}


ProfileHeaderSvg.propTypes = {
	// data: PropTypes.array
}

ProfileHeaderSvg.defaultProps = {
	// data: []
}







