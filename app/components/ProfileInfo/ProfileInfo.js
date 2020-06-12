import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './ProfileInfoStyle';
import SubtitleText from 'saeko-native/app/components/SubtitleText';
import CircleImg from 'saeko-native/app/components/CircleImg';
import BodyText from 'saeko-native/app/components/BodyText';
import { Colors } from 'saeko-native/app/styles';

import { Feather } from '@expo/vector-icons';

export default function ProfileInfo(props) {
	return (
		<View style={[styles.row, styles.alignItemsCenter, (props.addHorizontalMargin && styles.baseHorizontalMargin)]}>
			<CircleImg
				isLoading={false}
				image={props.imgUrl}
				size='Huge'
			/>
			<View style={styles.smallLeftMargin}>
				<SubtitleText text={props.userName} color="purple" weight="light" />
				<View style={[styles.row]}>
					<Feather size={22} name={props.isRelative? "users": 'mail'} color={Colors.light} />
					<View style={[styles.smallLeftMargin]}>
						<BodyText text={props.description} color='light' />
					</View>
				</View>
			</View>
		</View>
	);
}


ProfileInfo.propTypes = {
	userName: PropTypes.string,
	description: PropTypes.string,
	imgUrl: PropTypes.string,
	addHorizontalMargin: PropTypes.bool,
	isRelative: PropTypes.bool,
}

ProfileInfo.defaultProps = {
	userName: '',
	description: '',
	imgUrl: '',
	addHorizontalMargin: false,
	isRelative: false
}







