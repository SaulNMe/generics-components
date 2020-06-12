import React, { Component } from 'react';

import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity 
} from 'react-native';
import {Colors} from 'saeko-native/app/styles'
import { Feather } from '@expo/vector-icons'; 
import BodyText from 'saeko-native/app/components/BodyText'
import styles from './SocialActionsStyle';
export default class SocialActions extends Component {
	render() {
		let reactions = this.props.reactions ? 
			<View style={styles.justifyContentFlexStart}>  
				<BodyText 
					text={this.props.reactions + ' Likes'}
					color='light'
				/>
			</View>
			:<View style={styles.justifyContentFlexStart}></View>;
		return (
		<View style={styles.container}>
				{reactions}
			<View style={styles.actions}>
				<TouchableOpacity 
					onPress={() => alert("Hey!")}
					style={{padding: 10}}
				> 
					<Feather
					name="thumbs-up"
					size={26}
					color={this.props.isUp ? Colors.main : Colors.light}/>
				</TouchableOpacity>
				<TouchableOpacity 
					onPress={() => alert("Hey!")}
					style={{padding: 10}}
				> 
					<Feather
					name="message-square"
					size={26}
					color={Colors.light}/>
				</TouchableOpacity>
				<TouchableOpacity 
					onPress={() => alert("Hey!")}
					style={{padding: 10}}
				> 
					<Feather
					name="share"
					size={26}
					color={Colors.light}/>
				</TouchableOpacity>  
			</View>
		</View>
	  );
	}
}

SocialActions.propTypes = {
  reactions: PropTypes.number,
  isUp: PropTypes.bool
}

SocialActions.defaultProps = {
  reactions: null,
  isUp: false
}

