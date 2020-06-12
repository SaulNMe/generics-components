import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './NameTagStyle';

import SubtitleText from 'saeko-native/app/components/SubtitleText';
import { Colors } from 'saeko-native/app/styles';

export default class NameTag extends Component {
	render() {
		const color = { backgroundColor: Colors[this.props.bgColor] };
		return (
			<View style={[styles.justifyContentCenter]}>	
				<View style={[styles.container, color, {zIndex: 0, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}]} />
				<View style={[styles.baseHorizontalMargin, {zIndex: 1, position: 'absolute'}]}>	
					<SubtitleText 
						text= {this.props.name}
						color= {this.props.textColor}
						weight= 'medium'
					/>
				</View>
			</View>
		);
	}
}

	NameTag.propTypes = {
		bgColor: PropTypes.string,
		name: PropTypes.string,
		textColor: PropTypes.string
	}

	NameTag.defaultProps = {
		bgColor: 'lighter',
		name: '',
		textColor: 'black'
	}
