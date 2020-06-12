import React, { useState, useEffect } from 'react';
import { FlatList, View, RefreshControl, Image } from 'react-native';
import moment from 'moment';

import GroupedTimeLineCard from 'saeko-native/app/components/GroupedTimeLineCard';
import GroupDataByDate from 'saeko-native/app/utils/GroupDataByDate';
import { useDispatch, useSelector } from 'react-redux';
import Selectors from 'saeko-native/app/Selectors';

import useCourses from 'saeko-native/app/hooks/useCourses';
import ShimmerTimelineCard from 'saeko-native/app/components/ShimmerTimelineCard';
import ErrorState from 'saeko-native/app/components/ErrorState';
import BodyText from 'saeko-native/app/components/BodyText';
import { getPendings } from 'saeko-native/app/actions/PendingsActions';


export default function PendingRollCallContainer (props){	
	const dispatch = useDispatch();

	const [ coursesData, courserLoader ] = useCourses();

	let lectures = useSelector(Selectors.selectPendingsData);
	const [lecturesByDate, setLecturesByDate] = useState([]);
	
	useEffect(() => {
		lectures = lectures.map(lecture => {
			lecture.courseName = coursesData.byId[String(lecture.course_id)]? coursesData.byId[String(lecture.course_id)].name : 'Subject';
			lecture.group = coursesData.byId[String(lecture.course_id)]? coursesData.byId[String(lecture.course_id)].group : 'Group';
			lecture.courseId = coursesData.byId[String(lecture.course_id)]? coursesData.byId[String(lecture.course_id)].id : '';
			return lecture;
		});
		let dates = lectures.map(lecture => moment(lecture.begin_at).format('YYYY-MM-DD'));
		dates = [...new Set(dates)];
		setLecturesByDate(dates.map(date => {
			return {
				date: date,
				collection: lectures.filter(lecture => moment(lecture.begin_at).format('YYYY-MM-DD') === date)
			}
		}));
	}, [lectures.length]);

	const renderItem = ({ item }) => (<GroupedTimeLineCard
		cards={item.collection}
		date={item.date}
	/>);
	
	return (
		<FlatList 
			data={lecturesByDate}
			keyExtractor={(card) => String(card.date)}
			renderItem={renderItem}
			extraData={lecturesByDate}
			// ListEmptyComponent={() =>{
			// 	// if(params.error != '') return (<ErrorState addMarginTop={true}/>);
			// 	// if(params.isLoading) return (
			// 	// 	[1,2,3,4,5].map( (x)=> <React.Fragment key={x}><ShimmerTimelineCard /></React.Fragment>)
			// 	// );
			// 	return (
			// 		<View style={props.styles}>
			// 			<Image
			// 				style={styles.emptyImg}
			// 				source={require('saeko-native/assets/Images/empty_timetable.png')}
			// 				resizeMode='contain'
			// 			/>
			// 			<BodyText 
			// 				text={Local.get('timeTable.noClasses')}
			// 				color="dark"
			// 				align="center"
			// 				weight='bold'
			// 			/>
			// 		</View>
			// 	);
			// }}
			refreshControl={
				<RefreshControl
					refreshing={false}
					onRefresh={() => dispatch(getPendings(true))}
				/>
			}
			onEndReached={()=> dispatch(getPendings())}
		/>
	);
}