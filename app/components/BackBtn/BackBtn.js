import React, { PureComponent } from 'react';
import { 
	Platform,
	TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import { Colors } from 'saeko-native/app/styles';
import styles from './BackBtnStyle';
import LabelText from 'saeko-native/app/components/LabelText';
import NavigationService from 'saeko-native/app/services/NavigationService.js';
import Local from 'saeko-native/app/services/Local';

export default class BackBtn extends PureComponent {
	render() {
		return (
			<TouchableOpacity
				onPress={() => this.props.onPress()}
				style={[styles.row, styles.alignItemsCenter]}
				activeOpacity={0.6}
			>
				<Feather
					name={Platform.OS === 'ios' ? 'chevron-left':'arrow-left'}
					size={Platform.OS === 'ios' ? 35:24}
					color={Colors[this.props.color]}
				/>
				{this.props.hasLabel &&
					<LabelText
						text={Local.get('back')}
						color={this.props.color}
					/>
				}
			</TouchableOpacity>
		);
	}
}

BackBtn.propTypes = {
	color: PropTypes.string,
	hasLabel: PropTypes.bool,
	onPress: PropTypes.func
}

BackBtn.defaultProps = {
	color: 'black',
	hasLabel: false,
	onPress: () => {}
}
