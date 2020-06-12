import React, { Component } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './EmptyStateStyle';
import BodyText from 'saeko-native/app/components/BodyText';
import Local from 'saeko-native/app/services/Local';

export default class EmptyState extends Component {
	render() {
		let marginTop = this.props.addMarginTop ? styles.customTopMargin : styles.baseTopMargin;
		return (
			<View style={[ styles.baseHorizontalMargin, styles.alignItemsCenter, marginTop]}>
				<Image 
					source={require('saeko-native/assets/Images/empty.png')}
				/>
				<BodyText
					text={Local.get(this.props.isLoading ? 'emptyState.titleLoading': this.props.title)}
					color="dark"
					align="center"
					weight="bold"
				/>
				<BodyText 
					text={Local.get(this.props.isLoading ? 'emptyState.subtitleLoading': this.props.subtitle)}
					color="light"
					align="center"
				/>
			</View>
		);
	}
}

EmptyState.propTypes = {
	isLoading: PropTypes.bool,
	addMarginTop: PropTypes.bool,
	title: PropTypes.string,
	subtitle: PropTypes.string,
}

EmptyState.defaultProps = {
	isLoading: false,
	addMarginTop: false,
	title: 'emptyState.title',
	subtitle: 'emptyState.subtitle',
}
