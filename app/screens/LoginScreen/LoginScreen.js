import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { UIManager } from 'react-native';
import {
	View,
	Image,
	TextInput,
	Keyboard,
	TouchableWithoutFeedback,
	Platform,
	Alert
} from 'react-native';

import styles from './LoginScreenStyle';

import LoginHeaderSvg from 'saeko-native/app/components/LoginHeaderSvg';
import LoginFooterSvg from 'saeko-native/app/components/LoginFooterSvg';
import PrimaryButton from 'saeko-native/app/components/PrimaryButton';
import PillBtn from 'saeko-native/app/components/PillBtn';
import BodyText from 'saeko-native/app/components/BodyText';
import GradientDivider from 'saeko-native/app/components/GradientDivider';
import BackBtn from 'saeko-native/app/components/BackBtn';
import HeaderNavbar from 'saeko-native/app/components/HeaderNavbar';
import WelcomeSwipe from 'saeko-native/app/components/WelcomeSwipe';
import IconInput from 'saeko-native/app/components/IconInput';
import InputPillContainer from 'saeko-native/app/components/InputPillContainer';
import CircleBtn from 'saeko-native/app/components/CircleBtn';
import LogoSaekoSVG from 'saeko-native/app/components/LogoSaekoSVG';

import KeyboardSpacer from 'react-native-keyboard-spacer';
import Local from 'saeko-native/app/services/Local';
import BtnLoginContainer from 'saeko-native/app/containers/BtnLoginContainer';
import { login } from 'saeko-native/app/actions/AuthActions';

import { Metrics } from 'saeko-native/app/styles';

export default class LoginScreen extends Component {
	constructor() {
		super();
		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}

	static navigationOptions = {
		header: null
	}

	state = {
		username: '',
		password: '',
		showSwipe: true,
		hasMinimumData: false,
		writing: false,
		isLoggingIn: false
	}

	onChange = (value, type) => {
		this.setState({
			[type]: value
		}, () => {
			this.setState({
				hasMinimumData: this.state.username.length > 0 && this.state.password.length > 0
			})
		})
	}

	login = (authLogin) => {
		this.setState({ isLoggingIn: true }, () => {
			this.dismissing();
			authLogin({
				username: this.state.username,
				email: this.state.username,
				password: this.state.password
			}).catch(e => {
				setTimeout(() => {
					this.setState({ isLoggingIn: false });
					Alert.alert(Local.get('loginScreen.errorTitle'), Local.get('loginScreen.errorSubtitle'));
				}, 2500);
			});
		});
	}

	onFocusInput = () => {
		this.setState({ writing: true })
	}

	dismissing = () => {
		Keyboard.dismiss();
		this.setState({ writing: false })
	}

	render() {
		return (
			<View style={[styles.flex1, {backgroundColor: '#fff'}]}>
				<TouchableWithoutFeedback
					onPress={() => this.dismissing()}
				>
					<View style={styles.flex1}>
						<React.Fragment>
							<View style={[styles.absolute, styles.header]}>
								<LoginHeaderSvg />
							</View>
							<View style={[styles.absolute, styles.logoSvg, this.state.isLoggingIn ? { opacity: 0 } : { opacity: 100 }]}>
								<LogoSaekoSVG width={`${Metrics.screenWidth * 0.25}`} height={`${Metrics.screenWidth * 0.25}`} />
							</View>
							<View style={[styles.absolute, styles.logoSvg, !this.state.isLoggingIn ? { opacity: 0 } : { opacity: 100 }]}>
								<Image
									source={require('saeko-native/assets/logo_saeko_letter_40.gif')}
									style={styles.logoLoading}
									resizeMode='contain'
								/>
							</View>
							<View style={[styles.absolute, styles.footer]}>
								<LoginFooterSvg />
							</View>
						</React.Fragment>
						
						<View style={[styles.flex15, styles.justifyContentFlexEnd, styles.backContainer]}>
							<InputPillContainer
								btn={
									<BtnLoginContainer>
										{(authLogin, isLoading) => (
											<CircleBtn
												iconName='arrow-right'
												size='Huge'
												bgColor='butterfly'
												color='white'
												onPress={() => this.login(authLogin)}
												disabled={!this.state.hasMinimumData || (isLoading && this.state.isLoggingIn)}
											/>
										)}
									</BtnLoginContainer>
								}
							>
								<BtnLoginContainer>
									{(authLogin, isLoading) => (
										<IconInput
											ref={(input) => { this.mainTextInput = input; }}
											style={styles.textInputStyle}
											placeholderTextColor='#9CADC6'
											placeholder={Local.get('loginScreen.username')}
											maxLength={100}
											returnKeyType='next'
											onChangeText={(value) => this.onChange(value, 'username')}
											blurOnSubmit={false}
											textContentType='emailAddress'
											keyboardType='email-address'
											editable={!isLoading}
											autoCapitalize="none"
											onSubmitEditing={() => {
												this.secondTextInput.focus();
											}}
											onFocus={() => this.onFocusInput()}
											iconName='user'
											isEmpty={this.state.username}
										/>
									)}
								</BtnLoginContainer>
								<GradientDivider />
								<BtnLoginContainer>
									{(authLogin, isLoading) => (
										<IconInput
											ref={(input) => { this.secondTextInput = input; }}
											style={styles.textInputStyle}
											placeholderTextColor='#9CADC6'
											placeholder={Local.get('loginScreen.password')}
											maxLength={100}
											returnKeyType='go'
											secureTextEntry
											autoCapitalize="none"
											onChangeText={(value) => this.onChange(value, 'password')}
											blurOnSubmit={false}
											onSubmitEditing={() => this.login(authLogin)}
											editable={!isLoading}
											onFocus={() => this.onFocusInput()}
											iconName='lock'
											isEmpty={this.state.password}
										/>
									)}
								</BtnLoginContainer>
							</InputPillContainer>
							<View style={[styles.flex1, styles.doubleTopMargin]}>
								<PillBtn
									text={Local.get('loginScreen.goBack')}
									onPress={() => this.setState({ showSwipe: !this.state.showSwipe })}
									textColor='magenta'
									disabled={this.state.isLoggingIn}
								/>
							</View>
							<KeyboardSpacer />
						</View>
					</View>
				</TouchableWithoutFeedback>
				<WelcomeSwipe
					showSwipe={this.state.showSwipe}
				/>
			</View>
		);
	}
}
