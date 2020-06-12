import React, { Component } from 'react';
import { 
	View,
	TextInput,
	ScrollView,
	Keyboard,
	KeyboardAvoidingView, 
	TouchableWithoutFeedback,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HugeText from 'saeko-native/app/components/HugeText';
import BodyText from 'saeko-native/app/components/BodyText';
import Divider from 'saeko-native/app/components/Divider';
import PrimaryButton from 'saeko-native/app/components/PrimaryButton';
import styles from './PersonalDetailsScreenStyle';
import CloseBtn from 'saeko-native/app/components/CloseBtn';
import HeaderNavbar from 'saeko-native/app/components/HeaderNavbar';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Local from 'saeko-native/app/services/Local';

export default class PersonalDetailsScreen extends Component {
	
	state = {
		textChanged: true,
	};

	uploadDataInformation = () => this.props.navigation.navigate('Main');
	
	render() {
		const { navigation } = this.props;
   		const userData = navigation.getParam('userData', '');
		const username = userData.first_name;
		const email = userData.email;
		const password = '*************+';
		return (
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.flex1}>
					<LinearGradient
				        colors={['#1E88E5', '#2D9CDB']}
				        style={[styles.imageFill]}
				    />
					<HeaderNavbar 
						statusBar='light-content'
						right={
							<CloseBtn 
								onPress={() => this.props.navigation.navigate('Main')}
								dark
							/>
						}
					/>
					<View style={[styles.justifyContentSpaceBetween, styles.flex1, styles.baseHorizontalMargin]}>
						<View>
							<HugeText
								text={Local.get('personalDetailsScreen.title')}
								weight='medium'
								color='white'
							/>
							<View style={[styles.baseTopMargin]}>	
								<BodyText
									text={Local.get('personalDetailsScreen.username')}
									color='white'
									weight='bold'
								/>
								<TextInput
									style={styles.textInputStyle}
									placeholderTextColor='#bdddf6'
									placeholder={Local.get('personalDetailsScreen.username')}
									maxLength={100}
									returnKeyType='next'
									autoCorrect
									value={username}
									onChangeText={(text)=> this.setState({username: text})}
									blurOnSubmit={ false }
									onSubmitEditing={() => this.secondTextInput.focus() }
								/>
								<Divider/>
							</View>
							<View style={styles.baseTopMargin}>	
								<BodyText
									text={Local.get('personalDetailsScreen.email')}
									color='white'
									weight='bold'
								/>
								<TextInput
									ref={(input) => this.secondTextInput = input }
									style={styles.textInputStyle}
									placeholderTextColor='#bdddf6'
									placeholder={Local.get('personalDetailsScreen.email')}
									maxLength={100}
									returnKeyType='next'
									autoCorrect
									value={email}
									onChangeText={(text)=> this.setState({email: text})}
									blurOnSubmit={ false }
									textContentType='emailAddress'
									keyboardType='email-address'
									onSubmitEditing={() => this.thirdTextInput.focus()}
								/>
								<Divider/>
							</View>
							<View style={styles.baseTopMargin}>	
								<BodyText 
									text={Local.get('personalDetailsScreen.password')}
									weight='bold'
									color='white'
								/>
								<TextInput
									ref={(input) => this.thirdTextInput = input}
									style={styles.textInputStyle}
									placeholderTextColor='#bdddf6'
									placeholder='••••••••'
									maxLength={100}
									returnKeyType='send'
									secureTextEntry
									autoCorrect
									value={password}
									onChangeText={(text)=> this.setState({password: text})}
									blurOnSubmit={ false }
									onSubmitEditing={()=> this.uploadDataInformation() } 
								/>
								<Divider/>
							</View>
						</View>
						<View style={styles.flex1}/>
						<KeyboardSpacer/>
						<View style={[styles.flex1, styles.justifyContentFlexEnd]}>
							<View style={[styles.alignSelfCenter, styles.baseBottomMargin]}>
								<PrimaryButton 
									onPress={() => this.uploadDataInformation()}
									text={'Save changes'}
									white={this.state.textChanged}
									disabled={!this.state.textChanged}
								/>
							</View>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}