import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { 
	Animated,
	Dimensions,
	Keyboard,
	StyleSheet,
	TextInput,
	UIManager,
	TouchableWithoutFeedback,
	Platform
} from 'react-native';

import styles from './KeyboardAvoidingScrollViewStyle';

const { State: TextInputState } = TextInput;

export default class KeyboardAvoidingScrollView extends Component {

	state = {
		shift: new Animated.Value(0),
		event: null,
	};

	componentWillMount() {
		this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
		this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
	}

	componentWillUnmount() {
		this.keyboardDidShowSub.remove();
		this.keyboardDidHideSub.remove();
	}


	handleKeyboardDidShow = (event) => this.setState({ 
			event: event,
		}, () => {
			const { height: windowHeight } = Dimensions.get('window');
			const keyboardHeight = event.endCoordinates.height;
			const currentlyFocusedField = TextInputState.currentlyFocusedField();
			UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
				const fieldHeight = height;
				const fieldTop = pageY;
				const toValue = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
				if (toValue >= 0) return;
				Animated.timing(this.state.shift,{
					toValue: toValue - this.props.extraHeight,
					duration: this.props.durationShow,
					useNativeDriver: true,
				}).start();
			});
		});

	handleKeyboardDidHide = () =>{
		Animated.timing( this.state.shift, {
			toValue: 0,
			duration: this.props.durationHide,
			useNativeDriver: true
		}).start();
	}

	render() {
		return (
			<Animated.View style={[styles.container, { transform: [{translateY: this.state.shift}] }]}>
				{this.props.children(() => this.handleKeyboardDidShow(this.state.event))}
			</Animated.View>
		);
	}

}

KeyboardAvoidingScrollView.propTypes = {
	durationShow: PropTypes.number,
	durationHide: PropTypes.number,
	extraHeight: PropTypes.number,
	extraData: PropTypes.bool
}

KeyboardAvoidingScrollView.defaultProps = {
	durationShow: 500,
	durationHide: 500,
	extraHeight: 0,
	extraData: false
}