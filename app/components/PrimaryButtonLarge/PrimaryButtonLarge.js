import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './PrimaryButtonLargeStyle';
import { Colors } from 'saeko-native/app/styles';

import BodyText from 'saeko-native/app/components/BodyText';

export default class PrimaryButtonLarge extends PureComponent {
	render() {
		bgColor = {backgroundColor: Colors[this.props.bgColor]}
		return (
			<TouchableOpacity 
				activeOpacity={0.6}
				style={[styles.flex1, styles.justifyContentCenter, styles.alignItemsCenter, bgColor, styles.tabsContainer,]}
				onPress={this.props.onPress}
			>
				<BodyText
					color={this.props.textColor}
					text={this.props.text}
				/>
			</TouchableOpacity>
		);
	}
}

PrimaryButtonLarge.propTypes = {
	textColor: PropTypes.string,
	text: PropTypes.string,
	bgColor: PropTypes.string,
}

PrimaryButtonLarge.defaultProps = {
	text: 'Button',
	textColor: 'white',
	bgColor: 'main'
}
