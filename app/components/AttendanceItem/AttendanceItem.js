import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './AttendanceItemStyle';

import CircleImg from 'saeko-native/app/components/CircleImg';
import SubtitleText from 'saeko-native/app/components/SubtitleText';
import LabelText from 'saeko-native/app/components/LabelText';
import Divider from 'saeko-native/app/components/Divider';

import { Feather } from '@expo/vector-icons';
import { Colors } from 'saeko-native/app/styles';

import { useDispatch, useSelector } from 'react-redux';
import { setStudentAttendanceLog } from 'saeko-native/app/actions/ProfessorStudentsActions';
import Selectors from 'saeko-native/app/Selectors';

import Local from 'saeko-native/app/services/Local';

export default function AttendanceItem(props) {
	const dispatch = useDispatch();

	let currentAttendanceConfig = useSelector(Selectors.selectCurrentAttendanceConfig);
	let tags  = currentAttendanceConfig && (currentAttendanceConfig.tags || {}).tags;

	let [color, setColor] = useState('present');
	let [text, setText] = useState('Present');
	let [icon, setIcon] = useState('user-minus');

	useEffect(() => {
		if(props.item.attendance_log) {
			switch(props.item.attendance_log.mark_type) {
				case 1:
					setColor('absent');
					setText(Local.get('attendanceItem.absent'));
					setIcon('user-plus');
					break;
				case 2:
				case 3:
					setColor('orange');
					setText(Local.get('attendanceItem.late'));
					break;
				default:
					setColor('present');
					setText(Local.get('attendanceItem.present'));
					setIcon('user-minus');
			}
			if(props.item.attendance_log.absence_code && tags) {
				let config = tags.filter(tag => tag.code === props.item.attendance_log.absence_code)
				setText(`${config[0].code} - ${config[0].name}`)
			}
		}
	}, [props.item.attendance_log])

	function handleSelect() {
		if(!props.item.attendance_log) {
			dispatch(setStudentAttendanceLog(props.item.id, {
				student_id: props.item.id,
				mark_type: 1
			}))
		} else {
			if (props.item.attendance_log.mark_type === 4)
				dispatch(setStudentAttendanceLog(props.item.id, {
					...props.item.attendance_log,
					mark_type: 1
				}))
			else if (props.item.attendance_log.mark_type === 1)
				dispatch(setStudentAttendanceLog(props.item.id, {
					...props.item.attendance_log,
					mark_type: 2
				}))
			else if (props.item.attendance_log.mark_type === 2)
				dispatch(setStudentAttendanceLog(props.item.id, {
					...props.item.attendance_log,
					mark_type: 4
				}))
		}
	}

	let renderIcon = !props.disabled ?
		<Feather
			name={icon}
			size={24}
			color={Colors['light']}
		/> : null;

	return (
		<TouchableOpacity
			style={[styles.row, styles.alignItemsCenter, styles.baseHorizontalMargin, styles.leftPadding]}
			disabled={props.disabled}
			onPress={() => props.onPress() || handleSelect()}
			activeOpacity={0.6}
		>
			<View style={[styles.flex1, styles.baseVerticalPadding, styles.container,
				{ borderColor: `${Colors[color] || Colors.main}29`, backgroundColor: `${Colors[color] || Colors.main}17` }]}
			>
				<View style={[styles.row, styles.justifyContentSpaceBetween]}>
					<View style={styles.flex01}>
						<View style={styles.floatingLeft}>
							<CircleImg
								image={props.item.avatar}
								size='Huge'
							/>
						</View>
					</View>
					<View style={[styles.flex08, styles.baseHorizontalPadding]}>
						<SubtitleText
							text={props.name}
							color='text'
						/>
						<LabelText
							text={text}
							color={color}
							align='right'
						/>
					</View>
				</View>
				<View style={styles.smallTopMargin}>
					<LabelText 
						text={Local.get('attendanceItem.tap')}
						color='light'
						align='center'
						weight='light'
					/>			
				</View>
			</View>
		</TouchableOpacity>
	);
}

AttendanceItem.propTypes = {
	imgUrl: PropTypes.string,
	name: PropTypes.string,
	secondText: PropTypes.string,
	disabled: PropTypes.bool,
}

AttendanceItem.defaultProps = {
	imgUrl: "",
	name: "",
	status: "",
	disabled: null,
}