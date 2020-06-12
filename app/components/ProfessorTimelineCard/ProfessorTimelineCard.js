import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './ProfessorTimelineCardStyle';

import BodyText from 'saeko-native/app/components/BodyText';
import TinyText from 'saeko-native/app/components/TinyText';
import StatusItem from 'saeko-native/app/components/StatusItem';
import SubtitleText from 'saeko-native/app/components/SubtitleText';
import TimelineCircle from 'saeko-native/app/components/TimelineCircle';

import { Colors } from 'saeko-native/app/styles';
import Local from 'saeko-native/app/services/Local';
import moment from 'moment';

export default function ProfessorTimelineCard (props) {
	
	let color;
	let text;
	if (props.checkedAt) {
		color = 'present';
		text = Local.get('timelineCard.passed');
	} else if (!props.checkedAt && moment(props.beginAt).isBefore()) {
		color = 'absent';
		text = Local.get('timelineCard.notPassed');
	} else {
		color = 'main';
		text = Local.get('timelineCard.pending');
	}

	return (
		<View style={[styles.row, styles.flex1, styles.smallRightMargin]}>
			<View style={[styles.time, (props.addLeftMargin && styles.baseLeftMargin)]}>
				<BodyText
					text={props.endAt}
					color='highlight'
				/>
			</View>
			<View style={[styles.alignItemsCenter, styles.paddingTop]}>
				<TimelineCircle 
					color={color}
				/>
				{props.isLastItem && <View style={styles.verticalDivider}/>}
			</View>
			<TouchableOpacity
				activeOpacity={0.6}
				style={[styles.smallLeftMargin, styles.flex1, styles.smallBottomPadding]}
				onPress={props.onPress}
				disabled={props.isDisabled}
			>
				<View style={[styles.flex1, styles.timelineCard, { borderColor: `${Colors[color] || Colors.main}29`, backgroundColor: `${Colors[color] || Colors.main}17` }]}>
					<View style={[styles.row, styles.justifyContentFlexEnd, styles.smallestBottomMargin]}>
						<TinyText
							text={text}
							color={color}
							noMargin
							weight='bold'
						/>
					</View>
					<SubtitleText
						text={props.courseName}
						color='darkest'
						weight='regular'
					/>
					<BodyText
						text={`${Local.get('rollCallCard.group')} ${props.group}`}
						color={color}
						noMargin
					/>
					{props.checkedAt ?
						<View style={[styles.row, styles.flex1]}>
							{props.present > 0 && <View style={styles.smallRightMargin}>
								<StatusItem
									color='present'
									text={Local.get('timelineCard.present')}
									amount={String(props.present)}
								/>
							</View>}
							{props.absent > 0 && <View style={styles.smallRightMargin}>
								<StatusItem
									color='absent'
									text={Local.get('timelineCard.absent')}
									amount={String(props.absent)}
								/>
							</View>}
							{props.late > 0 && <View style={[styles.baseHorizontalPadding]}>	
								<StatusItem
									color='orange'
									text={Local.get('timelineCard.late')}
									amount={String(props.late)}
								/>
							</View>}
						</View>
					: null}
				</View>
			</TouchableOpacity>
		</View>
	);
}

ProfessorTimelineCard.propTypes = {
	onPress: PropTypes.func,
	isDisabled: PropTypes.bool,
	endAt: PropTypes.string,
	beginAt: PropTypes.string,
	courseName: PropTypes.string,
	group: PropTypes.string,
	students: PropTypes.number,
	present: PropTypes.number,
	absent: PropTypes.number,
	late: PropTypes.number,
	addLeftMargin: PropTypes.bool,
}

ProfessorTimelineCard.defaultProps = {
	onPress: ()=>{},
	isDisabled: false,
	endAt: '',
	beginAt: '',
	courseName: '',
	group: '',
	students: null,
	present: null,
	absent: null,
	late: null,
	addLeftMargin: true,
}


// Agregar i18n