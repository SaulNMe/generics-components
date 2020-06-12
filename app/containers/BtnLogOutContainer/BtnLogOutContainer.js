import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import { connect } from "react-redux";
import { resetStore } from "saeko-native/app/actions/AuthActions";
class BtnLogOutContainer extends Component {	

	render() {
		return (this.props.children(this.props.resetStore));
	}
}

mapStateToProps = state => ({})

export default connect(mapStateToProps, { 
	resetStore 
})(BtnLogOutContainer);
