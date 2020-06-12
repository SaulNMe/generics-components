import React, { PureComponent } from 'react';
import {
	Image,
	View,
	Text, 
	TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './AttachmentBtnStyle';
import { Colors } from 'saeko-native/app/styles';

export default class AttachmentBtn extends PureComponent {
	

	render () {
		const img = this.props.icon ? 
			(<Feather size={22} name={this.props.icon} color={'#AA258C'}/>)
			:
			(<Image
				style={styles.imageContainer}
				source={this.props.image}
			/>);
		let borderColor = { borderColor: '#AA258C' };
		let textColor = {color: '#AA258C' };
		if(this.props.ext === 'doc' || this.props.ext === 'docx'){ 
			borderColor = { borderColor: '#2D93D0' }
			textColor = {color: '#2D93D0' }
		} else if(this.props.ext === 'pdf'){ 
			borderColor = { borderColor: '#FF5B62' };
			textColor = {color: '#FF5B62' }
		} else if(this.props.ext === 'xls' || this.props.ext === 'xlsx'){ 
			borderColor = { borderColor: '#00C279' };
			textColor = {color: '#00C279' }
		}
		return(
			<TouchableOpacity style={[styles.container, borderColor]}
				onPress={() => this.props.onPress()}
			>
				{img}
				<Text style={[styles.fileName, textColor]}> {this.props.name}</Text>
			</TouchableOpacity>
		);
	}
}


AttachmentBtn.propTypes = {
	icon: PropTypes.string,
	name: PropTypes.string,
	onPress: PropTypes.func,
}
AttachmentBtn.defaultProps = {
	icon: '',
	image: '',
	name: '',
	onPress: () => {},
}