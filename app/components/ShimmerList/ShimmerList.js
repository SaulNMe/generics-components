import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './ShimmerListStyle';

import Shimmer from 'saeko-native/app/components/Shimmer';
import { Colors } from 'saeko-native/app/styles';

export default class ShimmerList extends Component {
	render() {
		let bg = {backgroundColor: Colors.light}
		let shimmerColors = ['#F0F0F0','#DEDEDE','#EDEDED']
		return (
			<View style={[styles.row, styles.alignItemsCenter]}>
				<Shimmer
					duration={1000}
					autoRun={true}
					style={[styles.circle, bg]}
					colorShimmer={shimmerColors}
				/>
				<View style={[styles.row, styles.flex1, styles.alignItemsCenter]}>
					<View style={[styles.smallHorizontalMargin, styles.flex1]}>	
						<Shimmer
							colorShimmer={shimmerColors}
							duration={1000}
							autoRun={true}
							style={[{height:20}, styles.smallestBottomMargin, styles.fullWidth]}
						/>
						<Shimmer
							colorShimmer={shimmerColors}
							duration={1000}
							autoRun={true}
							style={[{height:14, width: 50}, styles.smallestBottomMargin, styles.fullWidth]}
						/>
					</View>	
					<Shimmer
						duration={1000}
						autoRun={true}
						style={[styles.icon, bg]}
						colorShimmer={shimmerColors}
					/>
				</View>
			</View>
		);
	}
}

	ShimmerList.propTypes = {
		// data: PropTypes.array
	}

	ShimmerList.defaultProps = {
		// data: []
	}
