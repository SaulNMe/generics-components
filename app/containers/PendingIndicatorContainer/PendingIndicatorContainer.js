import React, { 
	useEffect, 
	useState 
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { getPendings } from 'saeko-native/app/actions/PendingsActions';
import Selectors from 'saeko-native/app/Selectors';

export default function PendingIndicator (props) {
	const dispatch = useDispatch();
	const total = useSelector(Selectors.selectPendingsTotal);
	useEffect(() => {
		if(!props.isFirst) return;
		dispatch(getPendings(true));
	}, []);
	return total > 0 ? props.children({ size: String(total) }) : React.Fragment;
}


PendingIndicator.propTypes = {
	isFirst: PropTypes.bool
}

PendingIndicator.defaultProps = {
	isFirst: true
}


