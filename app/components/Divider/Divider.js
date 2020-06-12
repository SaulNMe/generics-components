import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './DividerStyle';

export default class Divider extends PureComponent {
	render() {
		return (
			<View style={[styles.divider, (this.props.addVerticalMargin && styles.smallVerticalMargin), (this.props.addHorizontalMargin && styles.baseHorizontalMargin) ]} />
		);
	}
}

Divider.propTypes = {
	addVerticalMargin: PropTypes.bool,
	addHorizontalMargin: PropTypes.bool,
}

Divider.defaultProps = {
	addVerticalMargin: false,
	addHorizontalMargin: false,

}
