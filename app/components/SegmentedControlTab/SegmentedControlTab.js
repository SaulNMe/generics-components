import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import LabelText from 'saeko-native/app/components/LabelText';

import styles from './SegmentedControlTabStyle';

export default class SegmentedControlTab extends PureComponent {
	render() {
		return (
			<View style={[styles.row, styles.tabsConteiner]}>
				<TouchableOpacity 
					style={[
						styles.buttonStyleLeft,
						styles.alignItemsCenter,
						this.props.current === this.props.leftName ? styles.blueButton : styles.whiteButton
					]}
					onPress={this.props.leftAction}
				>
					<LabelText
						text={this.props.leftText}
						color={this.props.current === this.props.leftName ? 'white' : 'main'}
					/>
				</TouchableOpacity>
				<TouchableOpacity 
					style={[
						styles.buttonStyleRight,
						styles.alignItemsCenter,
						this.props.current === this.props.rightName? styles.blueButton : styles.whiteButton
					]}
					onPress={this.props.rightAction}
				>
					<LabelText
						text={this.props.rightText}
						color={this.props.current === this.props.rightName ? 'white' : 'main'}
					/>
				</TouchableOpacity>	
			</View>
		);
	}
}
SegmentedControlTab.propTypes = {
	leftText: PropTypes.string,
	leftName: PropTypes.string,
	rightText: PropTypes.string,
	rightName: PropTypes.string,
	leftAction: PropTypes.func,
	rightAction: PropTypes.func,
	current: PropTypes.string,
}

SegmentedControlTab.defaultProps = {
	leftText: '',
	leftName: '',
	rightText: '',
	rightName: '',
	leftAction: () => {},
	rightAction: () => {},
	current: ''
}
