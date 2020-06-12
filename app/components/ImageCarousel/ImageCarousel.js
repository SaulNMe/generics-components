import React, { Component } from 'react';
import { 
    View,
    Image,
    Modal,
    ScrollView
} 
from 'react-native';
import PropTypes from 'prop-types';
import Gallery from 'react-native-image-gallery';

import styles from './ImageCarouselStyle';

export default class ImageCarousel extends Component {
    render() {
        return (
            <View style={styles.imgContent}>
                <Gallery
                    images={ this.props.imageList }
                    initialPage={ this.props.initialPage}
                />
            </View>
        );
    }
}


ImageCarousel.propTypes = {
  imageList: PropTypes.array
}

ImageCarousel.defaultProps = {
  imageList: []
}