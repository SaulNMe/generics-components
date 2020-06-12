import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './SquareBtnStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { Colors } from 'saeko-native/app/styles';

import BodyText from 'saeko-native/app/components/BodyText';

export default function SquareBtn (props) {
	let gradientColors = [Colors.dark, Colors.black];
	let textColor = 'white';

	switch(props.color){
		case 'blue':
			gradientColors = ['#2D93D0','#156AB2'];
		break;
		case 'purple':
			gradientColors = ['#AA258C', '#6F2F8E'];
		break;
		default:
			gradientColors = [Colors.dark, Colors.black];
		break;
	};

	return (
		<TouchableOpacity 
			disabled={props.disabled}
			activeOpacity={0.6}
			style={styles.btn}
			onPress={props.onPress}
		>
			<LinearGradient 
				style={[styles.bg, styles.column, styles.justifyContentCenter, styles.alignItemsCenter]} 
				colors={gradientColors} start={[0, 0]} end={[1, 0]}
			>
				<Feather size={48} name={props.icon} color={Colors.white}/>
				<View style={styles.smallVerticalMargin}>
					<BodyText 
						text={props.text}
						color={textColor}
						align='center'
					/>
				</View>
			</LinearGradient>
		</TouchableOpacity>
	);
}


SquareBtn.propTypes = {
	disabled: PropTypes.bool,
	color: PropTypes.string,
	icon: PropTypes.string,
	text: PropTypes.string,
	onPress: PropTypes.func
}

SquareBtn.defaultProps = {
	disabled: false,
	color: null,
	icon: null,
	text: null,
	onPress: undefined
}







