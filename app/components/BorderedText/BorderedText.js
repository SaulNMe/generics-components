import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from 'saeko-native/app/styles';

import styles from './BorderedTextStyle';
import TitleText from 'saeko-native/app/components/TitleText';

export default class BorderedText extends Component {
	render() {
		const absentTxt = <Text style={styles.absent}>Absent</Text>;
		const presentTxt = <Text style={styles.present}>Present</Text>;
		const absentClr = { borderColor: Colors.absent };
		const presentClr = { borderColor: Colors.present };
		const absentRttn = {transform: [{ rotate: '-30deg' }]};
		const presentRttn = {transform: [{ rotate: '30deg' }]};

		let rotation;
		let bdColor;
		let status;

		if (this.props.side === 'absent') {
			rotation = absentRttn,
			status = absentTxt,
			bdColor = absentClr
		} else if (this.props.side === 'present') {
			rotation = presentRttn,
			status = presentTxt,
			bdColor = presentClr
		}

		return (
			<View style={styles.boxContainer}>
				<View 
					style={[
						styles.inner,
						bdColor,
						rotation
					]}
				>	
					{status}
				</View>
			</View>
		);
	}
}

	BorderedText.propTypes = {
		side: PropTypes.string,
	}

	BorderedText.defaultProps = {
		side: 'absent'
	}
