import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from 'saeko-native/app/styles';

import styles from './SlashPillStyle';

import LabelText from 'saeko-native/app/components/LabelText';

export default class SlashPill extends PureComponent {
	render() {
		const color = { backgroundColor: Colors[this.props.bgColor] };
		return (
			<View style={[styles.row, styles.pill, styles.alignItemsCenter, styles.justifyContentCenter, color]}>
				<LabelText
					text= { (this.props.currentPosition > this.props.total) ?  '--' : String(this.props.currentPosition) }
					color= {this.props.textColor}
					weight= 'medium'
				/>
				<LabelText
					text= ' / '
					color= {this.props.textColor}
					weight= 'medium'
				/>
				<LabelText
					text= {String(this.props.total)}
					color= {this.props.textColor}
					weight= 'medium'
				/>
			</View>
		);
	}
}

	SlashPill.propTypes = {
		bgColor: PropTypes.string,
		textColor: PropTypes.string,
		currentPosition: PropTypes.number,
		total: PropTypes.number,

	}

	SlashPill.defaultProps = {
		currentPosition: null,
		total: null,
		bgColor: 'lighter',
		textColor: 'darker',
	}
