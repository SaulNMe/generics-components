import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './TimelineCircleStyle';
import { Colors } from 'saeko-native/app/styles';

export default class TimelineCircle extends PureComponent {
	render() {
		return (
			<View style={[styles.circleContainer, {backgroundColor: Colors[this.props.color]}]}>
				<View style={[styles.insideCircleContainer]} />
			</View>
		);
	}
}

TimelineCircle.propTypes = {
	color: PropTypes.string
}

TimelineCircle.defaultProps = {
	color: 'gray'
}
