import React, { 
	useEffect, 
	useState,
	useRef
} from 'react';
import { Text, View, Image, PanResponder, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';
import styles from './WelcomeSwipeStyle';
import { Feather } from '@expo/vector-icons';
import { Metrics } from 'saeko-native/app/styles';

import SubtitleText from 'saeko-native/app/components/SubtitleText';
import BodyText from 'saeko-native/app/components/BodyText';
import WelcomeSvg from 'saeko-native/app/components/WelcomeSvg';
import Local from 'saeko-native/app/services/Local';
import LabelText from 'saeko-native/app/components/LabelText';

import Swiper from 'react-native-swiper';

export default function WelcomeSwipe (props) {
	let [show, setShow] = useState(true);
	let [pan, setPan] = useState(new Animated.ValueXY());
	let panResponder = useRef(PanResponder.create({
		//Capture movement of view
		onMoveShouldSetResponderCapture: () => true,
		onMoveShouldSetPanResponderCapture: () => true,
		
		//On start
		onPanResponderGrant: (e, gestureState) => {
			pan.setValue({x: 0, y: 0});
		},

		//Animation
		onPanResponderMove: (e, gestureState) => {
			if (gestureState.dy < 0)
				pan.setValue({ x: 0, y: gestureState.dy })
		},

		//On release
		onPanResponderRelease: (e, {vx, vy}) => {
			if ((pan.y._value * -1) > (Metrics.screenHeight * 0.16)) {
				Animated.timing(
					pan,
					{
						toValue: {x: 0, y: -Metrics.screenHeight * 2},
						duration: 450,
						useNativeDriver: true,
					}
				).start(() => setShow(false));
			} else {
				Animated.timing(
					pan,
					{
						toValue: {x: 0, y: 0},
						duration: 300,
						useNativeDriver: true
					}
				).start();
			}
		}
	}));
	let [panStyle, setPanStyle] = useState();

	useEffect(() => {
		// Calculate the x and y transform from the pan value
		let [translateX, translateY] = [pan.x, pan.y];
		// Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
		setPanStyle({transform: [{translateX}, {translateY}]});
	}, [pan.y]);

	useEffect(() => {
		if (!show) {
			setShow(true);
			pan.setValue({ x: 0, y: -Metrics.screenHeight });
			Animated.timing(
				pan,
				{
					toValue: {x: 0, y: 0},
					duration: 500,
					useNativeDriver: true,
				}
			).start();
		}
	}, [props.showSwipe]);

	let CarouselContent = Local.get('welcomeScreen.carousel').map(translation => {
		return {
			title: translation.title,
			text: translation.text
		}
	})

	return show && (
		<View style={[styles.container]} >
			<Animated.View 
				{...panResponder.current.panHandlers}
				style={[panStyle, styles.flex1, styles.container, styles.whiteContainer]}
			>
				<View style={[styles.absolute, styles.welcomeSvg]}>
					<WelcomeSvg />
				</View>
				<View style={styles.flex1}>
					<View style={[styles.flex1, styles.baseHorizontalMargin, styles.alignItemsCenter, styles.justifyContentCenter]}>
						<View style={styles.smallVerticalMargin}>
							<Image
								source = {require('saeko-native/assets/logo-saeko.png')}
								style= {styles.logo}
								resizeMode='contain'
							/>
						</View>
						<SubtitleText 
							text={Local.get('welcomeScreen.welcome')}
							color='white'
							align="center"
						/>
					</View>
					<View style={[styles.flex1, styles.swiper]}>
						<Swiper
							dotStyle={styles.customIndicator}
							activeDotStyle={{...styles.customIndicator, ...styles.activeIndicator}}
							removeClippedSubviews={false}
							autoplay={true}
							autoplayTimeout={5}
						>
							{
								CarouselContent.map(item => (
									<View 
										key={`${item.tile}`}
										style={[styles.flex1, styles.alignItemsCenter, styles.justifyContentCenter, styles.baseHorizontalPadding, styles.swiper]}
									>
										<SubtitleText 
											text={item.title}
											align='center'
											color="main"
											weight="medium"
										/>
										<BodyText 
											align='center'
											text={item.text}
											color="dark"
										/>
									</View>
								))
							}
						</Swiper>						
					</View>
					<View style={[styles.alignItemsCenter, styles.baseVerticalMargin]}>
						<Feather name="chevron-up" size={40} color="#AA258C" />
						<LabelText
							text={Local.get('welcomeScreen.swipe')}
							color='magenta'
						/>
					</View>
				</View>
			</Animated.View>
		</View>
	);
}

// const CarouselContent = [{
// 		title: Local.get('welcomeScreen.carousel.0.title'),
// 		text: Local.get('welcomeScreen.carousel.0.text')
// 	}, {
// 		title: Local.get('welcomeScreen.carousel.1.title'),
// 		text: Local.get('welcomeScreen.carousel.1.text')
// 	}, {
// 		title: Local.get('welcomeScreen.carousel.2.title'),
// 		text: Local.get('welcomeScreen.carousel.2.text')
// 	}
// ];

WelcomeSwipe.propTypes = {
	// data: PropTypes.array
}

WelcomeSwipe.defaultProps = {
	// data: []
}







