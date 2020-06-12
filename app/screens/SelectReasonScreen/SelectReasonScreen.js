import React, { Component } from 'react';
import { 
	FlatList,
	Text,
	TouchableOpacity,
	Platform,
	View,
	Alert
} from 'react-native';
import CircleBtn from 'saeko-native/app/components/CircleBtn';
import moment from 'moment';
import DoubleText from 'saeko-native/app/components/DoubleText';
import ReasonsList from 'saeko-native/app/components/ReasonsList';
import CloseBtn from 'saeko-native/app/components/CloseBtn';
import Local from 'saeko-native/app/services/Local';
import TinyText from 'saeko-native/app/components/TinyText';
import HeaderNavbar from 'saeko-native/app/components/HeaderNavbar';
import BackBtn from 'saeko-native/app/components/BackBtn';
import styles from './SelectReasonScreenStyle';
import { Feather } from '@expo/vector-icons';
import AbsenceContainer from 'saeko-native/app/containers/AbsenceContainer';
import ReasonsListContainer from 'saeko-native/app/containers/ReasonsListContainer';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'saeko-native/app/styles'
import GaService from 'saeko-native/app/services/GaService';

export default class SelectReasonScreen extends Component {

	static navigationOptions = {
		header: null
	}
	
	state = {
		selected: {
			code: null
		}
	}

	handleSelect(code) {
		this.setState({
			selected: code
		});
	}

	handleOnPress = async ({ setIsLoading, setAttendanceLogs, setAllAttendanceLogs, reload, card, checksum, children }) => {
		setIsLoading(true);
		if(!children.length) {
			setAttendanceLogs({
				lecture_id: card.id,
				data: {
					student_id: card.student.id,
					absence_code: this.state.selected.code,
					...checksum,
				}}).then( r => {
					setIsLoading(false);
					reload();
					GaService.timetableEvent('explain:absence', null, card.id);
					this.props.navigation.navigate('Main');
				}, e => {
					setIsLoading(false);
					alert('Se ha Producido un Error, Inténtelo mas tarde');
					this.props.navigation.navigate('Main');
				}
			);
		}
		else {
			try {
				await Promise.all(children.map(async (child) => {
					await setAllAttendanceLogs(child.lectures, child.attendance, {
						student_id: child.id,
						absence_code: this.state.selected.code,
					});
				}));
				reload();
				this.props.navigation.navigate('Main');
			} catch (e) {
				Alert.alert('Ooops!', Local.get('selectReasonScreen.errorAlert'));
			}
		} 
	}

	render() {
		// from all 
		const reload =  this.props.navigation.getParam('reload', () => {});

		//from ScheduleScreen
		const configs = this.props.navigation.getParam('configs', {});
		const card = this.props.navigation.getParam('card', {});
		const courseName = this.props.navigation.getParam('courseName', 'subject');
		const checksum = card.log? {checksum: card.log.checksum}:{};

		//from SelectChildrenScreen
		const dates	= this.props.navigation.getParam('dates', {});
		const children	= this.props.navigation.getParam('students', []);
		const configsCodes = this.props.navigation.getParam('configsCodes', []);
		const showBack = this.props.navigation.getParam('showBack', true);
		return (
			<LinearGradient
				colors={[Colors.magenta, Colors.purple]}
				start={[1, 0]}
				end={[0, 1]}
			>
				<View style={[styles.fullHeight]}>
					<HeaderNavbar 
						statusBar='light-content'
						left= {
							showBack ? (
								<BackBtn
									onPress={() => this.props.navigation.goBack()}
									hasLabel
									color={'white'}
								/>
							) : null
						}
						right={
							<CloseBtn 
								onPress={() => this.props.navigation.navigate('Main')}
								dark
							/>
						}
					/>
					<View style={[styles.baseHorizontalMargin, styles.smallBottomPadding]}>
					{
						dates.startDay ? (
							<DoubleText
								startDay={String(moment(dates.startDay).format("MMMM Do"))}
								endDay={String(moment(dates.endDay).format("MMMM Do"))}
								subject={''}
								color={'white'}
								type= {dates.startDay === dates.endDay ? '3':'2'}
							/>
							):(
							<DoubleText
								startDay={String(card.begin_at? moment(card.begin_at).format('HH:mm'):'--:--')}
								endDay={String(card.end_at? moment(card.end_at).format('HH:mm'):'--:--')}
								subject={courseName}
								color={'white'}
								type= {'1'}
							/>
						)
					}
					</View>
					<View style={styles.flex1}>
					{
						!children.length ? (
							<ReasonsList 
								data={configs.tags}
								selected={this.state.selected.code}
								onSelect={(code) => this.handleSelect(code)}
							/>
						):(
							<ReasonsList 
								data={configsCodes}
								selected={this.state.selected.code}
								onSelect={(code) => this.handleSelect(code)}
							/>
						)
					}
					</View>
					<View style={[styles.doubleBottomMargin, styles.baseHorizontalMargin, styles.bottomBtn, styles.alignItemsFlexEnd]}>
						<AbsenceContainer>
						{({setIsLoading, setAttendanceLogs, setAllAttendanceLogs, isLoading}) => (
							<CircleBtn 
								onPress={() => this.handleOnPress({setIsLoading, setAttendanceLogs, setAllAttendanceLogs, reload, card, checksum, children })}
								iconName='check'
								color={'purple'}
								disabled={!this.state.selected.code || isLoading}
							/>
						)}
						</AbsenceContainer>
					</View>
				</View>
			</LinearGradient>
		);
	}
}
