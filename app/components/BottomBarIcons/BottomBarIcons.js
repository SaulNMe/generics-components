import React, { useRef, useState, useEffect } from 'react';
import { 
	View, 
	Platform, 
	Animated,
	TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from 'saeko-native/app/styles';
import Local from 'saeko-native/app/services/Local';

import styles from './BottomBarIconsStyle';
import { Feather } from '@expo/vector-icons';
import TinyText from 'saeko-native/app/components/TinyText';

export default function BottomBarIcons (props) {
	const [_width, setWidth] = useState(new Animated.Value(28));
	const [_widthText, setWidthText] = useState(56);
	
	useEffect(() => {
		switchValue();
	}, []);
 
	useEffect(() => {
		if(props.isActualScreen){
			handleWidth();
		} else {
			resetWidth();
		}
	}, [props.isActualScreen]);

	const switchValue = () => {
		if (Local.locale === 'en-US') {
			switch(props.routeName) {
				case 'PostsFeedScreen':
					setWidthText(Platform.OS === 'ios' ? 59: 62);
					return _widthText + 36;
				case 'DocumentsTabNavigator':
					setWidthText(Platform.OS === 'ios' ? 46: 48);
					return _widthText + 35;
				case 'ScheduleScreen':
					setWidthText(Platform.OS === 'ios' ? 67: 70);
					return _widthText + 39;
				case 'ProfileScreen':
					setWidthText(Platform.OS === 'ios' ? 38: 40);
					return _widthText + 39;
				case 'ProfessorScheduleStack':
					setWidthText(Platform.OS === 'ios' ? 67: 70);
					return _widthText + 39;
			}
		} else {
			switch(props.routeName) {
				case 'PostsFeedScreen':
					setWidthText(Platform.OS === 'ios' ? 55: 60);
					return _widthText + 36;
				case 'DocumentsTabNavigator':
					setWidthText(Platform.OS === 'ios' ? 53: 55);
					return _widthText + 35;
				case 'ScheduleScreen':
					setWidthText(Platform.OS === 'ios' ? 60: 65);
					return _widthText + 39;
				case 'ProfileScreen':
					setWidthText(Platform.OS === 'ios' ? 31: 33);
					return _widthText + 39;
				case 'ProfessorScheduleStack':
					setWidthText(Platform.OS === 'ios' ? 60: 65);
					return _widthText + 39;
			}
		}
	}
	
	const handleWidth = () => {
		Animated.timing(
			_width, {
				toValue: switchValue(),
				duration: 300
			}
		).start();
	}

	const resetWidth = () => {
		Animated.timing(
			_width, {
				toValue: 28,
				duration: 300
			}
		).start();		
	}

	const handleOnPress = () => {
		props.onPress();
	}
		
	return (
		<TouchableOpacity 
			onPress={() => handleOnPress()}
			style={[styles.alignItemsCenter, styles.justifyContentCenter]}
		>
			<Animated.View style={[styles.row, styles.alignItemsCenter, { width: _width, overflow: 'hidden' }]}>
				<Feather 
					name={props.iconName} 
					size={25}
					color={Colors[props.color]}
				/>
				<Animated.View style={[styles.smallLeftMargin, {width: _widthText, overflow: 'hidden'}]}>
					<View 
						style={{ 
							alignSelf: 'flex-start',
							borderBottomWidth: 1,
							borderBottomColor: Colors[props.color],
						}}
					>
						<TinyText 
							lineHeight={4}
							text={props.name}
							color={props.color}
							weight="medium"
						/>
					</View>
				</Animated.View>
			</Animated.View>
	    </TouchableOpacity>
	)
}

BottomBarIcons.propTypes = {
	// data: PropTypes.array
}

BottomBarIcons.defaultProps = {
	// data: []
}
