import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Shimmer from 'saeko-native/app/components/Shimmer';
import SimpleCard from 'saeko-native/app/components/SimpleCard';
import { Colors } from 'saeko-native/app/styles';
import Divider from 'saeko-native/app/components/Divider';
import SubtitleText from 'saeko-native/app/components/SubtitleText';

import styles from './ShimmerReportItemStyle';

export default class ShimmerReportItem extends Component {
	render() {
		let bg = { backgroundColor: Colors.light }
		let shimmerColors = ['#F0F0F0', '#DEDEDE', '#EDEDED']
		return (
			<View style={[styles.baseHorizontalMargin, styles.baseBottomPadding]}>
				<SimpleCard addVerticalPadding border >
					<Shimmer
						duration={1000}
						autoRun={true}
						style={[styles.circle, bg]}
						colorShimmer={shimmerColors}
					/>
					<View style={[styles.row, styles.baseHorizontalMargin]}>
						<View style={[styles.flex02, styles.baseBottomMargin]}>
							<Shimmer
								colorShimmer={shimmerColors}
								duration={1000}
								autoRun={true}
								style={[{ height: 18 }, styles.smallestBottomMargin, { width: '60%' }]}
							/>
							<Shimmer
								colorShimmer={shimmerColors}
								duration={1000}
								autoRun={true}
								style={[{ height: 16 }, { width: '40%' }]}
							/>
						</View>
					</View>
					<View style={[styles.alignItemsCenter]}>
						<Shimmer
							colorShimmer={shimmerColors}
							duration={1000}
							autoRun={true}
							style={[{ height: 18, width: '50%' }]}
						/>
					</View>
				</SimpleCard>
			</View>
		);
	}
}

ShimmerReportItem.propTypes = {
	// data: PropTypes.array
}

ShimmerReportItem.defaultProps = {
	// data: []
}
