import React, { useState, useEffect } from 'react';
import {
	Image,
	View
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './CircleImgStyle';
import { Colors, Metrics } from 'saeko-native/app/styles'
import { Feather, createIconSetFromFontello } from '@expo/vector-icons';
import Shimmer from 'saeko-native/app/components/Shimmer';

export default function CircleImg(props) {
	let [img, setImg] = useState();

	useEffect(() => {
		let defaultImg = props.image ? { uri: props.image } : require('saeko-native/assets/default_avatar.jpg');
		setImg(defaultImg)
	}, [props.image])
	let iconSize = Metrics.circleIcons[props.size.toLowerCase()];
	iconSize *= 0.6;
	let bg = { backgroundColor: Colors.light }
	let shimmerColors = ['#F0F0F0', '#DEDEDE', '#EDEDED'];

	return (
		<View>
			{
				props.isLoading ? (
					<Shimmer
						duration={1000}
						autoRun={true}
						style={[styles['avatar' + props.size], styles.indicator]}
						colorShimmer={shimmerColors}
					/>
				) : (
						<Image
							resizeMode='cover'
							style={styles['avatar' + props.size]}
							source={img}
							onError={() => setImg(require('saeko-native/assets/default_avatar.jpg'))}
						/>
					)
			}
			{props.selected &&
				<View style={[styles.container, styles['avatar' + props.size]]}>
					<View style={[styles.icon, (props.size === 'Tiny' && styles.iconTiny)]}>
						<Feather
							name={props.featherIconName}
							size={iconSize}
							color={Colors.white}
						/>
					</View>
				</View>
			}
		</View>
	);
}

CircleImg.propTypes = {
	selected: PropTypes.bool,
	size: PropTypes.string,
	isLoading: PropTypes.bool,
	featherIconName: PropTypes.string,
	image: PropTypes.string
}
CircleImg.defaultProps = {
	selected: false,
	size: 'Huge',
	isLoading: false,
	featherIconName: 'check',
	image: ''
}