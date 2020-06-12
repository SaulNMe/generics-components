import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './LabelTextStyle';
import { Fonts, Colors } from 'saeko-native/app/styles';

export default class LabelText extends PureComponent {
	render() {
		const color = { color: Colors[this.props.color] };
		const weight = { fontWeight: Fonts.weight[this.props.weight] };
		const align = { textAlign: this.props.align };

		return (
			<React.Fragment>
				<Text style={[styles.text, color, weight, align]}>{this.props.text}</Text>
			</React.Fragment>
		);
	}
}

LabelText.propTypes = {
	text: PropTypes.node,
	weight: PropTypes.string,
	color: PropTypes.string,
	align: PropTypes.string
}

LabelText.defaultProps = {
	text: '',
	color: 'darkest',
	weight: 'regular',
	align: 'left'
}
