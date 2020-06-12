import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import SimpleCard from 'saeko-native/app/components/SimpleCard';
import IconDoubleText from 'saeko-native/app/components/IconDoubleText';
import ImageLayout from 'saeko-native/app/components/ImageLayout';
import SubtitleText from 'saeko-native/app/components/SubtitleText';
import BodyText from 'saeko-native/app/components/BodyText';
import AttachmentsList from 'saeko-native/app/components/AttachmentsList';
import CircleImg from 'saeko-native/app/components/CircleImg';


import styles from './PostCardStyle';

function PostCard(props) {


	const imageExtensions = ['jpg', 'jpeg', 'png'];
	const images = props.fileList.filter(file => {
		let fileExtension = file.filename.split('.').pop();
		return imageExtensions.some(extension => fileExtension.includes(extension));
	});
	const fileExtensions = ['pdf', 'xls', 'xlsx', 'doc', 'docx'];
	const files = props.fileList.filter(file => {
		let fileExtension = file.filename.split('.').pop();
		return fileExtensions.some(extension => fileExtension.includes(extension));
	});

	let subtitle = props.subtitle ?
		<SubtitleText
			color='darkest'
			weight='regular'
			text={props.subtitle}
		/> : null;

	let description = props.text ?
		<View style={styles.smallTopMargin}>
			<BodyText
				numberOfLines={3}
				color='light'
				weight='regular'
				text={props.text}
			/>
		</View>
		: null;
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={[styles.card, styles.flex1, styles.baseRightMargin, styles.doubleBottomMargin, styles.bigLeftMargin]} >
			<View style={[styles.row, styles.justifyContentSpaceBetween]}>
				<View style={styles.flex02}>
					<View style={styles.sizeFloatingImg}>
						<CircleImg
							image={props.avatar}
							size='BigHuge'
						/>
					</View>
				</View>
				<View style={styles.flex07}>
					<IconDoubleText
						title={props.title}
						subtitle={props.date.charAt(0).toUpperCase() + props.date.slice(1)}
						titleColor='text'
						subtitleColor='magenta'
					/>
				</View>
				<View style={styles.flex01}>
					{
						true ? (<React.Fragment />) : (
							<Image
								resizeMode='cover'
								style={styles.sizeImg}
								source={require('saeko-native/assets/static1.png')}
							/>
						)
					}
				</View>
			</View>
			{
				images.length > 0 && (
					<View style={styles.baseTopMargin}>
						<ImageLayout images={images} />
					</View>
				)
			}
			<View style={styles.baseHorizontalPadding}>
				{
					files && (<AttachmentsList fileList={files} />)
				}
				{subtitle}
				{description}
			</View>
		</TouchableOpacity >
	)
};

PostCard.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	icon: PropTypes.string,
	text: PropTypes.string,
	fileList: PropTypes.array,
	onPress: PropTypes.func
}

PostCard.defaultProps = {
	title: '',
	subtitle: '',
	icon: '',
	text: '',
	fileList: [],
	onPress: () => { }
}

export default React.memo(PostCard);
