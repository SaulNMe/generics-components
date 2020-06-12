import React, { Component } from 'react';
import Selectors from 'saeko-native/app/Selectors';
 
import { connect } from "react-redux";

class getUserContainer extends Component {	

	render() {
		return (this.props.children(this.props.userData));
	}
}

mapStateToProps = state => ({
	userData: Selectors.selectUser(state)
})

export default connect(mapStateToProps)(getUserContainer);
