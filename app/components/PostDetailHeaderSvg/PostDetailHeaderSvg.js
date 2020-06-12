import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View } from 'react-native';
import {
	Svg,
	ClipPath,
	Defs,
	Stop,
	LinearGradient,
	G,
	Path,
	Rect
} from 'react-native-svg';
import { Metrics } from 'saeko-native/app/styles';

import PropTypes from 'prop-types';
import styles from './PostDetailHeaderSvgStyle';

export default function PostDetailHeaderSvg (props) {
	return (
		<Svg
			width={Metrics.screenWidth}
			height={Metrics.screenWidth * 178/375}
			viewBox="0 0 375 178"
			fill="none"
		>
			<G>
				<Path d="M257.5 177.5C155.662 177.5 40.6791 124.774 22.222 153.739C11.7186 139.479 71.5044 45.3048 102.71 0H375V128.5C360.729 134.442 359.338 177.5 257.5 177.5Z" fill="url(#paint0_linear)" fillOpacity="0.95"/>
				<Path d="M72.5 93.5C47.7 149.1 13.8333 161 0 160V0H272.5C260.1 13.2 229.314 17.7332 210.5 20.5C176.5 25.5 97.3 37.9 72.5 93.5Z" fill="url(#paint1_linear)"/>
			</G>
			<Defs>
				<LinearGradient id="paint0_linear" x1="21" y1="0" x2="163.24" y2="283.679" gradientUnits="userSpaceOnUse">
					<Stop offset="0" stopColor="#AA258C"/>
					<Stop offset="1" stopColor="#F44336"/>
				</LinearGradient>
				<LinearGradient id="paint1_linear" x1="272.5" y1="0" x2="132.706" y2="238.003" gradientUnits="userSpaceOnUse">
					<Stop offset="0" stopColor="#17AE4B"/>
					<Stop offset="1" stopColor="#A7C538"/>
				</LinearGradient>
			</Defs>
		</Svg>
	);
}


PostDetailHeaderSvg.propTypes = {
	// data: PropTypes.array
}

PostDetailHeaderSvg.defaultProps = {
	// data: []
}







