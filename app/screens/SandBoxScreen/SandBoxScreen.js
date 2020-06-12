import React, {
	// useEffect, 
	// useState 
} from 'react';
import { Text, View } from 'react-native';
import ShimmerPostCard from 'saeko-native/app/components/ShimmerPostCard';

import styles from './SandBoxScreenStyle';

export default function SandBoxScreen(props) {
	return (
		<View style={styles.container}>
			<ShimmerPostCard />
		</View>
	);
}




