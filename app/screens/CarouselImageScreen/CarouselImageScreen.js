import React, { Component } from 'react';
import { 
	View,
	ScrollView,
	InteractionManager
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './CarouselImageScreenStyle';
import Gallery from 'react-native-image-gallery';
import ImageCarousel from 'saeko-native/app/components/ImageCarousel';
import CloseBtn from 'saeko-native/app/components/CloseBtn';

export default class CarouselImageScreen extends Component {
	state = {
		showGallery: false
	}
	
	componentDidMount () {
		InteractionManager.runAfterInteractions(() => {
			this.setState({
				showGallery: true
			})
		});
	}

	render() {
		const CarouselContent = this.props.navigation.getParam('CarouselContent', []);
		const index = this.props.navigation.getParam('index', 0);
		const array = [];
		CarouselContent.map( (item, index) => array.push({ 
			key: index, 
			source: {
				key: index,
				uri: item.url
			}
		}));
		return this.state.showGallery ? (
			<ScrollView style={[styles.container]} scrollEnabled={false}>
				<View style={[styles.buttonStyle, styles.doubleVerticalMargin]}> 
					<CloseBtn 
						onPress={() => this.props.navigation.goBack(null)}
						dark
					/>
				</View>
				<ImageCarousel imageList={array} initialPage={index} />
			</ScrollView>
		): <View style={[styles.container]}/>;
	}
}