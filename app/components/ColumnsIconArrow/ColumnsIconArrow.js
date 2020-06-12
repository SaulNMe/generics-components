import React, { PureComponent } from 'react';
import { 
	View, 
	TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import SubtitleText from 'saeko-native/app/components/SubtitleText';
import Divider from 'saeko-native/app/components/Divider';

import { Colors } from 'saeko-native/app/styles';
import styles from './ColumnsIconArrowStyle'

export default class ColumnsIconArrow extends PureComponent {
	render() {
		return (
			<TouchableOpacity 
				onPress={this.props.onPress}
				activeOpacity={0.6}
			>
			<View style={[styles.row, styles.baseVerticalMargin]}>
				{this.props.iconName ? <Feather 
					name={this.props.iconName} 
					size={24} 
					color={Colors[this.props.color]}
				/> : null}
				<View style={[styles.flex1, styles.baseHorizontalMargin]}>
					<SubtitleText
						color='dark'
						text={this.props.title}
					/>
				</View>
				<Feather 
					name='chevron-right'
					size={24} 
					color={Colors.light}
				/>
			</View>
			<Divider/>
			</TouchableOpacity>
		);
	}
}


ColumnsIconArrow.propTypes = {
	iconName: PropTypes.string,
	title: PropTypes.string,
	color: PropTypes.string,
	onPress: PropTypes.func
}

ColumnsIconArrow.defaultProps = {
	iconName: "",
	title: "",
	color: "light",
	onPress: ()=>{}
}