import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './StatusItemStyle';

import SubtitleText from 'saeko-native/app/components/SubtitleText';
import TinyText from 'saeko-native/app/components/TinyText';
import Shimmer from 'saeko-native/app/components/Shimmer';

export default class StatusItem extends PureComponent {
	render() {
		let shimmerColors = ['#F0F0F0', '#DEDEDE', '#EDEDED'];
		return (
			<View style={[styles.alignItemsCenter, (this.props.addHorizontalMargin && styles.smallHorizontalMargin)]}>
				{
					this.props.isLoading ? (
						<Shimmer duration={1000} autoRun={true} style={{ height: 28, width: 28 }} colorShimmer={shimmerColors} />
					):(
						<SubtitleText
							text={this.props.amount}
							color={this.props.color}
						/>
					)
				}
				<TinyText
					text={(this.props.text).toUpperCase()}
					color='grayer'
				/>
			</View>
		);
	}
}

StatusItem.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
	addHorizontalMargin: PropTypes.bool,
	isLoading: PropTypes.bool,
}

StatusItem.defaultProps = {
	color: '',
	text: '',
	addHorizontalMargin: false,
	isLoading: false
}
