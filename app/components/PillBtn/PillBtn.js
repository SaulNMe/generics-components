import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import SubtitleText from 'saeko-native/app/components/SubtitleText';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './PillBtnStyle';
import { Colors } from 'saeko-native/app/styles';

export default function PillBtn (props) {
	let btnStyle = !props.moveToRight ? styles.leftBtn : styles.rightBtn;
	let gradientColors = props.bgColors || ['#fff', '#fff']
	return (
		<View style={[Platform.OS === 'ios' && styles.shadow]} >
			<TouchableOpacity
				style={[styles.hidden, btnStyle, styles.shadow, Platform.OS === 'android' && styles.shadow,  styles.alignSelfStart]}
				disabled={props.disabled}
				activeOpacity={0.6}
				onPress={() => props.onPress()}
			>
				<LinearGradient
					colors={gradientColors}
					style={[styles.paddingAround, styles.row, btnStyle]}
				>
					{
						!props.moveToRight && props.icon ? (
							<Feather name={props.icon} size={22} color={Colors[props.textColor]}/>
						) : null
					}
					<SubtitleText
						text={props.text}
						color={props.textColor}
					/>
					{
						props.moveToRight && props.icon ? (
							<Feather name={props.icon} size={22} color={Colors[props.textColor]}/>
						) : null
					}
				</LinearGradient>
			</TouchableOpacity>
		</View>
	);
}


PillBtn.propTypes = {
	moveToRight: PropTypes.bool,
	disabled: PropTypes.bool,
	onPress: PropTypes.func
}

PillBtn.defaultProps = {
	moveToRight: false,
	disabled: false,
	onPress: () => {}
}







