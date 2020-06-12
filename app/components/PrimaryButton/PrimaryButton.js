import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './PrimaryButtonStyle';

export default class PrimaryButton extends PureComponent {
	render() {
		return (
			<TouchableOpacity 
				activeOpacity={0.6}
				disabled={this.props.disabled}
				onPress={this.props.onPress}
				style={[styles.defaultStyle, styles.alignItemsCenter,
					this.props.blue && styles.blueButton, 
					this.props.disabled && styles.disabledButton,
					this.props.opacityB && styles.opacityButton,
					(this.props.opacityB && this.props.disabled) && styles.opacityDisabledButton,
					this.props.white && styles.whiteButton, 
					]}
			>
				<Text style={[
					this.props.blue && styles.textWhite, 
					this.props.disabled && styles.textWhite,
					this.props.opacityB && styles.textOpacity,
					(this.props.opacityB && this.props.disabled) && styles.textDisabledOpacity,
					this.props.white && styles.textBlue, 
					{textAlign: 'center'}]}>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}
}

PrimaryButton.propTypes = {
	blue: PropTypes.bool,
	white: PropTypes.bool,
	opacityB: PropTypes.bool,
	text: PropTypes.string,
	disabled: PropTypes.bool,
	activeOpacity: PropTypes.bool
}

PrimaryButton.defaultProps = {
 	blue: false,
	white: false,
	opacityB: false,
	disabled: false,
	activeOpacity: false
}
