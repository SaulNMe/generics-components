import React, { PureComponent } from 'react';
import { View, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import PropTypes from 'prop-types';

import styles from './AttachmentsListStyle';

import AttachmentBtn from 'saeko-native/app/components/AttachmentBtn';

import Local from 'saeko-native/app/services/Local';

import * as Animatable from 'react-native-animatable';

import GaService from 'saeko-native/app/services/GaService';

const iconImage = {
	doc: require('saeko-native/assets/Images/docx.png'),
	xls: require('saeko-native/assets/Images/xls.png'),
	pdf: require('saeko-native/assets/Images/pdf.png')
}

export default class AttachmentsList extends PureComponent{
	state = {
		isExpanded: false,
		showLessBtn: false,
		hiddenFilesLength: 0,
		hasStartHideAnimation: false,
		hasStartShowAnimation: false,
		start: false
	}

	downloadDoc = async (url) => {
		try {
			// this.setState({ downloading: true });
			await WebBrowser.openBrowserAsync(url);
			GaService.homeEvent('download:attachment', 'feed-activity');
			// this.setState({ downloading: false });
		} catch(err) {
			Alert.alert(
				'Hubo un problema al realizar la descarga', 
				'Inténtalo más tarde'
			);
			// this.setState({ downloading: false });
		}
	}

	render () {
		let content = [];
		this.props.fileList.forEach((file, index) => {
			let ext = file.filename.split('.').pop().substring(0, 3);
			(ext !== 'jpg') && content.push(
				<React.Fragment key={index}>
					<AttachmentBtn
						ext={ext}
						image={iconImage[ext]}
						name={file.filename.substring(0, 10) + ''}
						key={file.filename}
						onPress={() => this.downloadDoc(file.url)}
					/>
				</React.Fragment>
			);
		});
		let hiddenFilesLength = content.length - 2;
		let hiddenFiles = [];

		if (hiddenFilesLength > 0) {
			content.forEach((item, index) => hiddenFiles.push(
				<React.Fragment key={index}>
					<Animatable.View
							animation={this.state.hasStartHideAnimation ? 'fadeOut': 'fadeIn'}
							duration={500}
							iterationDelay={this.state.hasStartHideAnimation ? 150 * (hiddenFilesLength - hiddenFiles.length) :150 * hiddenFiles.length }
							useNativeDriver={true}
						>
						{item}
					</Animatable.View>
				</React.Fragment>
			));
			hiddenFiles = hiddenFiles.slice(2);
			content = content.slice(0, 2);
			content.push(hiddenFiles);
		}

		let files = this.state.isExpanded ? content : content.slice(0, 2);

		let heightAnimation = {
			from: {
				height: 112
			},
			to: {
				height: 112 + (hiddenFilesLength * 37)
			}
		}

		let inverseHeightAnimation = {
			from: {
				height: 112 + (this.state.start ? hiddenFilesLength * 37: 0)
			},
			to: {
				height: 112
			}
		}
		let isAnimation = hiddenFilesLength > 0 ? !this.state.hasStartHideAnimation && this.state.isExpanded ? heightAnimation: inverseHeightAnimation: '';


		return (
			<Animatable.View 
				style={[styles.baseTopMargin, styles.animatedContainer]}
				animation={isAnimation}
				duration={!this.state.hasStartHideAnimation ? 500 + (hiddenFiles - 2) * 150: 800}
			>
				{files}
				{
					(hiddenFilesLength > 0) && (
						<View>
							<Animatable.View
								onAnimationEnd={() => {
									if (this.state.hasStartShowAnimation) {
										this.setState({ 
											showLessBtn: true,
											isExpanded: true,
											start: true
										})
									}
								}}
								animation={this.state.hasStartShowAnimation ? 'fadeOut': 'fadeIn'}
								duration={this.state.hasStartShowAnimation ? 100: 500}
							>
								<AttachmentBtn
									icon='file-plus' 
									name={`${Local.get('homeScreen.show')} ${hiddenFilesLength} ${Local.get('homeScreen.more')}`}
									onPress={() => this.setState({ hasStartShowAnimation: true }, () => GaService.homeEvent('display-more:attachment', 'feed-activity'))}
								/>
							</Animatable.View>
							{this.state.showLessBtn && <Animatable.View
								onAnimationEnd={() => {
									if (this.state.hasStartHideAnimation) {
										this.setState({ 
											hasStartShowAnimation: false,
											showLessBtn: false,
											hasStartHideAnimation: false,
											isExpanded: false
										});
									}
								}}
								style={styles.lessBtn}
								animation={this.state.hasStartHideAnimation ? 'fadeOut': 'fadeIn'}
								duration={500}
								iterationDelay={this.state.hasStartHideAnimation ? 0: 150 * hiddenFilesLength + 150}
							>
								<AttachmentBtn
									icon={'file-minus'} 
									name={`${Local.get('homeScreen.showLess')}`}
									onPress={() => this.setState({ hasStartHideAnimation: true }, () => GaService.homeEvent('display-more:attachment', 'feed-activity'))}
								/>
							</Animatable.View>}
						</View>
					)
				}
			</Animatable.View>
		);
	}
}

AttachmentsList.propTypes = {
	fileList: PropTypes.array
}
AttachmentsList.defaultProps = {
	fileList: []
}
