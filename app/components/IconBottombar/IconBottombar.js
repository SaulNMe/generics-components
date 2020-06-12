import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './IconBottombarStyle';
import { Feather } from '@expo/vector-icons';
import TinyText from 'saeko-native/app/components/TinyText';
import { Colors } from 'saeko-native/app/styles';

export default class IconBottombar extends Component {
	render() {
		let tabWidth = { width: this.props.tabWidth }
		return (
			<TouchableOpacity
				style={[styles.alignItemsCenter, styles.justifyContentCenter, tabWidth]}
				activeOpacity={0.5}
				onPress={this.props.onPress}
			>
				<Feather
					name={this.props.iconName}
					size={25}
					color={Colors[this.props.colorName]}
				/>
				<TinyText
					text={this.props.text}
					color={this.props.colorName}
					weight='medium'
				/>
			</TouchableOpacity>
		);
	}
}

IconBottombar.propTypes = {
	iconName: PropTypes.string,
	colorName: PropTypes.string,
	text: PropTypes.string,
	tabWidth: PropTypes.string.isRequired,
	onPress: PropTypes.func
}

IconBottombar.defaultProps = {
	iconName: 'home',
	colorName: 'main',
	text: '',
	onPress: () => { }
}