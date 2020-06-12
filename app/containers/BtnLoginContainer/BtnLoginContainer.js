import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';
import { connect } from "react-redux";
import { login } from "saeko-native/app/actions/AuthActions";
class BtnLoginContainer extends Component {	

	state = { loading: false }

	login = async credentials => {
		this.setState({loading: true})
		try {
			await this.props.login(credentials)
		} catch (e) {
			this.setState({loading: false})
			throw e;
		}
	}

	render() {
		return (this.props.children(this.login, this.state.loading));
	}
}

mapStateToProps = state => ({
})

export default connect(mapStateToProps, { login })(BtnLoginContainer);
