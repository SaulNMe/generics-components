import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './PickerButtonStyle';
import { Feather } from '@expo/vector-icons';
import { Colors } from 'saeko-native/app/styles';

import HugeText from 'saeko-native/app/components/HugeText';

export default class PickerButton extends PureComponent {
	render() {
		return (
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={this.props.onPress}
				style={[styles.pickerContainer, styles.marginAround, { borderColor: Colors[this.props.color] }]}
			>
				<Feather name={this.props.iconName} color={this.props.color} size={50} />
				<HugeText text={`  ${this.props.labelText}  `} color={this.props.color} />
			</TouchableOpacity>
		);
	}
}

PickerButton.propTypes = {
	iconName: PropTypes.string,
	labelText: PropTypes.string,
	color: PropTypes.string,
	onPress: PropTypes.func
}

PickerButton.defaultProps = {
	iconName: "calendar",
	labelText: "",
	color: "white",
	onPress: () => { }
}