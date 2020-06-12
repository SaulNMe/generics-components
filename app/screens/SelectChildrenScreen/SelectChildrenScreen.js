import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import styles from './SelectChildrenScreenStyle';

import BackBtn from 'saeko-native/app/components/BackBtn';
import HugeText from 'saeko-native/app/components/HugeText';
import CloseBtn from 'saeko-native/app/components/CloseBtn';
import DoubleText from 'saeko-native/app/components/DoubleText';
import HeaderNavbar from 'saeko-native/app/components/HeaderNavbar';
import PrimaryButton from 'saeko-native/app/components/PrimaryButton';
import ImageTextSelection from 'saeko-native/app/components/ImageTextSelection';

import StudentListContainer from 'saeko-native/app/containers/StudentListContainer';
import GetLecturesAndLogsContainer from 'saeko-native/app/containers/GetLecturesAndLogsContainer';

import Local from 'saeko-native/app/services/Local';
import ApiService from 'saeko-native/app/services/ApiService';

export default class SelectChildrenScreen extends Component {

	state ={
		selectedItem: {
			"avatar": null,
			"email": "",
			"first_name": "",
			"gender": null,
			"id": null,
			"preferred_name": "",
			"student_id": "",
			"surname": "",
			"surnames": [],
		},
	}

	handleSelect = (student) => {
		this.setState({selectedItem: {...student}});
	}

	renderItem = ( item ) => {
		return (
			<View style={[styles.doubleHorizontalMargin]}>
				<ImageTextSelection
					fullname={`${item.first_name} ${item.surname}`}
					avatar={item.avatar}
					selected={item.id == this.state.selectedItem.id}
					onPress={() => this.handleSelect(item)}
				/>
			</View>
		)}
	render() {
		const dates = this.props.navigation.getParam('dates', {});
		const reload =  this.props.navigation.getParam('reload', () => {});
		return (
			<View style={[styles.flex1, styles.justifyContentSpaceBetween, styles.whiteBg]}>
				<HeaderNavbar
					statusBar='light-content'
					left={ 
						<BackBtn 
							hasLabel
							onPress={() =>  this.props.navigation.goBack()}
						/>}
					right={
						<CloseBtn 
							onPress={() => this.props.navigation.navigate('Main')}
						/>
					}
				/>
				<View style={[styles.baseHorizontalMargin, styles.smallBottomPadding]}>
					<HugeText
						text={
							<Text>{Local.get('doubleText.apply')}<Text style={styles.colorMain}> {Local.get('doubleText.student')}</Text></Text>
						}
						color= "black"
						weight= "bold"
					/>
				</View>
				<StudentListContainer
					extraData={this.state.selectedItem.id}
					renderItem={this.renderItem}
				/>
				<View style={[styles.smallVerticalMargin, styles.alignSelfCenter]}>
					<GetLecturesAndLogsContainer
						student={this.state.selectedItem}
						startDay={dates.startDay}
						endDay={dates.endDay}
					>{({isLoading, getLecturesAndLogs}) => (
						<PrimaryButton 
							onPress={ () => getLecturesAndLogs('SelectReasonScreen', {
								dates,
								children: this.state.selectedItem,
								reload
							})}
							text='Submit'
							blue
							disabled={!this.state.selectedItem.id || isLoading}
						/>
					)}
					</GetLecturesAndLogsContainer>
				</View>
			</View>
		);
	}
}