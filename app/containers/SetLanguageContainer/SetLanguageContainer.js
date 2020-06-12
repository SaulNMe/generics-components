import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import { connect } from 'react-redux';
import Local from 'saeko-native/app/services/Local';
import { setLocal } from 'saeko-native/app/actions/AuthActions.js';
import Selectors from 'saeko-native/app/Selectors';

class SetLanguageContainer extends Component {	

	
	render() {
		return (
			<React.Fragment>
				{
					this.props.children(this.props.local, this.props.setLocal, Local.setLocal)
				}
			</React.Fragment>
		);
	}
}

mapStateToProps = state => ({
	local: Selectors.selectLocal(state)

});

export default connect(mapStateToProps, { setLocal })(SetLanguageContainer);