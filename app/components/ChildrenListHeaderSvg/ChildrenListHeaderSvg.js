import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {
	Svg,
	Defs,
	Stop,
	LinearGradient,
	G,
	Path,
	Rect
} from 'react-native-svg';
import { Metrics } from 'saeko-native/app/styles';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './ChildrenListHeaderSvgStyle';

export default function ChildrenListHeaderSvg (props) {
	return (
		<React.Fragment>
			<Svg
				width={Metrics.screenWidth}
				height={Metrics.screenWidth * 0.36}
				viewBox="0 0 375 135"
				fill="none"
			>
				<Defs>
					<LinearGradient id="paint0_linear" x1="0" y1="0" x2="107.282" y2="216.948" gradientUnits="userSpaceOnUse">
						<Stop offset="0" stopColor="#AA258C"/>
						<Stop offset="1" stopColor="#F44336"/>
					</LinearGradient>
					<LinearGradient id="paint1_linear" x1="428.337" y1="49.663" x2="276.063" y2="78.3708" gradientUnits="userSpaceOnUse">
						<Stop offset="0" stopColor="#17AE4B"/>
						<Stop offset="1" stopColor="#A7C538"/>
					</LinearGradient>
				</Defs>
				<G>
					<Path d="M191 124C179.237 126.372 201.5 107.5 201.5 99.5L201.5 96V0.5L375 0V120C354 127 312.5 127.808 302 127C256.5 123.5 250.5 112 191 124Z" fill="white" fillOpacity="0.9"/>
					<Path d="M149.539 130.117C63.8364 144.23 14.2925 123.525 0 120.903V0H273C269.39 30.0243 224.415 40.1394 220 74.9396C213 130.117 205.5 120.903 149.539 130.117Z" fill="url(#paint0_linear)"/>
					<Path d="M304.411 -16.8887C336.886 -39.5332 352.591 -28.9138 374.415 -3.28308C392.523 17.9851 376.214 53.8782 348.281 53.8423C348.281 53.8423 349.828 55.564 309.253 44.648C288.785 39.1415 239.894 28.0992 304.411 -16.8887Z" fill="url(#paint1_linear)"/>
				</G>
			</Svg>
			<TouchableOpacity
				onPress={props.onPress}
				style={styles.closeBtn}
				activeOpacity={0.4}
			>
				<Svg
					width={Metrics.screenWidth}
					height={Metrics.screenWidth * 0.36}
					viewBox="0 0 375 135"
					fill="none"
				>
					<Rect x="0" y="0" width="32" height="32" rx="16" fill="url(#paint2_linear)" fillOpacity="0.9"/>
					<Defs>
						<LinearGradient id="paint2_linear" x1="32" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
							<Stop offset="0" stopColor="#156AB2"/>
							<Stop offset="1" stopColor="#2D93D0"/>
						</LinearGradient>
					</Defs>
				</Svg>
				<View style={styles.btnText}>
					<Feather name='x' color='#fff' size={22}/>
				</View>
			</TouchableOpacity>
		</React.Fragment>
	);
}


ChildrenListHeaderSvg.propTypes = {
	onPress: PropTypes.func
	// data: PropTypes.array
}

ChildrenListHeaderSvg.defaultProps = {
	onPress: () => {}
	// data: []
}







