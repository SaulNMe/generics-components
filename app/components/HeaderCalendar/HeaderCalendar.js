import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
	TouchableOpacity,
	Dimensions,
	Platform
} from 'react-native';
import styles from './HeaderCalendarStyle';
import HugeText from 'saeko-native/app/components/HugeText';
import Divider from 'saeko-native/app/components/Divider';
import Carousel from 'react-native-banner-carousel';
import Local from 'saeko-native/app/services/Local';
import HeaderNavbar from 'saeko-native/app/components/HeaderNavbar';
import { LinearGradient } from 'expo-linear-gradient'
import moment from "moment";
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 50;
import { Colors } from 'saeko-native/app/styles';
import GaService from 'saeko-native/app/services/GaService';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class HeaderCalendar extends Component {
	static navigationOptions = {
		header: null
	}
	constructor(props) {
		super(props);
		this.state = {
			data: [ 
				{ id:0, weekData: [] },
				{ id:1, weekData: [] },
				{ id:2, weekData: [] }
			],
			title: moment().format('MMMM') + ' ' + moment().format('Y'),
			activeDay: (moment().isoWeekday() === 7)? 0 : moment().isoWeekday(),
			previousIndexCarousel: 1,
			startDay: -7,
			begin: true,
			isLoading: false,
			isDateTimePickerVisible: false,
			date: moment().format('YYYY-MM-DD')
		};
	}

	componentDidMount () {
		this.crateWeeks();
	}

	showDateTimePicker = (keyParam) => this.setState({ isDateTimePickerVisible: true })

	hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

	reset = () => this.setState({
		data: [ 
			{ id:0, weekData: [] },
			{ id:1, weekData: [] },
			{ id:2, weekData: [] }
		],
		title: moment().format('MMMM') + ' ' + moment().format('Y'),
		activeDay: (moment().isoWeekday() === 7)? 0 : moment().isoWeekday(),
		previousIndexCarousel: 1,
		startDay: -7,
		begin: true,
		isLoading: true,
		date: moment().format('YYYY-MM-DD')
	}, () => {
		this.props.onPress(moment().format('YYYY-MM-DD'));
		this.crateWeeks();
		this.setState({isLoading: false});
	})

	handleDatePicked = (selectedDate) => {
		let date = moment(selectedDate).format('YYYY-MM-DD');
		let diff = Math.abs(moment(selectedDate).diff(moment(), 'days'));
		console.log(diff);
		let startDay =  diff - 7 - parseInt(moment(date).isoWeekday());
		this.setState({
			data: [ 
				{ id:0, weekData: [] },
				{ id:1, weekData: [] },
				{ id:2, weekData: [] }
			],
			title: moment(date).format('MMMM') + ' ' + moment(date).format('Y'),
			activeDay: (moment(date).isoWeekday() === 7)? 0 : moment(date).isoWeekday(),
			previousIndexCarousel: 1,
			startDay: -7,
			begin: true,
			isLoading: true,
			date: date
		}, () => {
			this.props.onPress(date);
			this.crateWeeks(date);
			this.setState({isLoading: false});
		});
		this.hideDateTimePicker();
	}

	crateWeeks (date = null ) {
		let data = [];
		let startDay = this.state.startDay;
		for(let i = 0; i <= 2 ; i++){
			let weekData = [];
			for (let j = 0 ; j <= 6; j++) {
				let day = {
					id: j,
					momentDay: startDay,
					numDay: date ? moment(date).day(startDay).format('D') : moment().day(startDay).format('D'),
					isActive: (startDay === this.state.activeDay),
					isWeekend: (j === 0 || j === 6),
				};
				weekData.push(day);
				startDay ++;
			}
			let week = {id: i, weekData};
			data.push(week);
		}
		this.setState({
			data: data,
			begin: false
		});
	}

	renderNameDays = () => {
		const daysWeek = [
			Local.get('headerCalendar.days.sun').toUpperCase(),
			Local.get('headerCalendar.days.mon').toUpperCase(),
			Local.get('headerCalendar.days.tue').toUpperCase(),
			Local.get('headerCalendar.days.wed').toUpperCase(),
			Local.get('headerCalendar.days.thu').toUpperCase(),
			Local.get('headerCalendar.days.fri').toUpperCase(),
			Local.get('headerCalendar.days.sat').toUpperCase()
		];
		return (
			<View style={styles.weekContainer}>
				{daysWeek.map((day, index) =>
					<View style={styles.week} key={day}>
						<Text style={
							(index === 0 || index === 6)? styles.txtWeekEnd : styles.txtWeekDay
						}> {day} </Text>
					</View>
				)}
			</View>
		);
	}				

	circleNum = (item, idWeek, startDayNewWeek) => {
		let day = item.momentDay;
		let backgroundColor =  item.isActive ? {backgroundColor: Colors.white } : { }; 
		return (
			<View style={[styles.circleNum, styles.alignItemsCenter, { marginVertical: 1 }]}>
				<TouchableOpacity
					underlayColor={Colors.purple}
					style={styles.tocuhCircle}
					onPress={() => (Platform.OS === 'ios') && this.setState({
						activeDay: item.momentDay,
						title: moment(this.state.date).day(item.momentDay).format('MMMM') + ' ' + moment(this.state.date).day(item.momentDay).format('Y'),
					}, () => {
						GaService.timetableEvent('pick:date', null, moment().day(day).format('YYYY-MM-DD') );
						this.props.onPress(moment().day(day).format('YYYY-MM-DD'));
						this.crateWeek(idWeek, startDayNewWeek, true);
					})}
					onPressIn={() => !(Platform.OS === 'ios') && this.setState({
						activeDay: item.momentDay,
						title: moment(this.state.date).day(item.momentDay).format('MMMM') + ' ' + moment(this.state.date).day(item.momentDay).format('Y'),
					}, () => {
						GaService.timetableEvent('pick:date', null, moment().day(day).format('YYYY-MM-DD') );
						this.props.onPress(moment().day(day).format('YYYY-MM-DD'));
						this.crateWeek(idWeek, startDayNewWeek, true);
					})}
					disabled={this.props.isLoading}
				>
					<View style={[ styles.circle, backgroundColor]}>
						<Text style={[
							!item.isActive && styles.txtWeekDay,
							item.isWeekend && styles.txtWeekEnd,
							item.isActive && styles.txtActiveDay
						]}>{item.numDay}</Text>
					</View>
				</TouchableOpacity>
				{ item.isActive && <View style={styles.point} /> }
			</View>
		);
	}
	
	renderPage(item, index) {
		return (
			<View key={index} style={[styles.item, { width: BannerWidth, height: BannerHeight }]}>
				<View style={[styles.flex1, styles.row]}>
				{
					item.weekData.map((day, index) =>
						<View key={index}>
							{this.circleNum(day, item.id, item.weekData[0].momentDay)}
						</View>
					)
				}
				</View>
			</View>
		);
	}

	crateWeek(idWeek, numDay, currentWeek) {
		let {data, activeDay} = this.state;
		currentWeek && data.map( w => w.weekData.map(d => d.isActive = false));
		let startDay = numDay;
		let weekData = [];
		for (let j = 0 ; j <= 6; j++) {
			let day = {
				id: j,
				momentDay: startDay,
				numDay: moment(this.state.date).day(startDay).format('D'),
				isActive: (startDay === activeDay),
				isWeekend: (j === 0 || j === 6),
			};
			weekData.push(day);
			startDay ++;
		}
		let week = {id: idWeek, weekData};
		data[idWeek] = week;
		this.setState({
			data: data
		});
	}

	onPageChanged = (index) =>{
		if(this.state.data[index].weekData.length === 0) return;
		let previousIndexCarousel = this.state.previousIndexCarousel;
		let startDayNewWeek = -7;
		let idNewWeek = 0;
		let momentDay = this.state.data[index].weekData[0].momentDay;
		if(previousIndexCarousel === 1 && index === 0) {
			startDayNewWeek =  momentDay - 7;
			idNewWeek = 2;
		} else if(previousIndexCarousel === 0 && index === 2) {
			startDayNewWeek = momentDay - 7;
			idNewWeek = 1;
		} else if(previousIndexCarousel === 2 && index === 1) {
			startDayNewWeek = momentDay - 7;
			idNewWeek = 0;
		} else if(previousIndexCarousel === 1 && index === 2) {
			startDayNewWeek = momentDay + 7;
			idNewWeek = 0;
		} else if(previousIndexCarousel === 2 && index === 0) {
			startDayNewWeek = momentDay + 7;
			idNewWeek = 1;
		} else if(previousIndexCarousel === 0 && index === 1) {
			startDayNewWeek = momentDay + 7;
			idNewWeek = 2;
		} else return;
		if(isNaN(startDayNewWeek)) return;
		let title = moment(this.state.date).day(momentDay).format('MMMM') + ' ' + moment(this.state.date).day(momentDay).format('Y');
		this.setState({
			previousIndexCarousel: index,
			title,
		}, () => this.crateWeek(idNewWeek, startDayNewWeek, false));
	}

	render() {
		return (
			<LinearGradient
				colors={[Colors.purple, Colors.magenta]}
				start={[0, 0]}
				end={[1, 0]}
			>
				<View style={[styles.row, styles.justifyContentSpaceBetween, styles.doubleTopMargin, styles.baseBottomMargin, styles.baseHorizontalMargin]}>
					<TouchableOpacity onPress={()=> this.reset()} disabled={this.state.activeDay === moment().isoWeekday()} style={{opacity: this.state.activeDay === moment().isoWeekday()? 0.5:1}}>
						<MaterialIcons name='undo' size={24} color='white' />
					</TouchableOpacity>
					<HugeText text={this.state.title} color='white' weight='medium'/>
					<TouchableOpacity onPress={()=> this.showDateTimePicker()}>
						<Feather name='calendar' size={24} color='white'/>
					</TouchableOpacity>
				</View>
				<React.Fragment>
					{this.props.children}
				</React.Fragment>
				{this.renderNameDays()}
				{
					this.state.isLoading ? (<React.Fragment />) : (
						<Carousel
							pageSize={BannerWidth}
							loop
							index={1}
							autoplay={false}
							showsPageIndicator={false}
							onPageChanged={(index) => this.onPageChanged(index)}
						>
								{this.state.data.map((item, index) => this.renderPage(item, index))}
						</Carousel>
					)
				}
				<Divider />	
				<DateTimePicker
					date={new Date(moment(this.state.date).add(1, 'days').format('YYYY-MM-DD'))}
					isVisible={this.state.isDateTimePickerVisible}
					onConfirm={this.handleDatePicked}
					onCancel={this.hideDateTimePicker}
				/>				
			</LinearGradient>
		);
	}
}


HeaderCalendar.propTypes = {

};

HeaderCalendar.defaultProps = {

};