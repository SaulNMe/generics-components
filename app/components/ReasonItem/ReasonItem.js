import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './ReasonItemStyle';
import BodyText from 'saeko-native/app/components/BodyText';

export default class ReasonItem extends PureComponent {

	render() {
		return (
			<TouchableOpacity 
				style={[styles.reasonContainer, styles.justifyContentCenter, styles.baseHorizontalMargin, styles.smallVerticalMargin]}
				onPress={() => this.props.onPress()}
			>
				<BodyText
					text={this.props.reason}
					color={this.props.color}
					weight={this.props.color === 'white'? 'bold':'regular'}
				/>
		  </TouchableOpacity>
		);
	}
}

ReasonItem.propTypes = {
	color: PropTypes.string,
	reason: PropTypes.string,
	onPress: PropTypes.func,

}

ReasonItem.defaultProps = {
	color: 'white',
	reason: '',
	onPress: () => {},
}