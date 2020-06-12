import React, { Component } from 'react';
import { Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import PropTypes from 'prop-types';

import styles from './SwiperStyle';
import BorderedText from 'saeko-native/app/components/BorderedText';
import SlashPill from 'saeko-native/app/components/SlashPill';
import SwipeButton from 'saeko-native/app/components/SwipeButton';
import ChildCard from 'saeko-native/app/components/ChildCard';
import CircleBtn from 'saeko-native/app/components/CircleBtn';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class Swiper extends Component {
	constructor(props) {
		super(props)
		this.reload = this.reload.bind(this)
		this.position = new Animated.ValueXY();
		this.state = {
			currentIndex: 0,
			evt: 5
		}

		this.rotate = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: ['-10deg', '0deg', '10deg'],
			extrapolate: 'clamp'
		})

		this.rotateAndTranslate = {
			transform: [{
				rotate: this.rotate
			},
				...this.position.getTranslateTransform()
			]
		}

		this.likeOpacity = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [0, 0, 1],
			extrapolate: 'clamp'
		})
		this.dislikeOpacity = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [1, 0, 0],
			extrapolate: 'clamp'
		})

		this.nextCardOpacity = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [1, 1, 1],
			extrapolate: 'clamp'
		})
		this.nextCardScale = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [1, .8, 1],
			extrapolate: 'clamp'
		})
	}

	reload = (event) => {
		return this.props.data.map((item, i) => {
			if (i < this.state.currentIndex) {
				return (
					<View
						key={item.id}
						style={[{ height: SCREEN_HEIGHT - 140, width: SCREEN_WIDTH, padding: 10, position: 'absolute', zIndex: -1}]}
					>
					</View>
				)
			}
			else if (i == this.state.currentIndex) {
				return (
					<Animated.View
						{...this.PanResponder.panHandlers}
						key={item.id} style={[this.rotateAndTranslate, { padding: 10, justifyContent: 'flex-end', position: 'absolute' }]}
					>
						<Animated.View style={{ opacity: this.likeOpacity, position: 'absolute', top: 75, left: 40, zIndex: 1000 }}>
							<BorderedText side='absent'/>
						</Animated.View>
						<Animated.View style={{ opacity: this.dislikeOpacity, position: 'absolute', top: 75, right: 40, zIndex: 1000 }}>
							<BorderedText side='present'/>
						</Animated.View>
					</Animated.View>
				)
			}
			else {
				return (
					<Animated.View
						key={item.id} style={[{
						opacity: this.nextCardOpacity,
						transform: [{ scale: this.nextCardScale }],
						padding: 10, justifyContent: 'flex-end', position: 'absolute'}]}
					>
						<Animated.View style={{ opacity: 0, position: 'absolute', top: 75, left: 40, zIndex: 1000 }}>
							<BorderedText side='absent'/>
						</Animated.View>
						<Animated.View style={{ opacity: 0, position: 'absolute', top: 75, right: 40, zIndex: 1000 }}>
							<BorderedText side='present'/>
						</Animated.View>
					</Animated.View>
				)
			}
		}).reverse()
	}

	left () {
		Animated.spring(this.position, {
			toValue: { x: -SCREEN_WIDTH - 100, y: -17.22039812903},
		}).start(() => {
			this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
			this.position.setValue({ x: 0, y: 0 })
			})
		})
	}

	right () {
		Animated.spring(this.position, {
			toValue: { x: SCREEN_WIDTH + 100 , y: 28.22039812903},
		}).start(() => {
				this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
				this.position.setValue({ x: 0, y: 0 })
			})
		})
	}

	componentWillMount() {
		this.PanResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onPanResponderMove: (evt, gestureState) => {
				this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
		},
		onPanResponderRelease: (evt, gestureState) => {
			if (gestureState.dx > 120) {
				Animated.spring(this.position, {
					toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
				}).start(() => {
						this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
						this.position.setValue({ x: 0, y: 0 })
					})
				})
			}
			else if (gestureState.dx < -120) {
				Animated.spring(this.position, {
					toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
				}).start(() => {
					this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
					this.position.setValue({ x: 0, y: 0 })
					})
				})
			}
			else {
				Animated.spring(this.position, {
					toValue: { x: 0, y: 0 },
					friction: 4
				}).start()
			}
			}
		})
	}
	renderUsers = () => {
		return this.props.data.map((item, i) => {
			if (i < this.state.currentIndex) {
				return (
					<View
						key={item.id}
						style={[{ height: SCREEN_HEIGHT - 140, width: SCREEN_WIDTH, padding: 10, position: 'absolute', zIndex: -1}]}
					>
					</View>
				)
			}
			else if (i == this.state.currentIndex) {
				return (
					<Animated.View
						{...this.PanResponder.panHandlers}
						key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 140, width: SCREEN_WIDTH, padding: 10, justifyContent: 'flex-end', position: 'absolute' }]}
					>
						<Animated.View style={{ opacity: this.likeOpacity, position: 'absolute', top: 75, left: 40, zIndex: 1000 }}>
							<BorderedText side='absent'/>
						</Animated.View>
						<Animated.View style={{ opacity: this.dislikeOpacity, position: 'absolute', top: 75, right: 40, zIndex: 1000 }}>
							<BorderedText side='present'/>
						</Animated.View>
					</Animated.View>
				)
			}
			else {
				return (
					<Animated.View
						key={item.id} style={[{
						opacity: this.nextCardOpacity,
						transform: [{ scale: this.nextCardScale }],
						height: SCREEN_HEIGHT - 140, width: SCREEN_WIDTH, padding: 10, justifyContent: 'flex-end', position: 'absolute'}]}
					>
						<Animated.View style={{ opacity: 0, position: 'absolute', top: 75, left: 40, zIndex: 1000 }}>
							<BorderedText side='absent'/>
						</Animated.View>
						<Animated.View style={{ opacity: 0, position: 'absolute', top: 75, right: 40, zIndex: 1000 }}>
							<BorderedText side='present'/>
						</Animated.View>
					</Animated.View>
				)
			}
		}).reverse()
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View />
				<View style={{flex: 1}}>
					{this.renderUsers()}
				</View>
				<View>
					<View style={[styles.row, styles.justifyContentSpaceBetween,{padding: 10, paddingTop: 10}]}>
						<SwipeButton 
							bgColor='absent'
							textColor='white'
							swipeDirection='left'
							text='Absent'
							onPress={() => this.left()}
						/>
						<View style={[styles.alignItemsCenter]}>
							<CircleBtn
								name='rotate-ccw'
								size='Base'
								bgColor='main'
								color='white'
								onPress={this.reload}
							/>
						</View>
						<SwipeButton 
							bgColor='present'
							textColor='white'
							swipeDirection='right'
							text='Present'
							onPress={() => this.right()}
						/>
					</View>
				</View>
			</View>
		);
	}
}

	Swiper.propTypes = {
		// data: PropTypes.array
	}

	Swiper.defaultProps = {
		// data: []
	}
