import React from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	View,
	TouchableOpacity,
	Image
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import styles from './ImageViewStyle';
import NavigationService from 'saeko-native/app/services/NavigationService';

function ImageView(props) {
	let img = props.images[props.index] ? { uri: props.images[props.index].url } : require('saeko-native/assets/default_avatar.jpg');
	return (
		<TouchableOpacity
			style={{ flex: props.flex }}
			onPress={() => NavigationService.navigate('CarouselImageModal', {
				CarouselContent: props.images,
				index: props.index
			})}
		>
			<Image
				resizeMode={props.resizeMode}
				style={[styles.flex1, styles.fullWidth]}
				source={img}
			/>
		</TouchableOpacity>
	)
}

ImageView.propTypes = {
	flex: PropTypes.number,
	url: PropTypes.string,
	resizeMode: PropTypes.string

}

ImageView.defaultProps = {
	flex: 1,
	images: [],
	resizeMode: 'cover'
}


export default React.memo(ImageView);
