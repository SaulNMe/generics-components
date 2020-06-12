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
	G,
	Path,
	Rect
} from 'react-native-svg';
import { Metrics } from 'saeko-native/app/styles';

export default function LoginFooterSvg (props) {
	return (
		<Svg 
			width={Metrics.screenWidth * 1.01} 
			height={Metrics.screenWidth * 0.7415}
			viewBox={`0 0 375 278`}
			fill='none'
		>
			<G>
				<Path d="M62.7803 236.697C13.9013 247.082 0.560538 268.559 0 278H375V29C364.91 41.391 366.031 56.7322 352.578 90.3649C302.13 203.654 123.879 223.716 62.7803 236.697Z" fill="url(#paint0_linear)"/>
				<Path d="M-4.99121 277.704L-5.30568 283H0H375H380V278V29V14.9409L371.123 25.8429C365.346 32.9369 362.889 40.8149 360.233 50.379C359.927 51.4815 359.616 52.6143 359.296 53.7806C356.823 62.8031 353.799 73.8356 347.972 88.4184C323.583 143.088 268.096 175.781 209.998 196.435C164.96 212.446 119.284 220.931 86.5777 227.006C77.099 228.767 68.7097 230.325 61.7412 231.806C36.733 237.119 20.3769 245.36 10.0894 253.845C-0.0843526 262.236 -4.60147 271.14 -4.99121 277.704Z" stroke="url(#paint1_linear)" strokeOpacity="0.1" strokeWidth="10"/>
			</G>
			<Defs>
			<LinearGradient id="paint0_linear" x1="375" y1="29" x2="145.509" y2="374.618" gradientUnits="userSpaceOnUse">
				<Stop offset="0" stopColor="#17AE4B"/>
				<Stop offset="1" stopColor="#A7C538"/>
			</LinearGradient>
			<LinearGradient id="paint1_linear" x1="375" y1="29" x2="145.509" y2="374.618" gradientUnits="userSpaceOnUse">
				<Stop offset="0" stopColor="#17AE4B"/>
				<Stop offset="1" stopColor="#A7C538"/>
			</LinearGradient>
			</Defs>
		</Svg>
	);
}


LoginFooterSvg.propTypes = {
	// data: PropTypes.array
}

LoginFooterSvg.defaultProps = {
	// data: []
}







