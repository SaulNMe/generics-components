import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './PostFeedHeaderSvgStyle';
import { Metrics } from 'saeko-native/app/styles';

import {
	Svg,
	ClipPath,
	Defs,
	Stop,
	LinearGradient,
	G,
	Path,
	Rect,
} from 'react-native-svg';
export default function PostFeedHeaderSvg (props) {
	return (
		<React.Fragment>
			<View  opacity={0.95} style={[styles.absolute, {top: -9}]}>
				<Svg
					width={Metrics.screenWidth < 379 ? 379:Metrics.screenWidth}
					height={Metrics.screenWidth < 379 ? 151:Metrics.screenWidth * 0.415}
					viewBox="0 0 379 151"
					fill="none"
				>
					<G clipPath="url(#clipPath)">
						<Path d="M0 0L-1 128C-1 128 36 149.519 94 149C235 147.739 233.5 101.5 376 127L375 0H0Z" fill="white" stroke="#F0F0F0" strokeWidth="1"/>
					</G>
					<ClipPath id="clipPath">
						<Rect width={Metrics.screenWidth} height="394" fill="white"/>
					</ClipPath>
				</Svg>
			</View>
			<View style={[styles.absolute, { left: -5, right: -5, top: -5}]}>
				<Svg
					width={Metrics.screenWidth + 30} 
					height={Metrics.screenWidth * 0.43} 
					viewBox="0 0 376 150"
					fill="none"
				>
					<Defs>
						<LinearGradient id="linearGradient1" x1="375" y1="0" x2="82" y2="131" gradientUnits="userSpaceOnUse">
							<Stop offset="0" stopColor="#17AE4B"/>
							<Stop offset="1" stopColor="#A7C538"/>
						</LinearGradient>
						<LinearGradient id="linearGradient2" x1="375" y1="0" x2="4" y2="375" gradientUnits="userSpaceOnUse">
							<Stop offset="0" stopColor="#AA258C"/>
							<Stop offset="1" stopColor="#F44336"/>
						</LinearGradient>
					</Defs>
					<G clipPath="url(#clipPath)">
						<Path d="M88.5 68C56.8114 77.1159 29 65 0 71V0H197.5C186.459 5.81377 176.126 14.8805 159 27.5C128.464 50 125 57.5 88.5 68Z" fill="url(#linearGradient1)"/>
						<Path d="M375 0V123C267.272 109.455 268.621 35.3563 282.762 0H375Z" fill="url(#linearGradient2)"/>
					</G>
					<ClipPath id="clipPath">
						<Rect width="375" height="394" fill="white"/>
					</ClipPath>
				</Svg>
			</View>
		</React.Fragment>

	);
}


PostFeedHeaderSvg.propTypes = {
	// data: PropTypes.array
}

PostFeedHeaderSvg.defaultProps = {
	// data: []
}







