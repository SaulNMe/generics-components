import React, { Component } from 'react';
import { 
	Text,
	View,
	TouchableOpacity,
	Platform
} from 'react-native';
import PrimaryButton from 'saeko-native/app/components/PrimaryButton';
import SubtitleText from 'saeko-native/app/components/SubtitleText';
import CloseBtn from 'saeko-native/app/components/CloseBtn';
import { Colors } from 'saeko-native/app/styles';
import { Feather } from '@expo/vector-icons';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import HeaderNavbar from 'saeko-native/app/components/HeaderNavbar';
import BackBtn from 'saeko-native/app/components/BackBtn';

import styles from './SelectDateRangeScreenStyle';
import Local from 'saeko-native/app/services/Local';


LocaleConfig.locales['en'] = {
	monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
	dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
};

LocaleConfig.locales['es'] = {
	monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
	monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
	dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
	dayNamesShort: ['Do','Lu','Ma','Mi','Ju','Vi','Sá']
};

import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

import TinyText from 'saeko-native/app/components/TinyText';


export default class SelectDateRangeScreen extends Component {

	static navigationOptions = {
		header: null
	}

	state = {
		selected: {},
		selectedKeyStartDay: '',
		selectedKeyEndDay: '',
	}
	

	onDayPress = (day) => {
		let { selectedKeyStartDay, selectedKeyEndDay } = this.state;
		if(selectedKeyStartDay && selectedKeyEndDay) {
			this.setState({
					selected: {},
					selectedKeyStartDay: '',
					selectedKeyEndDay: '',
			});
			return;
		}
		let selectedDays = {};
		if(!selectedKeyStartDay) {
			selectedDays[day.dateString] = { 
				selected: true,
				color: Colors.main,
				startingDay: true,
				endingDay: true,
			}
			this.setState({
				selected: selectedDays,
				selectedKeyStartDay: day.dateString
			});
			return;
		}
		selectedKeyEndDay = day.dateString;
		if (selectedKeyStartDay == selectedKeyEndDay) return;
		if(Moment(selectedKeyStartDay).isAfter(selectedKeyEndDay)){
			let temp = selectedKeyStartDay;
			selectedKeyStartDay = selectedKeyEndDay;
			selectedKeyEndDay = temp;
		}
		const range = moment.range(selectedKeyStartDay, selectedKeyEndDay);
		for (const days of range.by('days')) {
			selectedDays[days.format('YYYY-MM-DD')] = { 
				color: Colors.main,
				startingDay: false,
				endingDay: false,
				selected: true,
				activeOpacity: 10
			};
		}
		const start = Moment(range.start).format('YYYY-MM-DD');
		const end = Moment(range.end).format('YYYY-MM-DD');
		selectedDays[start].startingDay = true;
		if (selectedDays[end]) selectedDays[end].endingDay = true;
		else selectedDays[start].endingDay = true;
		this.setState({
			selected: selectedDays,
			selectedKeyStartDay: start,
			selectedKeyEndDay: end
		});

	}

	render() {
		const reload =  this.props.navigation.getParam('reload', () => {});
		LocaleConfig.defaultLocale = Local.get('locale');
		return (
			<View style={[styles.flex1, styles.whiteBg]}>
				<HeaderNavbar
					statusBar='light-content'
					left={ 
						<BackBtn
							hasLabel
							onPress={() =>  this.props.navigation.goBack()}
						/>
					}
					center={
						<SubtitleText
							color='darkest'
							weight='regular'
							text={Local.get('selectDateRangeScreen.title')}
						/>
					}
					right={
						<CloseBtn onPress={() => this.props.navigation.navigate('Main')}/>
					}
				/>
				<View style={styles.flex1}>
					<CalendarList
						scrollEnabled={true}
						showScrollIndicator={true}
						pastScrollRange={0}
						futureScrollRange={2}
						minDate={new Date()}
						maxDate={ Moment().add(2, 'month').format('YYYY-MM-DD')}
						onDayPress={this.onDayPress}
						markedDates={this.state.selected}	
						theme={{
							todayTextColor: Colors.main,
							'stylesheet.day.basic': {
								todayText: {
									fontWeight: '600',
									color: Colors.main
								},
								disabledText: {
									color: Colors.light
								}
							}
						}}
						markingType='period'	
					/>
				</View>
				<View style={[styles.alignSelfCenter, styles.smallVerticalMargin]}>
					<PrimaryButton 
						onPress={ () => this.props.navigation.navigate('SelectChildrenScreen', {
							dates: {
								startDay: this.state.selectedKeyStartDay, 
								endDay: this.state.selectedKeyEndDay,
							}, 
							reload
						})}
						text={Local.get('selectDateRangeScreen.continue')}
						blue
						disabled={!(this.state.selectedKeyStartDay && this.state.selectedKeyEndDay)}
					/>
				</View>
			</View>
		);
	}
} 