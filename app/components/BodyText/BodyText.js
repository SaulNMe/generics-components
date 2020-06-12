import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './BodyTextStyle';
import { Fonts, Colors } from 'saeko-native/app/styles';
export default class BodyText extends PureComponent {
	render() {
		const color = { color: Colors[this.props.color] };
		const weight = { fontWeight: Fonts.weight[this.props.weight] };
		const align = { textAlign: this.props.align };
		return (
			<React.Fragment>
				<Text  {...this.props} style={[styles.text, color, weight, align, { textTransform: this.props.textTransform }]}>{this.props.text}</Text>
			</React.Fragment>
		);
	}
}
BodyText.propTypes = {
	text: PropTypes.string,
	weight: PropTypes.string,
	color: PropTypes.string,
	align: PropTypes.string,
	textTransform: PropTypes.string,
}

BodyText.defaultProps = {
	text: '',
	color: 'darkest',
	weight: 'regular',
	align: 'left',
	textTransform: 'none',
}