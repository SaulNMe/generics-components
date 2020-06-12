import React from 'react';
import { 
	View,
	TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import SubtitleText from 'saeko-native/app/components/SubtitleText';
import BodyText from 'saeko-native/app/components/BodyText';
import TinyText from 'saeko-native/app/components/TinyText';
import TimelineCircle from 'saeko-native/app/components/TimelineCircle';
import styles from './TimelineCardStyle';
import NavigationService from 'saeko-native/app/services/NavigationService.js';
import useCurrentUser from 'saeko-native/app/hooks/useCurrentUser';
import { Colors } from 'saeko-native/app/styles';

export default function TimelineCard (props) {
	const [userData, userLoader] = useCurrentUser();
	let color = {
		'1': 'absent',
		'2': 'orange',
		'3': 'orange',
		'4': 'present'
	}

	return (
		<View style={[styles.row, styles.smallRightMargin]}>
			<View style={[styles.time]}>
				<BodyText
					text={props.beginAt}
					color='highlight'
				/>
			</View>
			<View style={[styles.alignItemsCenter, styles.paddingTop]}>
				{ !!props.beginAt &&
					<TimelineCircle 
						color={color[props.status] || 'main'}
					/>
				}
				{!props.isLastItem && <View style={[styles.verticalDivider, styles.flex1]}/>}
			</View>
			<TouchableOpacity 
				activeOpacity={0.6}
				disabled={!props.relativeCanChange || props.disabled}
				onPress={props.onPress}
				style={[styles.flex1, styles.smallLeftMargin, styles.smallVerticalMargin]}
			>
				<View
					style={[styles.flex1, styles.timelineCard, { borderColor: `${Colors[color[props.status]] || Colors.main}29`, backgroundColor: `${Colors[color[props.status]] || Colors.main}17` }]}
				>
					<SubtitleText
						text={props.courseName}
						color='grayest'
						weight='regular'
					/>
					{ userData.type === 'student' &&
						<View style={[styles.row, styles.alignItemsCenter]}>
							<TinyText
								text={props.room}
								color={color[props.status] || 'main'}
							/>
							{ !!props.room && !!props.group &&
								<View style={[styles.dot, { backgroundColor: Colors[color[props.status]] || Colors.main }]} />
							}
							<TinyText
								text={props.group}
								color={color[props.status] || 'main'}
							/>
						</View>
					}
					{ !!props.studentName && 
						<BodyText
							text={props.studentName}
							color='light'
							noMargin
						/>
					}
					{
						(props.tagName || userData.type !== 'student') && (
							<View style={[styles.row, styles.antiRow]}>
								<BodyText
									align='right'
									text={props.tagName || 'Mark Absence'}
									color={color[props.status] || 'main'}
									textTransform='uppercase'
									weight='medium'
									noMargin
								/>
							</View>
						)
					}
				</View>
			</TouchableOpacity>
		</View>
	);
}

TimelineCard.propTypes = {
	canExplain : PropTypes.bool,
	relativeCanChange : PropTypes.bool,
	courseName : PropTypes.string,
	status : PropTypes.string,
	studentName : PropTypes.string,
	tagName : PropTypes.string,
	beginAt : PropTypes.string,
	date : PropTypes.string,
	onPress: PropTypes.func
}

TimelineCard.defaultProps = {
	canExplain : false,
	relativeCanChange : false,
	courseName : 'Subject',
	status : '',
	studentName : 'Student',
	tagName : '',
	beginAt : '',
	date : '',
	onPress: ()=>{}
}
