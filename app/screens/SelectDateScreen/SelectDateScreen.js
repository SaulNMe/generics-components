import React, { 
	useEffect, 
	useState 
} from 'react';
import { 
	Text,
	View,
	TouchableOpacity,
	Platform,
	FlatList,
	Image,
	Alert
} from 'react-native';
import PrimaryButton from 'saeko-native/app/components/PrimaryButton';
import TitleText from 'saeko-native/app/components/TitleText';
import BodyText from 'saeko-native/app/components/BodyText';
import { LinearGradient } from 'expo-linear-gradient';
import CloseBtn from 'saeko-native/app/components/CloseBtn';
import moment from 'moment';
import { Colors } from 'saeko-native/app/styles';
import { MaterialIcons } from '@expo/vector-icons';
// import { CalendarList, LocaleConfig } from 'react-native-calendars';
import HeaderNavbar from 'saeko-native/app/components/HeaderNavbar';
import BackBtn from 'saeko-native/app/components/BackBtn';
import TinyText from 'saeko-native/app/components/TinyText';
import InputPillContainer from 'saeko-native/app/components/InputPillContainer';
import DatePicker from 'saeko-native/app/components/DatePicker';
import CircleBtn from 'saeko-native/app/components/CircleBtn';
import GradientDivider from 'saeko-native/app/components/GradientDivider';

import styles from './SelectDateScreenStyle';
import Local from 'saeko-native/app/services/Local';
import GaService from 'saeko-native/app/services/GaService';
import StudentContainer from 'saeko-native/app/containers/StudentContainer';
import GetLecturesAndLogsContainer from 'saeko-native/app/containers/GetLecturesAndLogsContainer';
import ReasonsListContainer from 'saeko-native/app/containers/ReasonsListContainer';

export default function SelectDateScreen (props) {
	const [formattedDate, setFormattedDate] = useState('');
	const [selectedChildren, setSelectedChildren] = useState([]);
	const [isDateRange, setIsDateRange] = useState(false);
	const [isAlertOpen, setIsAlertOpen] = useState(false);
	const [date, setDate] = useState(new Date());

	const onDateChange = (prop, selectedDate) => {
		if (Platform.OS === 'ios') {
			setDate({
				...date, [prop]: 
				selectedDate
			});
			setFormattedDate({
				...formattedDate, 
				[prop]: moment(selectedDate).format('MMMM D, YYYY')
			});
		} else {
			setDate({
				...date, 
				[prop]: new Date(selectedDate.year, selectedDate.month, selectedDate.day)
			});
			setFormattedDate({
				...formattedDate,
				[prop]: moment(`${selectedDate.month + 1} ${selectedDate.day} ${selectedDate.year}`, 'M D YYYY').format('MMMM D, YYYY')
			});
		}
	}

	const renderItem = ({ item }) => {
		let avatar = item.avatar ? { uri: item.avatar } : require('saeko-native/assets/saeko-logo.png')
		let unSelected = selectedChildren.indexOf(item.id) !== -1;
		return (
			<TouchableOpacity
				style={[styles.row, styles.alignItemsCenter, styles.smallVerticalMargin]}
				activeOpacity={0.4}
				onPress={() => onSelect(item.id)}
			>
				<Image
					resizeMode= 'cover'
					style={[unSelected ? styles.unSelected: styles.childImg]}
					source={avatar}
				/>
				<View style={[styles.indicator, unSelected && styles.opacity]}/>
				<View style={unSelected && styles.opacity}>
					<BodyText
						color='white'
						weight='medium'
						text={`${item.first_name} ${item.surname}`}
					/>
				</View>
			</TouchableOpacity>
		)
	}

	const getReasons = async (getLecturesAndLogs, students, makeConfigsCodes) => {
		let selectedStudents = [];
		let configsCodes = [];
		let differentCodes = false;
		selectedChildren.forEach((student) => selectedStudents[student] = student);
		let filteredChildren = [];
		students.forEach((student) => {
			if (!selectedStudents[student.id])
				filteredChildren.push(student.id);
		});

		let childrenLectures = await Promise.all(filteredChildren.map(async (student, index) => {
			let lectures = await getLecturesAndLogs('', {
				dates: date,
				student: student,
			});
			let codes = await makeConfigsCodes(student);
			if (configsCodes.length === 0) {
				if (codes.length > 0)
					configsCodes = codes;
				else
					configsCodes = [null];
			}
			else if (JSON.stringify(codes) !== JSON.stringify(configsCodes)) {
				differentCodes = true;
				if(isAlertOpen) return;
				setIsAlertOpen(true)
				return Alert.alert('Oops!', Local.get('selectDateScreen.differentCodes'),[{
					text: 'OK',
					onPress: () => setIsAlertOpen(false)
				}]);
			}
			return {
				id: student,
				lectures: lectures.resultLectures,
				attendance: lectures.resultAttendance || []
			}
		}));

		if (!differentCodes && configsCodes.length > 0){
			if(!configsCodes[0]){
				if(isAlertOpen) return;
				setIsAlertOpen(true)
				return Alert.alert('Oops!', Local.get('selectDateScreen.nullCodes'),[{
					text: 'OK',
					onPress: () => setIsAlertOpen(false)
				}]);
			}
			props.navigation.navigate('SelectReasonScreen', {
				dates: {
					startDay: isDateRange ? date.startDate: date.date,
					endDay: isDateRange ? date.endDate: date.date
				},
				students: childrenLectures,
				configsCodes

			});
			GaService.timetableEvent(isDateRange? 'notify:all-day-absence':'toggle-vacations-mode');
		}

	}

	const onSelect = id => {
		let arr = selectedChildren.slice();
		let i = arr.indexOf(id);
		if(i !== -1) {
			arr.splice(i, 1);
		} else {
			arr.push(id);
		}
		return setSelectedChildren(arr);
	}
	
	const circleBtnMagentaEnable = (students) =>{
		let btnEnable = true;
		if (isDateRange) {
			btnEnable = !((!date.startDate && !date.endDate) || students.length === selectedChildren.length );
		} else {
			btnEnable = !(!date.date || students.length === selectedChildren.length);
		}
		return !btnEnable;
	}


	return (
		 
		<LinearGradient
			colors={[Colors.magenta, Colors.purple]}
			start={[1, 0]}
			end={[0, 1]}
		>
			<View style={styles.fullHeight}>
				<HeaderNavbar
					left= {
						<BackBtn
							onPress={() => props.navigation.navigate('Main')}
							color={'white'}
						/>
					}
					right={
						<CloseBtn 
							dark
							onPress={() => props.navigation.navigate('Main')}
						/>
					}
				/>
				<View style={[styles.flex1]}>
					<View style={[styles.baseHorizontalMargin, styles.baseBottomMargin]}>
						<TitleText
							color='white'
							text={isDateRange ? Local.get('selectDateScreen.dateRange'): Local.get('selectDateScreen.singleDate')}
						/>
					</View>
					<InputPillContainer
						bgColor='white10'
						btn={
							<CircleBtn
								bgColor='white'
								size='Huge'
								onPress={() => setIsDateRange(!isDateRange)}
								iconComponent={
									<MaterialIcons
										size={32}
										color='#AA258C'
										name='date-range'
									/>
								}
							/>
						}
					>
						{isDateRange ?
							<React.Fragment>
								<DatePicker
									placeholder={Local.get('selectDateScreen.startDate')}
									value={formattedDate.startDate}
									date={date.startDate}
									minDate={new Date()}
									onDateChange={(date) => onDateChange('startDate', date)}
								/>
								<GradientDivider/>
								<DatePicker
									placeholder={Local.get('selectDateScreen.endDate')}
									value={formattedDate.endDate}
									date={date.endDate}
									minDate={new Date()}
									onDateChange={(date) => onDateChange('endDate', date)}
								/>
							</React.Fragment>:
							<DatePicker
								placeholder={Local.get('selectDateScreen.selectDate')}
								value={formattedDate.date}
								date={date.date}
								minDate={new Date()}
								onDateChange={(date) => onDateChange('date', date)}
							/>
						}
					</InputPillContainer>
					<View style={[styles.baseTopMargin, styles.flex1]}>
						<StudentContainer>
							{(students, error, isLoading) => {
								return (
									<React.Fragment>
										<View style={styles.baseHorizontalMargin}>
											<BodyText 
												color='white'
												text={`${Local.get('selectDateScreen.apply')} ${students.length - selectedChildren.length}/${students.length} ${Local.get('selectDateScreen.children')}:`}
											/>
										</View>
										<FlatList
											data={students}
											keyExtractor={(item) => `${item.id}-${item.first_name}`}
											renderItem={renderItem}
											extraData={selectedChildren}
											style={styles.baseHorizontalPadding}
										/>
									</React.Fragment>
								)
							}}
						</StudentContainer>
					</View>
					<View style={styles.nextBtn}>
						<StudentContainer>
							{(students, error, isLoading) => {
								return (
									<GetLecturesAndLogsContainer
										startDay={isDateRange ? date.startDate: date.date}
										endDay={isDateRange ? date.endDate: date.date}
									>
										{({isLoading, getLecturesAndLogs}) => (
											<ReasonsListContainer
												skipFirstFetch
											>
												{({makeConfigsCodes}) => ( 
													<CircleBtn
														color='magenta'
														iconName='arrow-right'
														size='Huge'
														bgColor='white'
														onPress={() => getReasons(getLecturesAndLogs, students, makeConfigsCodes)}
														disabled={ circleBtnMagentaEnable(students) }
													/>
												)}
											</ReasonsListContainer>
										)}
									</GetLecturesAndLogsContainer>
								)
							}}
						</StudentContainer>
					</View>
				</View>
			</View>
		</LinearGradient>
	)
} 