import React, { PureComponent } from 'react';
import { 
	View,
	Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import Carousel from 'react-native-banner-carousel';

import BodyText from 'saeko-native/app/components/BodyText';
import SubtitleText from 'saeko-native/app/components/SubtitleText';
import { Metrics } from 'saeko-native/app/styles';
import styles from './TextCarouselStyle';

export default class TextCarousel extends PureComponent {
	renderPage(item, index) {
		return (
			<View key={index} style={[styles.alignItemsCenter, styles.baseHorizontalPadding, styles.flex1]}>
				<SubtitleText 
					text={item.title}
					align='center'
					color="white"
					weight="medium"
				/>
				<View style={styles.opacity07}>
					<BodyText 
						align='center'
						text={item.text}
						color="white"
					/>
				</View>
			</View>
		);
	}

	render() {
		return (
			<View style={[styles.flex1, styles.row, styles.justifyContentSpaceBetween]}>
				<Carousel
					autoplay
					autoplayTimeout={5000}
					loop
					index={0}
					pageSize={Metrics.screenWidth}
					pageIndicatorStyle={styles.alignSelfEnd}
					activePageIndicatorStyle={styles.activeIndicator}
				>
					{this.props.content.map((item, index) => this.renderPage(item, index))}
				</Carousel>
			</View>
		);
	}
}

TextCarousel.propTypes = {
	content: PropTypes.array.isRequired
}
