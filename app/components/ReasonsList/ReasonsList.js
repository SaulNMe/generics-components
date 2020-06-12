import React from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';

import ReasonItem from 'saeko-native/app/components/ReasonItem';
import Divider from 'saeko-native/app/components/Divider';

import EmptyState from 'saeko-native/app/components/EmptyState';
import ErrorState from 'saeko-native/app/components/ErrorState';
import styles from './ReasonsListStyle';

export default function ReasonsList (props) {

	const renderSeparator = () => (
		<View style={[styles.flex1, styles.doubleHorizontalMargin]}>
			<Divider/>
		</View>
	);
	return (
		<FlatList
			data={props.data.filter( d => d.relative_can_select)}
			extraData={props.selected}
			keyExtractor={(item, index) => item.code}
			ItemSeparatorComponent={renderSeparator}
			ListEmptyComponent={() =>{
				if(props.error != '') return (<ErrorState addMarginTop={true}/>);
				if(!props.isLoading) return (<EmptyState addMarginTop={true}/>);
				return null;
			}}
			renderItem={({item}) => ( 
				<View style={[styles.flex1, styles.doubleHorizontalMargin]}>
					<ReasonItem
						reason={`${item.name}`}
						onPress={() => props.onSelect(item)}
						color={String(item.code) == props.selected ? 'white' : 'white80'}
					/>
				</View>
			)}
			refreshControl={
				<RefreshControl
					refreshing={props.isLoading}
					onRefresh={()=>{}}
				/>
			}
			ListFooterComponent={() => (<View style={styles.footerSpace} />)}
		/>
	);
}

ReasonsList.propTypes = {
	data: PropTypes.array,
	error: PropTypes.string,
	isLoading: PropTypes.bool,
}

ReasonsList.defaultProps = {
	data: [],
	error: '',
	isLoading: false,
}
