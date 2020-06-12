import React, { Component } from 'react';
import { 
	Text,
	View,
	ScrollView,
	Button,
	KeyboardAvoidingView,
	Image
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import styles from './PostDetailScreenStyle';
import PostDetailHeaderSvg from 'saeko-native/app/components/PostDetailHeaderSvg';
import BackBtn from 'saeko-native/app/components/BackBtn';
import CircleImg from 'saeko-native/app/components/CircleImg';
import BodyText from 'saeko-native/app/components/BodyText';
import LabelText from 'saeko-native/app/components/LabelText';
import AttachmentBtn from 'saeko-native/app/components/AttachmentBtn';

import Swiper from 'react-native-swiper';
import { Metrics } from 'saeko-native/app/styles';

import moment from 'moment';

import ImageCarousel from 'saeko-native/app/components/ImageCarousel';

const iconImage = {
	doc: require('saeko-native/assets/Images/docx.png'),
	xls: require('saeko-native/assets/Images/xls.png'),
	pdf: require('saeko-native/assets/Images/pdf.png')
}

export default class PostDetailScreen extends Component {

	downloadDoc = async (url) => {
		try {
			// this.setState({ downloading: true });
			await WebBrowser.openBrowserAsync(url);
			// this.setState({ downloading: false });
		} catch(err) {
			Alert.alert(
				'Hubo un problema al realizar la descarga', 
				'Inténtalo más tarde'
			);
			// this.setState({ downloading: false });
		}
	}

	render() {
		const {navigation} = this.props;
		const item = navigation.getParam('item','no-item');
		const imageExtensions = ['jpg', 'jpeg', 'png'];
		const images = (item.activity_object.attachments || []).filter(file => {
			let fileExtension = file.filename.split('.').pop();
			return imageExtensions.some(extension => fileExtension.includes(extension));
		});
		const fileExtensions = ['pdf', 'xls', 'xlsx', 'doc', 'docx'];
		const files = (item.activity_object.attachments || []).filter(file => {
			let fileExtension = file.filename.split('.').pop();
			return fileExtensions.some(extension => fileExtension.includes(extension));
		});
		return (
			<View>
				<ScrollView
					style={styles.list}
				>
					<View style={styles.baseHorizontalMargin}>
						<BodyText
							text={item.activity_object.message}
							color='subtext'
						/>
						{
							files.map((file, index) => {
								let ext = file.filename.split('.').pop().substring(0, 3);
								return (
									<View key={index} style={[index === 0 && styles.baseTopMargin, index === files.length && styles.baseBottomMargin]}>
										<AttachmentBtn
											ext={ext}
											image={iconImage[ext]}
											name={file.filename.substring(0, 10) + ''}
											key={file.filename}
											onPress={() => this.downloadDoc(file.url)}
										/>
									</View>
								)
							})
						}
					</View>
					{
						images && (
							<View style={styles.baseVerticalMargin}>
								<Swiper
									height={Metrics.screenHeight * 0.5}
									dotStyle={styles.customIndicator}
									activeDotStyle={{...styles.customIndicator, ...styles.activeIndicator}}
								>
									{
										images.map((image, index) => {
											return (
												<Image
													key={index}
													source={{uri: image.url}}
													resizeMode='contain'
													style={{height: Metrics.screenHeight * 0.4}}
												/>
											)
										})
									}
								</Swiper>
							</View>
						)
					}
				</ScrollView>
				<View style={{position: 'absolute', top: 0}}>
					<PostDetailHeaderSvg />
				</View>
				<View style={styles.titleHeader}>
					<BackBtn 
						hasLabel
						color='white'
						onPress={() =>  navigation.goBack()}
					/>
					<View style={[styles.row, styles.alignItemsCenter, styles.smallTopMargin]}>
						<CircleImg
							image={item.avatar}
							size='BigHuge'
						/>
						<View style={styles.baseLeftMargin}>
							<BodyText 
								text={item.actor.first_name}
								color='white'
								weight='medium'
							/>
							<LabelText
								text={moment(item.time).fromNow()}
								color='white'
							/>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
