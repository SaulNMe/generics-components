import React, { Component } from 'react';
import { 
	View,
	Text
} from 'react-native';

import styles from './ProfessorScreenStyle';
import LabelText from 'saeko-native/app/components/LabelText';

export default class ProfessorScreen extends Component {

	render() {
		return (
			<View>
				<LabelText
					text= "ProfessorScreen"
				/>
			</View>
		);
	}
}