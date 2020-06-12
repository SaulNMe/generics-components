import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './HugeTextStyle';
import { Fonts, Colors } from 'saeko-native/app/styles';

export default class HugeText extends PureComponent {
	render() {
		const color = { color: Colors[this.props.color] };
		const weight = { fontWeight: Fonts.weight[this.props.weight] };
		const align = { textAlign: this.props.align };

		return (
			<React.Fragment>
				<Text style={[styles.text, color, weight, align, { ...this.props.style }]}>{this.props.text}</Text>
			</React.Fragment>
		);
	}
}

HugeText.propTypes = {
	text: PropTypes.node,
	color: PropTypes.string,
	weight: PropTypes.string,
	align: PropTypes.string,
	styles: PropTypes.array
}

HugeText.defaultProps = {
	text: '',
	color: 'darkest',
	weight: 'regular',
	align: 'left',
	style: {}
}
