import React, { PureComponent } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './SwipeButtonStyle';
import { Colors } from 'saeko-native/app/styles';

import LabelText from 'saeko-native/app/components/LabelText';
import { Feather } from '@expo/vector-icons';

export default class SwipeButton extends PureComponent {
	render() {
		const swipeLeft = 'chevron-left';
		const swipeRight = 'chevron-right';
		let flexDirection =  (this.props.swipeDirection === 'right') ? { flexDirection: 'row-reverse'} : {flexDirection: 'row'};
		const bgColor = { backgroundColor: Colors[this.props.bgColor] };

		if (this.props.swipeDirection === 'left'){
			swipe = swipeLeft
		} else if (this.props.swipeDirection === 'right'){
			swipe = swipeRight
		}

		return (
			<TouchableOpacity 
				style={[styles.buttonContainer,styles.alignItemsCenter, bgColor, flexDirection, styles.smallVerticalPadding]}
				onPress={this.props.onPress}
				activeOpacity={0.6}
			>
				<Feather
					name={swipe}
					size={26}
					color= {this.props.textColor}
					style={styles.smallHorizontalPadding}
				/>
				<LabelText
					text= {this.props.text}
					color= {this.props.textColor}
					weight= 'medium'
				/>
				<View style={styles.smallRightPadding}/>
			</TouchableOpacity>
		);
	}
}

	SwipeButton.propTypes = {
		bgColor: PropTypes.string,
		textColor: PropTypes.string,
		swipeDirection: PropTypes.string,
		text: PropTypes.string,
		onPress: PropTypes.func
	}

	SwipeButton.defaultProps = {
		bgColor: 'absent',
		textColor: 'white',
		swipeDirection: 'left',
		text: 'Absent',
		onPress: ()=>{}
	}
