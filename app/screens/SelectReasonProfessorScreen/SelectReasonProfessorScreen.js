import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	RefreshControl,
	FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderNavbar from 'saeko-native/app/components/HeaderNavbar';
import CircleBtn from 'saeko-native/app/components/CircleBtn';
import BackBtn from 'saeko-native/app/components/BackBtn';
import TitleText from 'saeko-native/app/components/TitleText';
import BodyText from 'saeko-native/app/components/BodyText';
import LabelText from 'saeko-native/app/components/LabelText';
import PrimaryButton from 'saeko-native/app/components/PrimaryButton';
import ReasonItem from 'saeko-native/app/components/ReasonItem';
import Divider from 'saeko-native/app/components/Divider';
import DoubleText from 'saeko-native/app/components/DoubleText';
import EmptyState from 'saeko-native/app/components/EmptyState';
import CircleImg from 'saeko-native/app/components/CircleImg';

import Local from 'saeko-native/app/services/Local';
import moment from 'moment';

import styles from './SelectReasonProfessorScreenStyle';
import { Colors } from 'saeko-native/app/styles'

import { useSelector, useDispatch } from 'react-redux';
import Selectors from 'saeko-native/app/Selectors';
import { setStudentAttendanceLog } from 'saeko-native/app/actions/ProfessorStudentsActions';

export default function SelectReasonProfessorScreen (props) {	
	const dispatch = useDispatch();
	let [selected, setSelected] = useState({});
	let item = props.navigation.getParam('item');

	let date = useSelector(Selectors.selectCurrentDate)
	let course = useSelector(Selectors.selectCourse)

	useEffect(() => {
		if(selected.code) {
			let log = {
				...item.attendance_log,
				student_id: item.id,
				absence_code: selected.code,
				mark_type: selected.status
			}
			dispatch(setStudentAttendanceLog(item.id, log))
		}
	}, [selected])

	let attendanceConfig = useSelector(Selectors.selectCurrentAttendanceConfig);

	let text = `${course.name} \u2022 ${moment(date).format('DD/MM/YY')}`

	return (
		<LinearGradient
			colors={[Colors.magenta, Colors.purple]}
			start={[1, 0]}
			end={[0, 1]}
		>
			<View style={[styles.fullHeight, styles.justifyContentCenter]}>
				<HeaderNavbar 
					statusBar='light-content'
					left={
						<BackBtn
							onPress={() => props.navigation.goBack()}
							hasLabel
							color='white'
						/>
					}
					right={
						<CircleBtn 
							onPress={() => props.navigation.navigate('ProfessorScheduleStack')}
							bgColor='white80'
							size='Small'
							color='white'
							iconName='x'
						/>
					}
				/>
				<View style={[styles.baseHorizontalMargin, styles.smallBottomPadding]}>
					<DoubleText
						startDay={moment(date).format('MMMM DD')}
						subject={course.name}
						color={'white'}
						type= {'1'}
					/>
				</View>
				<View style={[styles.baseHorizontalMargin, styles.baseTopMargin]}>
					<LabelText
						text={`${Local.get('SelectReasonProfessorScreen.student')}:`}
						color='white'
					/>
					<View style={[styles.row, styles.alignItemsCenter, styles.smallTopMargin]}>
						<CircleImg
							image={item.avatar}
							size='Huge'
						/>
						<View style={[styles.dot, styles.smallHorizontalMargin]}/>
						<BodyText
							text={`${item.first_name} ${item.surname}`}
							weight='medium'
							color='white'
						/>
					</View>
				</View>
				<View style={[styles.flex1, styles.alignItemsCenter]}>
					<View style={styles.reasonsList}>
						<FlatList
							data={attendanceConfig.tags}
							keyExtractor={(item, index) => item.code}
							ItemSeparatorComponent={() => 
								(<View style={[styles.flex1]}>
									<Divider/>
								</View>)
							}
							ListEmptyComponent={() => (
								<EmptyState addMarginTop={true}/>
							)}
							renderItem={({item}) => (
								<View style={[styles.flex1]}>
									<ReasonItem
										reason={`${item.code} - ${item.name}`}
										onPress={() => setSelected(item)}
										color={item.code === selected.code ? 'white' : 'white80'}
									/>
								</View>
							)}
							ListFooterComponent={() => (<View style={styles.footerSpace} />)}
						/>
					</View>
				</View>
				<View style={styles.floatBtn}>
					<CircleBtn 
						onPress={() => {
							props.navigation.getParam('onTagSelect')(item);
							props.navigation.goBack();
						}}
						iconName='check'
						color='purple'
						bgColor='white'
						disabled={!selected.code}
					/>
				</View>
			</View>
		</LinearGradient>
	);
}
