import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './GradientDividerStyle';

export default function GradientDivider (props) {
	return (
		<View style={[(props.addVerticalMargin && styles.smallVerticalMargin), (props.addHorizontalMargin && styles.baseHorizontalMargin) ]}>
			<LinearGradient
				style={styles.divider}
				start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
				colors={['#9CADC6', '#F0F0F0']}
			/>
		</View>
	);
}


GradientDivider.propTypes = {
	addVerticalMargin: PropTypes.bool,
	addHorizontalMargin: PropTypes.bool
}

GradientDivider.defaultProps = {
	addVerticalMargin: false,
	addHorizontalMargin: false
}







