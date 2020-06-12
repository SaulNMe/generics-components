import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';

import { MaterialIcons, Feather } from '@expo/vector-icons';
import {Colors, Metrics} from 'saeko-native/app/styles'
import styles from './CircleBtnStyle';

export default class CircleBtn extends PureComponent {
	
	icons = (iconSize) => this.props.isMaterialIcons ? (
		<MaterialIcons 
			name={this.props.iconName}
			size={iconSize*0.8}
			color={Colors[this.props.color]}
			/>
		) : (
		<Feather
			name={this.props.iconName}
			size={iconSize*0.8}
			color={Colors[this.props.color]}
		/>
	)
		

	render() {
		let iconSize = Metrics.circleIcons[this.props.size.toLowerCase()];
		iconSize *= 0.6;

		let bg;
		switch(this.props.bgColor) {
			case 'butterfly': 
				bg = [Colors.purple, Colors.magenta];
				break;
			default: {
				bg = [Colors[this.props.bgColor], Colors[this.props.bgColor]];
			}
		}
		return (
			<TouchableOpacity 
				style={[styles.container, styles['avatar' + this.props.size], this.props.disabled && styles.disabled]}
				onPress={this.props.onPress}
				disabled={this.props.disabled}
				activeOpacity={0.6}
			>
				<LinearGradient
					colors={bg}
					style={[styles.container, styles['avatar' + this.props.size]]}
					start={{x: 0.0, y: 1.0}}
					end={{x: 1.0, y: 0.0}}
				>
					{this.props.iconName ? this.icons(iconSize) : this.props.iconComponent 
					}
				</LinearGradient>
			</TouchableOpacity>
		);
	}
}

	CircleBtn.propTypes = {
		onPress: PropTypes.func,
		iconName: PropTypes.string,
		color: PropTypes.string,
		bgColor: PropTypes.string,
		size: PropTypes.string,
		disabled: PropTypes.bool,
		isMaterialIcons: PropTypes.bool
	}

	CircleBtn.defaultProps = {
		onPress: ()=>{},
		bgColor: 'darkLight',
		size: 'Huge',
		disabled: false,
		isMaterialIcons: false
	}
