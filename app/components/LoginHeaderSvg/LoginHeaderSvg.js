import React, {
	// useEffect, 
	// useState 
} from 'react';
import {
	Svg,
	ClipPath,
	Defs,
	Stop,
	LinearGradient,
	Path,
	Rect
} from 'react-native-svg';
import { Metrics } from 'saeko-native/app/styles';

export default function LoginHeaderSvg(props) {

	return (
		<Svg
			width={Metrics.screenWidth}
			height={Metrics.screenWidth * 0.8}
			viewBox="0 0 375 299"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path d="M39.5162 231.128C24.6395 271.922 6.97345 284.707 0 286V0H394C381.215 42.6783 285.912 64.8488 177.823 88.6822C71.4779 118.612 58.1121 180.136 39.5162 231.128Z" fill="url(#paint0_linear)" />
			<Path d="M-5 286V292.013L0.911737 290.916C6.06263 289.961 13.1639 285.418 20.6132 276.604C28.2206 267.603 36.6211 253.661 44.2136 232.841C45.72 228.71 47.1819 224.548 48.6498 220.369C56.395 198.317 64.3051 175.795 79.7759 154.99C97.9608 130.535 126.847 108.248 179.04 93.5339C232.954 81.6454 284.074 70.0882 323.327 56.1185C342.974 49.1262 359.915 41.44 372.842 32.6436C385.735 23.8702 395.13 13.6533 398.79 1.4348L400.717 -5H394H0H-5V0V286Z" stroke="#2D93D0" strokeOpacity="0.1" strokeWidth="10" />
			<Defs>
				<LinearGradient id="paint0_linear" x1="394" y1="0" x2="122.074" y2="374.612" gradientUnits="userSpaceOnUse">
					<Stop offset="0" stopColor="#156AB2" />
					<Stop offset="1" stopColor="#2D93D0" />
				</LinearGradient>
			</Defs>
		</Svg>

	);
}


LoginHeaderSvg.propTypes = {
	// data: PropTypes.array
}

LoginHeaderSvg.defaultProps = {
	// data: []
}







