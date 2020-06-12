import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './TinyTextStyle';
import { Fonts, Colors } from 'saeko-native/app/styles';

export default class TinyText extends PureComponent {
	render() {
		const color = { color: Colors[this.props.color] };
		const weight = { fontWeight: Fonts.weight[this.props.weight] };
		const align = { textAlign: this.props.align };

		return (
			<React.Fragment>
				<Text lineHeight={this.props.lineHeight} style={[styles.text, color, weight, align, this.props.styles]}>{this.props.text}</Text>
			</React.Fragment>
		);
	}
}

TinyText.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	weight: PropTypes.string,
	align: PropTypes.string
}

TinyText.defaultProps = {
	text: '',
	color: 'darkest',
	weight: 'regular',
	align: 'left'
}
