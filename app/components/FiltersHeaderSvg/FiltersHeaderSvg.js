import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View } from 'react-native';
import {
	Svg,
	Defs,
	Stop,
	LinearGradient,
	G,
	Path
} from 'react-native-svg';
import { Metrics } from 'saeko-native/app/styles';
import PropTypes from 'prop-types';
import styles from './FiltersHeaderSvgStyle';

export default function FiltersHeaderSvg (props) {
	return (
		<Svg
			width={Metrics.screenWidth}
			height={Metrics.screenWidth * 0.576}
			viewBox="0 0 375 216"
			fill="none"
		>
			<G>
				<Path d="M6.22233e-06 192L0 0L375 0V188C375 239 267.5 175 53.5 214C14 221.199 6.22226e-06 207.5 6.22233e-06 192Z" fill="url(#paint0_linear)" fillOpacity="0.95"/>
			</G>
			<Defs>
				<LinearGradient id="paint0_linear" x1="2.23517e-05" y1="73" x2="117.999" y2="346.085" gradientUnits="userSpaceOnUse">
					<Stop offset="0" stopColor="#AA258C"/>
					<Stop offset="1" stopColor="#F44336"/>
				</LinearGradient>
			</Defs>
		</Svg>
	);
}


FiltersHeaderSvg.propTypes = {
	// data: PropTypes.array
}

FiltersHeaderSvg.defaultProps = {
	// data: []
}







