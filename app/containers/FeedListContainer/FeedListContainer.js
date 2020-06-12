import React, { Component } from 'react';
import ApiService from 'saeko-native/app/services/ApiService';
import normalizeById from 'saeko-native/app/utils/NormalizeById';
import GaService from 'saeko-native/app/services/GaService';

export default class FeedListContainer extends Component {	
	state = {
		isLoading: true,
		error: '',
		allIds: [],
		byId: {},
		preLt: null,
		lt: 0,
		isFirst: true
	}

	componentDidMount() {
		this.loadData();
	}

	loadData = async () => {
		if(this.state.lt === this.state.preLt) return;
		if(!this.isFirst) GaService.homeEvent('list:feed');
		else this.setState({isFirst: false});
		await ApiService.getActivities({lt: this.state.lt}).then(
			result => {
				let normalized = normalizeById(result.feed_activities, 'id');
				let allIds = [...new Set(this.state.allIds.concat(normalized.allIds))];
				let byId = {
					...this.state.byId,
					...normalized.byId
				};
				this.setState({
					allIds: allIds,
					byId: byId,
					preLt: this.state.lt,
					lt: allIds[allIds.length-1],
					isLoading: false
				});
			}, error => this.setState({...this.state, error: error, isLoading: false})
		);
	}

	reloadData = async () =>
		await this.setState({
			isLoading: true,
			error: '',
			allIds: [],
			byId: {},
			preLt: null,
			lt: 0
		}, async () => await this.loadData());

	render() {
		return (
			<React.Fragment>
				{
					this.props.children(this.state, this.loadData, this.reloadData)
				}
			</React.Fragment>
		)
	}
}