import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './GroupedTimeLineCardStyle';

import BodyText from 'saeko-native/app/components/BodyText';
import ProfessorTimelineCard from 'saeko-native/app/components/ProfessorTimelineCard';
import { setLectureId, setCheckedAt, setCourseId } from 'saeko-native/app/actions/ProfessorStudentsActions';
import { useDispatch } from 'react-redux';
import NavigationService from 'saeko-native/app/services/NavigationService';
//import { selectAttendanceLogs } from 'saeko-native/app/actions/ProfessorStudentsActions';
import GaService from 'saeko-native/app/services/GaService';

export default function GroupedTimeLineCard (props) {
	const dispatch = useDispatch();
	
	return (
		<View style={styles.baseLeftMargin}>
			<BodyText
				text={moment(props.date).format('MMMM DD YYYY')}
				color="darker"
			/>
			<View style={styles.smallTopMargin}>
				{
					props.cards.map((item, index) => (
						<View key={item.id}>
							<ProfessorTimelineCard
								addLeftMargin={false}
								endAt={item.end_at ? moment(item.end_at).format('HH:mm'): '--:--'}
								courseName={item.courseName}
								group={item.group}
								students={0}
								beginAt={item.begin_at}
								checkedAt={false}
								isLastItem={index != props.cards.length-1}
								onPress={ () => {
									dispatch(setLectureId(item.id));
									dispatch(setCheckedAt(item.checked_at));
									dispatch(setCourseId(item.courseId));
									GaService.timetableEvent('open:PendingRollCall');
									NavigationService.navigate('ProfessorAbsenceDataScreen');
								}}
							/> 
						</View>
					))
				}
			</View>
		</View>
	);
}

GroupedTimeLineCard.propTypes = {
	// data: PropTypes.array
}

GroupedTimeLineCard.defaultProps = {
	// data: []
}
