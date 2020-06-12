import React, { Component } from 'react';
import { 
	Text, 
	View,
	SafeAreaView,
	StatusBar 
} from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './HeaderNavbarStyle';
import { Colors } from 'saeko-native/app/styles';

export default class HeaderNavbar extends Component {
	render() {
		let bgColor = {backgroundColor: Colors[this.props.bgColor]}
		let content = (
			<View style={[(!this.props.hideNavBarHeight && styles.navBarHeight), styles.row, styles.above, styles.alignItemsCenter, styles.statusBarSpace, styles.baseHorizontalPadding, bgColor]}>
				<View style={[styles.flex1, styles.alignItemsFlexStart]}>
					{this.props.left && 
						this.props.left
					}
				</View>
				{this.props.center && 
					<View style={[styles.flex2, styles.alignItemsCenter]}>
						{this.props.center}
					</View>
				}
				{this.props.right && 
					<View style={[styles.flex1, styles.alignItemsFlexEnd]}>
						{this.props.right}
					</View>
				}
			</View>
		)

		return (
			<View>
				<StatusBar barStyle={this.props.statusBar} />
				{ !this.props.bgColor ?
					<LinearGradient colors={this.props.gradientColors}  start={[0, 0]} end={[1, 0]}>
						<SafeAreaView>
							{content}
						</SafeAreaView>
					</LinearGradient>
				:
					<React.Fragment>
						<SafeAreaView>
							{content}
						</SafeAreaView>
					</React.Fragment>				
				}
			</View>
		);
	}
}

	HeaderNavbar.propTypes = {
		statusBar: PropTypes.string,
		left: PropTypes.object,
		center: PropTypes.object,
		right: PropTypes.object,
		bgColor: PropTypes.string,
		gradientColors: PropTypes.array,
		hideNavBarHeight: PropTypes.bool,
	}

	HeaderNavbar.defaultProps = {
		statusBar: 'default',
		left: null,
		center: null,
		right: null,
		bgColor: "transparent",
		gradientColors: ['#154BBA', '#107EC2'],
		hideNavBarHeight: false,
	}
