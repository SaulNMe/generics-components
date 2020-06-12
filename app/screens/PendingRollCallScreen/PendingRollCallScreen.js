import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	View,
	Text,
	Image,
	FlatList,
	RefreshControl,
	Button,
	ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import BodyText from 'saeko-native/app/components/BodyText';

import styles from './PendingRollCallScreenStyle';
import HeaderNavbar from 'saeko-native/app/components/HeaderNavbar';
import HugeText from 'saeko-native/app/components/HugeText';
import PendingIndicator from 'saeko-native/app/components/PendingIndicator';
import Local from 'saeko-native/app/services/Local';
import ProfessorTimelineCard from 'saeko-native/app/components/ProfessorTimelineCard';
import { setLectureId } from 'saeko-native/app/actions/ProfessorStudentsActions';
import PendingRollCallContainer from 'saeko-native/app/containers/PendingRollCallContainer';
import PendingIndicatorContainer from 'saeko-native/app/containers/PendingIndicatorContainer';
import { Colors } from 'saeko-native/app/styles';

export default function PendingRollCallScreen (props) {
	const size = props.navigation.getParam('size', '1');
	return (
		<View style={[styles.container, styles.bgWhite]}>
			<LinearGradient
				colors={[Colors.purple, Colors.magenta]}
				start={[0, 0]}
				end={[1, 0]}
			>
				<View style={styles.baseTopMargin}>
					<HeaderNavbar
						statusBar='light-content'
						left={
							<HugeText 
								text={Local.get('attendance.hidePending')}
								weight='medium'
								color='white'
							/>
						}
					/>
				</View>
				<PendingIndicatorContainer>
					{({size})=>(
						<PendingIndicator onPress={() => props.navigation.navigate('TimetableScreen')} size={size} show={false} isFirst={false}/>
					)}
				</PendingIndicatorContainer>
			</LinearGradient>
			<PendingRollCallContainer style={[styles.flex1, styles.alignItemsCenter, styles.justifyContentCenter]}/>
		</View>
	);

}

PendingRollCallScreen.navigationOptions = {
	header: null
}