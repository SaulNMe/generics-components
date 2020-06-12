import React, { 
	useState,
	useRef, 
	useEffect 
} from 'react';
import { 
	Text,
	View,
	TouchableOpacity,
	SafeAreaView
} from 'react-native';
import styles from './AdminBottomBarStyle';
import Local from 'saeko-native/app/services/Local';
import BottomBarIcons from 'saeko-native/app/components/BottomBarIcons';

export default function AdminBottomBar (props) {
		
	const [routeName, setRouteName] = useState('');
	const nav = useRef(props.navigation);

	useEffect(() => { 
		setRouteName(props.navigation.state.routes[props.navigation.state.index].routeName);
	}, [props.navigation.state]);
	
	return (
		<SafeAreaView>	
			<View style={[styles.container, styles.row, styles.justifyContentSpaceEvenly]}>
				<BottomBarIcons
					onPress={() => nav.current.navigate('PostsFeedScreen')}	
					routeName='PostsFeedScreen'
					isActualScreen={routeName === 'PostsFeedScreen'}
					name={Local.get('bottomBar.home')}
					iconName='home'
					color='main'
				/>
				<BottomBarIcons
					onPress={() => nav.current.navigate('ProfileScreen')}	
					routeName='ProfileScreen'
					isActualScreen={routeName === 'ProfileScreen'}
					name={Local.get('bottomBar.profile')}
					iconName='user'
					color='purple'
				/>
			</View>
		</SafeAreaView>
	);
}