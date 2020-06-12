import React, { PureComponent } from 'react';
import { Text, 
	View } 
from 'react-native';
import PropTypes from 'prop-types';
import styles from './DoubleTextStyle';
import { Fonts } from 'saeko-native/app/styles';
import TitleText from 'saeko-native/app/components/TitleText';
import Local from 'saeko-native/app/services/Local';
/*
type 1: Has subject and date
type 2: Has subject, start_day and end_date
type 3: Has only date

*/
export default class DoubleText extends PureComponent {
	handleTypes = () => {
		switch(this.props.type){
			case '1':
				return (
					<Text>{Local.get('doubleText.selectReason')}
						<Text> {Local.get('doubleText.to')} </Text>
						<Text style={{fontWeight: 'bold'}}>{this.props.subject}</Text>
						<Text> {Local.get('doubleText.on')} </Text>
						<Text style={{fontWeight: 'bold'}}>{this.props.startDay}</Text>
					</Text>)
			case '2': 
				return (
					<Text>
						{Local.get('doubleText.from')}<Text style={{fontWeight: 'bold'}}> {this.props.startDay} </Text>{Local.get('doubleText.to2')}<Text style={{fontWeight: 'bold'}}> {this.props.endDay} </Text>
					</Text>)
			case '3':
				return (
					<Text>{Local.get('doubleText.selectReason')}
						<Text> {Local.get('doubleText.on')} </Text>
						<Text style={{fontWeight: 'bold'}}>{this.props.startDay}</Text>
					</Text>)
		}
	}
	render() {
		return (
			<View>
				<TitleText
					text={this.handleTypes()}
					color={this.props.color}
					weight='medium'
				/>
			</View>
		);
	}
}

DoubleText.propTypes = {
	endDay: PropTypes.string,
	startDay: PropTypes.string,
	subject: PropTypes.string,
	type: PropTypes.string.isRequired,
	color: PropTypes.string
}

DoubleText.defaultProps = {
	endDay: '',
	startDay: '',
	subject: '',
	color: 'darkest'
}
