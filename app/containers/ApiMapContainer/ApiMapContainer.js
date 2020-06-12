import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import PropTypes from 'prop-types';
import EmptyState from 'saeko-native/app/components/EmptyState';
import ErrorState from 'saeko-native/app/components/ErrorState';

export default class ApiMapContainer extends Component {	
	componentDidMount () {
		this.loadData();
	}

	loadData = () => {
		this.props.loadData();
	}
	render() {
		let components = this.props.data.map(item => (
				<View key={item[this.props.id]}>
					{this.props.renderItem(item)}
					{this.props.ItemSeparatorComponent ? this.props.ItemSeparatorComponent() : null}
				</View>
			)
		);
		if (this.props.isLoading) components = (<EmptyState isLoading={true} />);
		else if (!components.length > 0 && this.props.error === '') components = (
			<EmptyState 
				title={this.props.emptyTitle} 
				subtitle={this.props.emptySubtitle}
			/>);
		else if (this.props.error != '' && this.props.data.length === 0) components = (<ErrorState />);
		return (
			<View>
				{
					components
				}
			</View>
		);
	}
}
ApiMapContainer.propTypes = {
	data: PropTypes.array,
	noComments: PropTypes.string,
	isLoading: PropTypes.bool,
	loadData: PropTypes.func.isRequired,
	renderItem: PropTypes.func.isRequired,
	emptyTitle: PropTypes.string,
	emptySubitle: PropTypes.string,
}

ApiMapContainer.defaultProps = {
	data: [],
	error: '',
	noComments: '',
	isLoading: false,
	emptyTitle: 'emptyState.title',
	emptySubitle: 'emptyState.subtitle'
	//title: {<View />}
}

