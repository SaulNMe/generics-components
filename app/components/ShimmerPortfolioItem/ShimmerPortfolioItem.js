import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Shimmer from 'saeko-native/app/components/Shimmer';
import SimpleCard from 'saeko-native/app/components/SimpleCard';
import styles from './ShimmerPortfolioItemStyle';
import { Colors } from 'saeko-native/app/styles';


export default function ShimmerPortfolioItem(props) {

	let bg = { backgroundColor: Colors.light }
	let shimmerColors = ['#F0F0F0', '#DEDEDE', '#EDEDED']
	return (
		<View style={[styles.baseHorizontalMargin, styles.bigLeftMargin, styles.baseBottomPadding]}>
			<SimpleCard addVerticalPadding border >
				<View style={[styles.row, styles.baseHorizontalMargin, styles.alignItemsCenter]}>
					<View style={styles.smallRightMargin}>
						<Shimmer
							duration={1000}
							autoRun={true}
							style={[styles.circle, bg]}
							colorShimmer={shimmerColors}
						/>
					</View>
					<View style={[styles.flex02, { marginLeft: 50 }]}>
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
							style={[{ height: 16 }, styles.baseBottomMargin, { width: '40%' }]}
						/>
						<View style={[styles.alignSelfCenter, { width: '60%' }]}>
							<Shimmer
								colorShimmer={shimmerColors}
								duration={1000}
								autoRun={true}
								style={[{ height: 16 }, { width: '100%' }]}
							/>

						</View>
					</View>

				</View>
			</SimpleCard>
		</View>

	);
}


ShimmerPortfolioItem.propTypes = {
	// data: PropTypes.array
}

ShimmerPortfolioItem.defaultProps = {
	// data: []
}







