import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Shimmer from 'saeko-native/app/components/Shimmer';
import SimpleCard from 'saeko-native/app/components/SimpleCard';
import { Colors } from 'saeko-native/app/styles';


import styles from './ShimmerPostCardStyle';

export default class ShimmerPostCard extends Component {
	render() {
		let bg = { backgroundColor: Colors.light }
		let shimmerColors = ['#F0F0F0', '#DEDEDE', '#EDEDED']
		return (
			<View style={[styles.baseHorizontalMargin, styles.doubleBottomPadding]}>
				<SimpleCard addVerticalPadding border >
					<View style={[styles.row, styles.baseHorizontalMargin, styles.alignItemsCenter, styles.smallBottomMargin, styles.baseTopPadding]}>
						<View style={styles.smallRightMargin}>
							<Shimmer
								duration={1000}
								autoRun={true}
								style={[styles.circle, bg]}
								colorShimmer={shimmerColors}
							/>
						</View>
						<View style={[styles.flex02, styles.smallBottomMargin, { marginLeft: 50 }]}>
							<Shimmer
								colorShimmer={shimmerColors}
								duration={1000}
								autoRun={true}
								style={[{ height: 18 }, styles.smallestBottomMargin, { width: '40%' }]}
							/>
							<Shimmer
								colorShimmer={shimmerColors}
								duration={1000}
								autoRun={true}
								style={[{ height: 16 }, { width: '60%' }]}
							/>
						</View>
					</View>
					<View style={[styles.baseHorizontalPadding, styles.baseBottomPadding]}>
						<Shimmer
							colorShimmer={shimmerColors}
							duration={1000}
							autoRun={true}
							style={[{ height: 18 }, styles.smallestBottomMargin, styles.fullWidth]}
						/>
						<Shimmer
							colorShimmer={shimmerColors}
							duration={1000}
							autoRun={true}
							style={[{ height: 16 }, styles.fullWidth]}
						/>
					</View>
				</SimpleCard>
			</View>

		);
	}
}

ShimmerPostCard.propTypes = {
	// data: PropTypes.array
}

ShimmerPostCard.defaultProps = {
	// data: []
}
