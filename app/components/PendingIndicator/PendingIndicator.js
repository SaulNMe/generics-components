import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './PendingIndicatorStyle';
import Divider from 'saeko-native/app/components/Divider';
import LabelText from 'saeko-native/app/components/LabelText';
import BodyText from 'saeko-native/app/components/BodyText';
import Local from 'saeko-native/app/services/Local';

export default function PendingIndicator (props) {
	return (
		<React.Fragment>
			<View style={[styles.baseHorizontalMargin, styles.baseBottomMargin, styles.row, styles.justifyContentSpaceBetween]}>
				<LabelText 
					text={
						<Text>
							{Local.get('PendingIndicator.youHave')}
							<BodyText text={props.size} weight='bold' color='white'/>
							{Local.get('PendingIndicator.pendingRollCalls')}
						</Text>
					}
					color='white'
				/>
				<TouchableOpacity
					onPress={() => props.onPress()}
				>
					<LabelText 
						text={Local.get(props.show? 'PendingIndicator.show':'PendingIndicator.hide')} 
						color='white'
						weight='bold'
					/>
				</TouchableOpacity>
			</View>
		</React.Fragment>
	);
}


PendingIndicator.propTypes = {
	onPress: PropTypes.func,
	show: PropTypes.bool,
	size: PropTypes.string
}

PendingIndicator.defaultProps = {
	onPress: () => {},
	show: true,
	size: ''
}







