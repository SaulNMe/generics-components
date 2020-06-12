import React from 'react';
import {
	View,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import BodyText from 'saeko-native/app/components/BodyText';
import LabelText from 'saeko-native/app/components/LabelText';
import SimpleCard from 'saeko-native/app/components/SimpleCard';
import CircleImg from 'saeko-native/app/components/CircleImg';
import Local from 'saeko-native/app/services/Local';

import styles from './ReportItemStyle';
import { Feather } from '@expo/vector-icons';
import { Colors, Metrics } from 'saeko-native/app/styles';

export default function ReportItem(props) {
	let nameColor;
	switch (props.index % 3) {
		case 0: {
			nameColor = 'main';
			break;
		}
		case 1: {
			nameColor = 'purple';
			break;
		}
		case 2: {
			nameColor = 'orange';
			break;
		}
		default:
			nameColor = 'light'
	}

	return (
		<TouchableOpacity
			style={[styles.baseHorizontalMargin, styles.baseBottomMargin,
			props.moveImgRight ? styles.rightPadding : styles.leftPadding, styles.simpleCard, styles.flex1]}
			onPress={props.onPress}
			activeOpacity={0.6}
		>
			<View style={[props.moveImgRight ? styles.antiRow : styles.row, styles.justifyContentSpaceBetween]}>
				<View style={styles.flex01}>
					<View style={props.moveImgRight ? styles.floatingRight : styles.floatingLeft}>
						<CircleImg
							image={props.avatar}
							size='Huge'
						/>
					</View>
				</View>
				<View style={[styles.flex08, styles.baseHorizontalPadding]}>
					<BodyText
						text={props.date}
						color='text'
					/>
					<BodyText
						text={props.name}
						color={nameColor}
						weight='light'
					/>
				</View>
			</View>
			<View style={styles.smallTopMargin}>
				<LabelText
					text={props.description}
					color={props.moveImgRight ? 'green' : 'purple'}
					align='center'
					weight='light'
				/>
			</View>
		</TouchableOpacity>
	);
}

ReportItem.propTypes = {
	date: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	// isDownloading: PropTypes.bool,
	moveImgRight: PropTypes.bool
}

ReportItem.defaultProps = {
	date: '',
	name: '',
	description: Local.get('reportItem.download'),
	// isDownloading: false,
	moveImgRight: false
}
