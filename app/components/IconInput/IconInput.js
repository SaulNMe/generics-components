import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './IconInputStyle';
import { Colors } from 'saeko-native/app/styles';

const IconInput = React.forwardRef((props, ref) => {
	let iconColor = !!props.isEmpty ? Colors.dark : Colors.light;
	return (
		<View style={[styles.row, styles.alignItemsCenter, styles.baseLeftMargin]}>
			<Feather name={props.iconName} size={20} color={iconColor}/>
			<TextInput {...props} ref={ref}/>
		</View>
	);
})

export default IconInput;

IconInput.propTypes = {
	// data: PropTypes.array
}

IconInput.defaultProps = {
	// data: []
}