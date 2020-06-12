import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
	View,
	Text,
	Image,
	FlatList,
	RefreshControl,
	Button
} from 'react-native';

import BodyText from 'saeko-native/app/components/BodyText';

import styles from './TimetableScreenStyle';
import HeaderCalendar from 'saeko-native/app/components/HeaderCalendar';
import PendingIndicator from 'saeko-native/app/components/PendingIndicator';
import PrimaryButtonLarge from 'saeko-native/app/components/PrimaryButtonLarge';
import ProfessorTimelineCard from 'saeko-native/app/components/ProfessorTimelineCard';
import ProfessorLecturesContainer from 'saeko-native/app/containers/ProfessorLecturesContainer';
import ShimmerTimelineCard from 'saeko-native/app/components/ShimmerTimelineCard';
import EmptyState from 'saeko-native/app/components/EmptyState';
import ErrorState from 'saeko-native/app/components/ErrorState';
import Local from 'saeko-native/app/services/Local';
import moment from 'moment';
import PendingIndicatorContainer from 'saeko-native/app/containers/PendingIndicatorContainer';
import GaService from 'saeko-native/app/services/GaService';

import useCourses from 'saeko-native/app/hooks/useCourses';

import {
	setLectureId,
	setCheckedAt,
	setCourseId,
	setCurrentDate,
	setCourse,
	setCurrentTime
} from 'saeko-native/app/actions/ProfessorStudentsActions';

export default function TimetableScreen (props) {
	
	const [ coursesData, courserLoader ] = useCourses();
	const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
	const dispatch = useDispatch();
	const listRef = useRef();
	const [isLoading, setIsLoading] = useState(false);
	return (
		<View style={[styles.container, styles.bgWhite]}>
			<React.Fragment>
				<HeaderCalendar onPress={(date) => {
					setDate(date)
					listRef.current.scrollToOffset(0)
				}} isLoading={isLoading}>
					<PendingIndicatorContainer>
						{({size})=>(
							<PendingIndicator onPress={() => {
									GaService.timetableEvent('open:PendingRollCall');
									props.navigation.navigate('PendingRollCallScreen', {size});
								}} size={size}
							/>
						)}
					</PendingIndicatorContainer>
				</HeaderCalendar>
			</React.Fragment>
			<ProfessorLecturesContainer date={date} setIsLoading={setIsLoading}>
				{(params) => (
					<FlatList
						ref={listRef}
						contentContainerStyle={[!params.cards.length && [styles.flex1, styles.justifyContentCenter], styles.smallTopMargin]}
						data={params.isLoading ? []: params.cards}
						keyExtractor={(card) => String(card.id)}
						renderItem={renderItem = ({item, index}) => {
							const course = coursesData.byId[item.course_id] || {};
							return (
								<ProfessorTimelineCard
									endAt={item.end_at? moment(item.end_at).format('HH:mm'):'--:--'}
									courseName={course.name}
									group={course.group}
									checkedAt={item.checked_at}
									present={item.total_present}
									absent={item.total_absent}
									beginAt={item.begin_at}
									late={item.total_late}
									isLastItem={index != params.cards.length-1}
									onPress={ () => {
										dispatch(setLectureId(item.id));
										dispatch(setCheckedAt(item.checked_at))
										dispatch(setCourseId(item.course_id))
										dispatch(setCourse(course))
										dispatch(setCurrentDate(date))
										dispatch(setCurrentTime(item.begin_at))
										props.navigation.navigate('ProfessorStackStackModal')
									}}
								/> 
							);
						}}
						ListEmptyComponent={() =>{
							if(params.error != '') return (<ErrorState addMarginTop={true}/>);
							if(params.isLoading) return (
								[1,2,3,4,5].map( (x)=> <React.Fragment key={x}><ShimmerTimelineCard /></React.Fragment>)
							);
							return (
								<View style={[styles.flex1, styles.alignItemsCenter, styles.justifyContentCenter]}>
									<Image
										style={styles.emptyImg}
										source={require('saeko-native/assets/Images/empty_timetable.png')}
										resizeMode='contain'
									/>
									<BodyText 
										text={Local.get('timeTable.noClasses')}
										color="dark"
										align="center"
										weight='bold'
									/>
								</View>
							);
						}}
						refreshControl={
							<RefreshControl
								refreshing={false}
								onRefresh={() => params.reload()}
							/>
						}
						/*ListFooterComponent={() => (<View style={styles.footerSpace} />)}*/
					/>
				)}

			</ProfessorLecturesContainer>
		</View>
	);
}

TimetableScreen.navigationOptions = {
	header: null
}