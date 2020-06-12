import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Metrics } from 'saeko-native/app/styles';

import styles from './SimpleCardStyle';

export default class SimpleCard extends PureComponent {

	render() {
		const padding = { paddingVertical: Metrics.baseMargin }
		return (
			<View style={[styles.card, (this.props.addVerticalPadding && padding), (this.props.border && styles.border)]}>
				{this.props.children}
			</View>
		);
	}
}

SimpleCard.propTypes = {
	addVerticalPadding: PropTypes.bool,
	border: PropTypes.bool
}

SimpleCard.defaultProps = {
	addVerticalPadding: false,
	border: false
}
