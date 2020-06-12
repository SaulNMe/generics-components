import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { 
	Text,
	View,
	Platform,
	StatusBar,
} from 'react-native';
import TitleText from 'saeko-native/app/components/TitleText';
import PickerButton from 'saeko-native/app/components/PickerButton';
import CloseBtn from 'saeko-native/app/components/CloseBtn';
import HeaderNavbar from 'saeko-native/app/components/HeaderNavbar';
import styles from './SelectModeScreenStyle';
import Local from 'saeko-native/app/services/Local';

export default class SelectModeScreen extends Component {
	static navigationOptions = {
		header: null
	}

	render() {
		const reload =  this.props.navigation.getParam('reload', () => {});
		return (
			<View style={styles.flex1}>				
				<LinearGradient
					colors={['#1E88E5', '#2D9CDB']}
					style={[styles.imageFill]}
				/>
				<HeaderNavbar
					statusBar='light-content'
					right={
						<CloseBtn 
							onPress={() => this.props.navigation.navigate('Main')}
							dark
						/>
						
					}
				/>
				<View style={styles.flex1}>
					<View style={[styles.baseHorizontalMargin]}>
						<TitleText
							text={Local.get('selectModeScreen.title')}
							weight='medium'
							color='white'
						/>
					</View>
					<View style={[styles.flex1, styles.justifyContentSpaceAround]}>
						<PickerButton
							onPress={() => this.props.navigation.navigate('SelectDateScreen', {reload})}
							iconName='calendar'
							labelText={Local.get('selectModeScreen.aSingleDay')}
						/>
						<PickerButton
							onPress={() => this.props.navigation.navigate('SelectDateRangeScreen', {reload})}
							iconName='calendar'
							labelText={Local.get('selectModeScreen.manyDays')}
						/>
					</View>
				</View>
			</View>
		);
	}
}