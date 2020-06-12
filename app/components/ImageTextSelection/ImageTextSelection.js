import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './ImageTextSelectionStyle';

import CircleImg from 'saeko-native/app/components/CircleImg'
import SubtitleText from 'saeko-native/app/components/SubtitleText'

export default class ImageTextSelection extends Component{

	render(){
		return (
			<TouchableOpacity onPress={() => this.props.onPress()}>
				<View 
					style={[styles.row, styles.alignItemsCenter, styles.baseVerticalMargin]}
				>
					<CircleImg
						image={this.props.avatar}
						size='Huge'
						selected={this.props.selected}
						disabled='1'
					/>
					<View style={[styles.smallLeftMargin, styles.flex1]}>
						<SubtitleText
							color= {this.props.selected ? 'main' : 'darker'}
							text={this.props.fullname}
						/>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

ImageTextSelection.propTypes = {
	id: PropTypes.string,
	fullname: PropTypes.string,
	avatar: PropTypes.string,
	selected: PropTypes.bool,
	onPress: PropTypes.func,
}
ImageTextSelection.defaultProps = {
	id: '',
	fullname: '',
	avatar: '',
	selected: false,
	onPress: () => {},
}