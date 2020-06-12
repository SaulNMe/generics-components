import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View, NativeModules} from 'react-native';
import PropTypes from 'prop-types';
import styles from './StatusBarAndroidStyle';
const { StatusBarManager } = NativeModules;

export default function StatusBarAndroid (props) {
	//console.log(props);
	let routeName = '';
	try {
		let navState = props.navigation.state;
		routeName = navState.routes[navState.index].routes[navState.routes[navState.index].index].routeName;
	} catch(e){
		//console.log(e)
	}
	if(routeName === 'Auth') return null;
	return (<View style={{height: StatusBarManager.HEIGHT, width: '100%', backgroundColor: '#000'}} />);
}


StatusBarAndroid.propTypes = {
	// data: PropTypes.array
}

StatusBarAndroid.defaultProps = {
	// data: []
}







