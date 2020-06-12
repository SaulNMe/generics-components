import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './ImageLayoutStyle';

import { Feather } from '@expo/vector-icons'; 
import { Colors } from 'saeko-native/app/styles';
import NavigationService from 'saeko-native/app/services/NavigationService';

import ImageView from 'saeko-native/app/components/ImageView';

function ImageLayout (props) {

	const layoutOne = (images) => (
		<View  style={[styles.flexWrap, styles.flex1, styles.row, styles.imgDimensions]}>
			{ images[0] && <ImageView index={0} images={images} flex={1} resizeMode={'contain'}/> }
		</View>
	);
	const layoutTwo = (images) => (
		<View  style={[styles.flexWrap, styles.flex1, styles.row, styles.imgDimensions]}>
			{ images[0] && <ImageView index={0} images={images} flex={1}/> }
			{ images[1] && <ImageView index={1} images={images} flex={1}/> }
		</View>
	);

	const layoutThree = (images) => (
		<View style={[styles.row, styles.flex1, styles.flexWrap, styles.imgDimensions]}>
			<View style={[styles.flex1, styles.alignSelfCenter]}>	
				<ImageView index={0} images={images} flex={1}/>
			</View>
			<View style={[styles.flex1, styles.alignSelfCenter]}>	
				<ImageView index={1} images={images} flex={1}/>
				<ImageView index={2} images={images} flex={1}/>
			</View>
		</View>
	);

	const layoutFour = (images) => (
		<View  style={[styles.flex1, styles.imgDimensions]}>
			<View style={[styles.flex1, styles.row]}>	
				<ImageView index={0} images={images} flex={3}/>
				<ImageView index={1} images={images} flex={2}/>
			</View>
			<View style={[styles.flex1, styles.row]}>	
				<ImageView index={2} images={images} flex={2}/>
				<ImageView index={3} images={images} flex={3}/>
			</View>
		</View>
	);

	const layoutFive = (images) => (
		<View  style={[styles.flex1, styles.imgDimensions]}>
			<View style={[styles.flex1, styles.row]}>	
				<ImageView index={0} images={images} flex={1}/>
				<ImageView index={1} images={images} flex={1}/>
			</View>
			<View style={[styles.flex1, styles.row]}>	
				<ImageView index={2} images={images} flex={1}/>
				<ImageView index={3} images={images} flex={1}/>
				<ImageView index={4} images={images} flex={1}/>
			</View>
		</View>
	);

	const layoutPlus = (images) => (
		<View  style={[styles.flex1, styles.imgDimensions]}>
			<View style={[styles.flex1, styles.row]}>	
				<ImageView index={0} images={images} flex={2}/>
				<ImageView index={1} images={images} flex={2}/>
			</View>
			<View style={[styles.flex1, styles.row]}>	
				<ImageView index={2} images={images} flex={1}/>
				<ImageView index={3} images={images} flex={1}/>
				<View style={[styles.flex1, styles.row]}>	
					<ImageView index={4} images={images} flex={1}/>
					<TouchableOpacity
						style={[styles.overlayContainer, styles.row, styles.justifyContentCenter, styles.alignItemsCenter]}
						onPress={() => NavigationService.navigate('CarouselImageModal', {
							CarouselContent: images,
							index: 0
						})}
					>
						<Feather 
							name='plus'
							color={Colors.white}
							size={30}
							text ={images.length}
						/>
						<Text style={styles.text}> {images.length - 5}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>

	)

	let images = props.images;

	let content = (<React.Fragment />);


	if(images.length === 1) content = layoutOne(images);
	if(images.length === 2) content = layoutTwo(images);
	if(images.length === 3) content = layoutThree(images);
	if(images.length === 4) content = layoutFour(images);
	if(images.length === 5) content = layoutFive(images);
	if(images.length > 5) content = layoutPlus(images);

	return images ? (
		<View style={styles.container}>
			{ content }
		</View>
	): <React.Fragment />;
}

ImageLayout.propTypes = {
	images: PropTypes.array
}

ImageLayout.defaultProps = {
	images: []
}


export default React.memo(ImageLayout);

