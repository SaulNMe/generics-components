import React, { useState, useEffect } from 'react';
import {
	FlatList,
	SafeAreaView,
	View,
	Text,
	Alert
} from 'react-native';

import { Metrics } from 'saeko-native/app/styles';
import styles from './SelectChildrenListScreenStyle';
import HeaderNavbar from 'saeko-native/app/components/HeaderNavbar';
import BackBtn from 'saeko-native/app/components/BackBtn';
import AttendanceItem from 'saeko-native/app/components/AttendanceItem';
import TitleText from 'saeko-native/app/components/TitleText';
import LabelText from 'saeko-native/app/components/LabelText';
import Divider from 'saeko-native/app/components/Divider';
import PrimaryButton from 'saeko-native/app/components/PrimaryButton';
import CircleBtn from 'saeko-native/app/components/CircleBtn';
import ChildrenListHeaderSvg from 'saeko-native/app/components/ChildrenListHeaderSvg';

import Local from 'saeko-native/app/services/Local';
import ApiService from 'saeko-native/app/services/ApiService';

import { setUpdatingLectures, setStudentAttendanceLog } from 'saeko-native/app/actions/ProfessorStudentsActions';
import { useSelector, useDispatch } from 'react-redux';
import Selectors from 'saeko-native/app/Selectors';
import moment from 'moment';
import { getPendingsDeleteById } from 'saeko-native/app/actions/PendingsActions';
import GaService from 'saeko-native/app/services/GaService';

export default function SelectChildrenListScreen (props) {	

	const { navigation } = props;
	const dispatch = useDispatch();
	const attendanceConfig = useSelector(Selectors.selectCurrentAttendanceConfig);
	let [isSaving, setIsSaving] = useState(false)

	let students = useSelector(Selectors.selectStudentsByLecture);
	let attendanceLogs = useSelector(Selectors.selectAttendanceLogs);

	let lectureId = useSelector(Selectors.selectCurrentLectureId);
	let checkedAt = useSelector(Selectors.selectLectureCheckedAt);

	let course = useSelector(Selectors.selectCourse)
	let date = useSelector(Selectors.selectCurrentDate)
	let time = useSelector(Selectors.selectCurrentTime)
	let text = `${course.group ? `${Local.get('rollCallCard.group')} ${course.group} \u2022`:null } ${moment(date).format('DD/MM/YY')}`

	useEffect(() => {
		students.forEach(student => {
			let log = attendanceLogs.filter(log => log.student_id === student.id);
			if(log.length){
				dispatch(setStudentAttendanceLog(student.id, ...log))
			}
			if(!student.attendance_log){
				dispatch(setStudentAttendanceLog(student.id, {
					student_id: student.id,
					mark_type: 4
				}))
			}
		})
	}, [])
	
	function setTag (item) {
		students.forEach(student => {
			if(student.id === item.id)
				student = item
		})
	}

	async function saveRollCall () {
		try {
			let data;
			setIsSaving(true);
			dispatch(setUpdatingLectures(true));
			let attendance_logs = []
			students.forEach(student => {
				attendance_logs.push(student.attendance_log);
			})
			if(checkedAt) {
				data = {
					lecture_id: lectureId,
					data: {attendance_logs}
				}
			} else {
				data = {
					params: {
						mark_as_checked: true
					},
					lecture_id: lectureId,
					data: {attendance_logs}
				}
			}
			let result = await ApiService.setAttendanceLogs(data);
			students.forEach(student => {
				let studentLog = result.attendance_logs.filter(log => log.student_id === student.id)
				dispatch(setStudentAttendanceLog(student.id, ...studentLog))
			})
			props.navigation.navigate('ProfessorScheduleStack');
			dispatch(setUpdatingLectures(false));
			setIsSaving(false);
			dispatch(getPendingsDeleteById(lectureId));
			GaService.timetableEvent('RollCall');
		} catch (e) {
			Alert.alert(Local.get('errorState.title'), Local.get('errorState.subtitle'));
			setIsSaving(false);
		}
	}

	return (
		<View style={styles.flex1}>
			<SafeAreaView>	
				<View style={styles.contentContainer}>
					<FlatList
						style={[styles.baseBottomPadding]}
						data={students}
						showsVerticalScrollIndicator={false}
						keyExtractor={(item) => String(item.id)}
						renderItem={({item, index}) => ( 
							<AttendanceItem
								item={item}
								name={`${item.first_name} ${item.surname}`}
								disabled={navigation.getParam('data') ? true : false}
								onPress={() => ( attendanceConfig || {} ).tags && navigation.navigate('SelectReasonProfessorScreen', {
									item,
									onTagSelect: setTag
								})}
							/>
						)}
						ListHeaderComponent={<View style={{marginTop: Metrics.screenWidth * 0.36}} />}
					/>
				</View>
			</SafeAreaView>
			<View style={styles.floatBtn}>
				<CircleBtn
					bgColor='butterfly'
					onPress={saveRollCall}
					disabled={isSaving}
					iconName='check'
					size='Huge'
					color='white'
				/>
			</View>
			<View style={{position: 'absolute', top: 0}}>
				<ChildrenListHeaderSvg onPress={() => navigation.navigate('ProfessorScheduleStack')}/>
			</View>
			<View style={[styles.headerTitle]}>
				<TitleText
					text={course.name}
					color='white'
					numberOfLines={1}
				/>
				<LabelText
					text={text}
					color='white'
				/>
			</View>
		</View>
	);
}