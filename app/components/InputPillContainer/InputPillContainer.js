import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './InputPillContainerStyle';
import { Colors } from 'saeko-native/app/styles';

export default function InputPillContainer (props) {
	return (
		<View style={[styles.row, styles.alignSelfStart]}>
			<View style={[styles.container, { backgroundColor: Colors[props.bgColor] || Colors.white}]}>
				{props.children}
			</View>
			<View style={styles.btn}>
				<View style={props.btn && styles.whiteBg}>
					{props.btn}
				</View>
			</View>
		</View>
	);
}


InputPillContainer.propTypes = {
	// data: PropTypes.array
}

InputPillContainer.defaultProps = {
	// data: []
}







