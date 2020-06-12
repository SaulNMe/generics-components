import React, { Component } from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './ErrorStateStyle';
import BodyText from 'saeko-native/app/components/BodyText';
import Local from 'saeko-native/app/services/Local';

export default class ErrorState extends Component {
	render() {
		let marginTop = this.props.addMarginTop ? styles.customTopMargin : styles.baseTopMargin;

		return (
			<View style={[styles.baseHorizontalMargin, marginTop , styles.alignItemsCenter]}>
				<Image 
					source={require('saeko-native/assets/Images/error.png')}
				/>
				<BodyText
					text={Local.get('errorState.title')}
					color="dark"
					weight="bold"
					align="center"
				/>
				<BodyText 
					text={Local.get('errorState.subtitle')}
					color="light"
					align="center"
				/>
			</View>
		);
	}
}

	ErrorState.propTypes = {
		addMarginTop: PropTypes.bool
	}

	ErrorState.defaultProps = {
		addMarginTop: false
	}
