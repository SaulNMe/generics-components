import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './ChildCardStyle';

import SlashPill from 'saeko-native/app/components/SlashPill';
import NameTag from 'saeko-native/app/components/NameTag';
import BorderedText from 'saeko-native/app/components/BorderedText';

export default class ChildCard extends Component {

	state = {
		img: this.props.imgUrl ? {uri: this.props.imgUrl} : require('saeko-native/assets/saeko-logo.png')
	}
	render() {
		return (
			<View style={[styles.container]}>
				<View style={[styles.container, styles.justifyContentSpaceBetween, {flex: 1, zIndex: 2, position: 'absolute'}]}>
					<View>	
						<View style={[styles.alignSelfCenter, styles.smallTopMargin]}>	
							<SlashPill
								bgColor= {this.props.pillColor}
								textColor= {this.props.progressColor}	
								currentPosition= {this.props.start}
								total= {this.props.end}
							/>	
						</View>
					</View>
					<NameTag 
						bgColor= {this.props.labelColor}
						name= {this.props.childName}
						textColor= {this.props.nameColor}	
					/>
				</View>
				
				<View style={[styles.container]}>	
					<Image
						style={styles.img}
						source={this.state.img}
						onError={() => this.setState({img: require('saeko-native/assets/saeko-logo.png')})}
					/>
				</View>
			</View>
		);
	}
}

	ChildCard.propTypes = {
		pillColor: PropTypes.string,
		progressColor: PropTypes.string,
		childName: PropTypes.string,
		labelColor: PropTypes.string,
		nameColor: PropTypes.string,
		status: PropTypes.string,
		start: PropTypes.number,
		end: PropTypes.number,
	}

	ChildCard.defaultProps = {
		pillColor: 'lighter',
		progressColor: 'darker',
		childName: 'Gustavo Adolfo Pacheco Pagola',
		labelColor: 'lighter',
		nameColor: 'black',
		status: 'present',
		start: 45,
		end: 100,
	}
