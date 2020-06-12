import React, { 
	// useEffect, 
	useState 
} from 'react';
import { 
	Text, 
	View,
	DatePickerAndroid,
	DatePickerIOS,
	Platform,
	TouchableOpacity,
	TouchableHighlight,
	Modal
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './DatePickerStyle';
import Divider from 'saeko-native/app/components/Divider';
import SubtitleText from 'saeko-native/app/components/SubtitleText';
import BodyText from 'saeko-native/app/components/BodyText';
import { Feather } from '@expo/vector-icons';

import Local from 'saeko-native/app/services/Local';

export default function DatePicker (props) {
	
	const [showIOSPicker, setShowIOSPicker]	= useState(false);
	const [IOSDate, setIOSDate] = useState(new Date());

	const openPicker = async () => {
		try {
			if (Platform.OS === 'ios') {
				setShowIOSPicker(true);
			} else {
				const {action, year, month, day} = await DatePickerAndroid.open({
					date: props.date,
					minDate: props.minDate
				});
				if (action !== DatePickerAndroid.dismissedAction) {
					props.onDateChange({year, month, day});
				}
			}
		} catch (e) {
			alert(e);
		}
	}

	return (
		<React.Fragment>
			<TouchableOpacity
				activeOpacity={0.6}
				style={[styles.fieldStyle, styles.row, styles.alignItemsCenter]}
				onPress={() => openPicker()}
			>	
				<View style={styles.baseHorizontalMargin}>
					<Feather size={24} name={'calendar'} color={props.value ? '#AA258C': '#9CADC6'}/>
				</View>
				<BodyText
					color={props.value ? 'magenta': 'placeholder'}
					text={props.value || props.placeholder}
				/>
			</TouchableOpacity>
			{Platform.OS === 'ios' && (
				<Modal
					visible={showIOSPicker}
					transparent
					animationType='fade'
				>
					<TouchableHighlight
						onPress={() => setShowIOSPicker(false)}
						style={styles.overlay} 
						activeOpacity={0.4}
					>
						<View />
					</TouchableHighlight>
					<View style={styles.IOSDatePickerContainer}>
						<View style={styles.IOSDatePicker}>
							<DatePickerIOS
								locale={Local.locale ==='en-US' ? 'en': 'es'}
								mode='date'
								date={IOSDate}
								minimumDate={props.minDate}
								onDateChange={(date) => {
									setIOSDate(date)
								}}
							/>
							<Divider />
							<TouchableOpacity
								activeOpacity={0.6}
								style={[styles.cancelBtn]}
								onPress={() => {
									props.onDateChange(IOSDate);
									setShowIOSPicker(false)
								}}
							>
								<SubtitleText
									color='main'
									text={Local.get('selectDateScreen.confirm')}
								/>
							</TouchableOpacity>
						</View>
						<TouchableOpacity
							activeOpacity={0.6}
							style={[styles.IOSDatePicker, styles.cancelBtn]}
							onPress={() => setShowIOSPicker(false)}
						>
							<SubtitleText
								color='absent'
								text={Local.get('selectDateScreen.cancel')}
							/>
						</TouchableOpacity>
					</View>
				</Modal>
			)}
		</React.Fragment>
	);
}


DatePicker.propTypes = {
	placeholder: PropTypes.string,
	onDateChange: PropTypes.func,
	value: PropTypes.string,
	date: PropTypes.instanceOf(Date)
}

DatePicker.defaultProps = {
	placeholder: '',
	value: '',
	onDateChange () {},
	date: new Date()
}







