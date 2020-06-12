import React, { Component } from 'react';
import { 
	View,
	Image, 
} from 'react-native';

import styles from './WelcomeScreenStyle';
import PrimaryButton from 'saeko-native/app/components/PrimaryButton';
import SubtitleText from 'saeko-native/app/components/SubtitleText';
import BodyText from 'saeko-native/app/components/BodyText';
import WelcomeSvg from 'saeko-native/app/components/WelcomeSvg';
import Local from 'saeko-native/app/services/Local';
import HeaderNavbar from 'saeko-native/app/components/HeaderNavbar';

import Swiper from 'react-native-swiper';

export default class WelcomeScreen extends Component {
	static navigationOptions = {
		header: null
	}

	render() {
		
		return (
			<View style={[styles.container]}>
				<HeaderNavbar statusBar='light-content'/>
				<View style={{ position: 'absolute' }}>
					<WelcomeSvg />
				</View>
				<View style={styles.flex1}>
					<View style={[styles.baseHorizontalMargin, styles.alignItemsCenter]}>
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
					<View style={[styles.flex1]}>
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
										style={[styles.flex1, styles.alignItemsCenter, styles.baseHorizontalPadding, styles.swiper]}
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
						<PrimaryButton 
							onPress={ () => this.props.navigation.navigate('Login', {transition: 'collapseExpand'})}
							text={Local.get('welcomeScreen.begin')}
							// opacityB
						/>
					</View>
				</View>
			</View>

		);
	}
}
const CarouselContent = [{
		title: Local.get('welcomeScreen.carousel.0.title'),
		text: Local.get('welcomeScreen.carousel.0.text')
	}, {
		title: Local.get('welcomeScreen.carousel.1.title'),
		text: Local.get('welcomeScreen.carousel.1.text')
	}, {
		title: Local.get('welcomeScreen.carousel.2.title'),
		text: Local.get('welcomeScreen.carousel.2.text')
	}
];

