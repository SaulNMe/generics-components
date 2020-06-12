import React, { useState, useRef } from 'react';
import { 
	View,
	FlatList,
	RefreshControl,
	Image,
	Text,
	Platform
} from 'react-native';

import TimelineCard from 'saeko-native/app/components/TimelineCard';
import PrimaryButtonLarge from 'saeko-native/app/components/PrimaryButtonLarge';
import styles from './ScheduleScreenStyle';
import HeaderCalendar from 'saeko-native/app/components/HeaderCalendar';
import AttendanceTimetableContainer from 'saeko-native/app/containers/AttendanceTimetableContainer';
import Local from 'saeko-native/app/services/Local';
import moment from 'moment';
import BodyText from 'saeko-native/app/components/BodyText';
import ErrorState from 'saeko-native/app/components/ErrorState';
import CircleBtn from 'saeko-native/app/components/CircleBtn';
import ShimmerTimelineCard from 'saeko-native/app/components/ShimmerTimelineCard';
import { useSelector } from "react-redux";
import useStudents from 'saeko-native/app/hooks/useStudents';
import useCurrentUser from "saeko-native/app/hooks/useCurrentUser";

export default function ScheduleScreen (props) {
	const [ userData, userLoader ] = useCurrentUser();
	const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
	const beginsAt = useRef('');
	const listRef = useRef();
	const [students, studentsLoader] = useStudents();

	const [isLoading, setIsLoading] = useState(false);
	
	const isEmpty = (obj) => {
		for(let key in obj) {
			if(obj.hasOwnProperty(key))
				return false;
		}
		return true;
	};

	const getBeginsAt = (group) => {
		if(group.begin_at !== beginsAt.current && group.begin_at) {
			beginsAt.current = group.begin_at;
			return moment(group.begin_at).format('HH:mm');
		}
		return '';
	};

	const getProfessorName = (professorNames) => {
		let name = '';
		if (professorNames)
			professorNames.forEach(item => name = `${name}${item} `);
		return name;
	}

	return (
		<View style={[styles.container, styles.justifyContentCenter]}>
			<HeaderCalendar onPress={(date) => {
				setDate(date)
				listRef.current.scrollToOffset(0)
			}} isLoading={isLoading}/>
			<AttendanceTimetableContainer date={date} setIsLoading={setIsLoading}>
				{({ cards, configs, hours, courses, isLoading, error, reload }) => (
					<React.Fragment>
						<FlatList
							ref={listRef}
							data={hours}
							keyExtractor={(hour) => String(hour)}
							renderItem={renderItem = ({item, index}) => {
								let selectHour = cards.filter( c => item === c.begin_at);
								return (selectHour.map( (group, groupIndex) => {
									let markTypes = {
										markType: null,
										freq: 1,
									};
									let log = group.log;
									let courseId = group.course_id;
									let codeName = '';
									let itemCode = '';
									let configId = '';
									let courseName = '';
									let room = '';
									let groupName = '';
									let codeLog = '';
									let courseById = courses.byId[courseId];
									let configById = [];
									let relativeCanChange = true;
									if(courseById){
										configId = courseById.attendance_config_id;
										configById = configs.byId[configId];
										courseName = courseById.name;
										room = courseById.room;
										groupName = courseById.group;
										if(log) {
											if (log.mark_type === markTypes.markType) {
												markTypes = {
													markType: log.mark_type,
													freq: markTypes.freq++
												}
											} else {
												if (markTypes.freq - 1 === 0){
													markTypes.markType = log.mark_type;
												}
												else
													markTypes.freq--;
											}
											if(configById){
												const tag = configById.tags.find( obj => obj.code === log.absence_code );
												if(!isEmpty(tag)){
													codeName = tag.name;
													relativeCanChange = tag.relative_can_change;
												}
											}
										}
									}
									let studentName =  userData.type === 'relative' ? `${group.student.first_name} ${group.student.surname}` : `${userData.first_name} ${userData.surname}`;
									return (
										<React.Fragment key={groupIndex}>
											<TimelineCard 
												courseName={ courseName }
												beginAt={getBeginsAt(group)}
												relativeCanChange={relativeCanChange && !!configById}
												studentName={userData.type === 'student' ? getProfessorName(courseById ? courseById.professor_names: []): studentName}
												room={room}
												group={groupName}
												date={date}
												isLastItem={index === hours.length - 1}
												status={ String(markTypes.markType) }
												tagName={ codeName }
												onPress={ () => {	
													if(userData.type === 'student') return;
													if(configById.tags.length === 0) return;
													props.navigation.navigate('SelectReasonScreen', {
														transition: 'collapseExpand',
														configs: configById,
														reload: reload,
														card: group,
														courseName: courseName,
														showBack: false
													})
												}}
												disabled={userData.type === 'student'}
											/>
										</React.Fragment>
									);
								}));
							}}
							ListEmptyComponent={() =>{
								if(error != '') return (<ErrorState addMarginTop={true}/>);
								if(isLoading) return (
									[1,2,3,4,5].map( (x)=> <React.Fragment key={x}><ShimmerTimelineCard /></React.Fragment>)
								);
								return (
									<View style={[styles.flex1, styles.alignItemsCenter, styles.justifyContentCenter]}>
										<Image
											style={styles.emptyImg}
											source={require('saeko-native/assets/Images/empty_timetable.png')}
											resizeMode='contain'
										/>
										{
											// <BodyText 
											// 	text={Local.get('timeTable.noClasses')}
											// 	color="dark"
											// 	align="center"
											// 	weight='bold'
											// />
										}
									</View>
								);
							}}
							refreshControl={
								<RefreshControl
									refreshing={isLoading}
									onRefresh={reload}
								/>
							}
							ListFooterComponent={() => (<View style={styles.footerSpace} />)}
							ListHeaderComponent={ () => (<View style={styles.baseTopMargin}/>)}
						/>
						<View style={[styles.baseBottomMargin, styles.baseHorizontalMargin, styles.bottomBtn]}>
							{
								(configs.allIds.length !== 0 && userData.type !== 'student') && (
									<CircleBtn
										isMaterialIcons
										iconName='today'
										size='Huge'
										bgColor='butterfly'
										color='white'
										onPress={() => props.navigation.navigate('SelectDateScreen', {reload})}
									/>
								)
							}
						</View>
					</React.Fragment>
				)}
			</AttendanceTimetableContainer>
		</View>
	);
}