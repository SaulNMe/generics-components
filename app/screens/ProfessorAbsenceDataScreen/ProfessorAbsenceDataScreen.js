import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from './ProfessorAbsenceDataScreenStyle';

import { getAttendanceConfig, selectAttendanceLogs, fetchStudentsByLecture } from 'saeko-native/app/actions/ProfessorStudentsActions';

import Local from 'saeko-native/app/services/Local';

import HeaderNavbar from 'saeko-native/app/components/HeaderNavbar';
import BackBtn from 'saeko-native/app/components/BackBtn';
import TitleText from 'saeko-native/app/components/TitleText';
import LabelText from 'saeko-native/app/components/LabelText';
import Divider from 'saeko-native/app/components/Divider';
import ShimmerList from 'saeko-native/app/components/ShimmerList';
import ChildrenListHeaderSvg from 'saeko-native/app/components/ChildrenListHeaderSvg';

import { Metrics } from 'saeko-native/app/styles';



export default function ProfessorAbsenceDataScreen (props) {
	const dispatch = useDispatch();

	useEffect(() => {
		bootstrapAsync();
	}, []);

	async function bootstrapAsync () {
		let config = await dispatch(getAttendanceConfig());
		await dispatch(selectAttendanceLogs());
		await dispatch(fetchStudentsByLecture());
		props.navigation.navigate('SelectChildrenListScreen' , {transition: 'collapseExpand'})
	}
	
	return (
		<View>
			<View style={[styles.contentContainer]}>	
				{[1,2,3,4,5,6].map((x)=> 
					<React.Fragment key={x}>
						<ShimmerList />
						<Divider
							addHorizontalMargin
							addVerticalMargin
						/>
					</React.Fragment>)
				}
			</View>
			<View style={{position: 'absolute', top: 0}}>
				<ChildrenListHeaderSvg />
			</View>
			<View style={styles.headerTitle}>
				<TitleText
					text='-'
					color='white'
				/>
				<LabelText
					text={`- \u2022 --/--/--`}
					color='white'
				/>
			</View>
		</View>
	)
}