import React from 'react';
import {
	FlatList,
	RefreshControl,
} from 'react-native';
import useStudents from "saeko-native/app/hooks/useStudents";
import ErrorState from "saeko-native/app/components/ErrorState";
import EmptyState from "saeko-native/app/components/EmptyState";

export default function StudentListContainer (props) {	

	const [ studentsData, studentsLoader ] = useStudents();
	
	return (
		<FlatList
			extraData={props.extraData}
			data={studentsData}
			keyExtractor={Students => String(Students.id)}
			renderItem={({item}) => props.renderItem(item)}
			ListEmptyComponent={() =>{
				if(studentsLoader.error != '') return (<ErrorState addMarginTop={true}/>);
				if(!studentsLoader.isReloading) return (<EmptyState addMarginTop={true}/>);
				return null;
			}}
			refreshControl={
				<RefreshControl
					refreshing={studentsLoader.isReloading}
					onRefresh={studentsLoader.refetch}
				/>
			}
		/>
	);
}