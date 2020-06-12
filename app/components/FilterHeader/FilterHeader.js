import React, { 
	useEffect, 
	useState 
} from 'react';
import {
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Image
} from 'react-native';
import FiltersHeaderSvg from 'saeko-native/app/components/FiltersHeaderSvg';
import TitleText from 'saeko-native/app/components/TitleText';
import BodyText from 'saeko-native/app/components/BodyText';
import LabelText from 'saeko-native/app/components/LabelText';
import TinyText from 'saeko-native/app/components/TinyText';
import CircleBtn from 'saeko-native/app/components/CircleBtn';

import StudentContainer from 'saeko-native/app/containers/StudentContainer';
import { setReportsUnselected, setPortfolioUnselected } from 'saeko-native/app/actions/DocumentsFiltersActions';
import Selectors from 'saeko-native/app/Selectors';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import styles from './FilterHeaderStyle';
import Local from 'saeko-native/app/services/Local';

export default function FilterHeader (props) {
	const dispatch = useDispatch();
	let reportsFilter = useSelector(Selectors.selectReportsUnselected);
	let portfolioFilter = useSelector(Selectors.selectPortfolioUnselected);
	let [unselected, setUnselected] = useState([]);
	let filter = props.screen === 'reports' ? reportsFilter : portfolioFilter;
	useEffect(() => {
		setUnselected(filter)
	}, [reportsFilter, portfolioFilter])

	const renderItem = ({ item }) => {
		let avatar = item.avatar ? { uri: item.avatar } : require('saeko-native/assets/default_avatar.jpg')
		let active = unselected.indexOf(item.id) === -1;
		return (
			<TouchableOpacity
				style={styles.alignItemsCenter}
				onPress={() => onSelect(item.id)}
			>
				<Image
					resizeMode= 'cover'
					style={[styles.childImg, active ? styles.active : styles.unselected ]}
					source={avatar}
				/>
				<TinyText text={item.first_name.split(' ')[0]} color='white'/>
				{
					active && <View style={styles.indicator}/>
				}
			</TouchableOpacity>
		)
	}

	function onSelect(id) {
		if(props.screen === 'reports') {
			dispatch(setReportsUnselected(id))
		} else {
			dispatch(setPortfolioUnselected(id))
		}
	}

	return (
		<React.Fragment>
			<View style={styles.headerBg}>
				<FiltersHeaderSvg />
			</View>
			<View style={styles.filtersContainer}>
				<View style={[styles.row, styles.justifyContentSpaceBetween, styles.alignItemsCenter]}>
					<TitleText
						text={Local.get('filtersHeader.title')}
						color='white'
					/>
					<View style={[styles.antiRow, styles.alignItemsCenter]}>
						<CircleBtn
							size='Tiny'
							color='white'
							iconName={'x'}
							bgColor='white80'
							onPress={() => props.onPress()}
						/>
					</View>
				</View>
				<StudentContainer
					screen={props.screen}
				>
					{(students, error, isLoading) => {
						return (
							<React.Fragment>
								<BodyText
									text={`${students.length - unselected.length}/${students.length} ${Local.get('filtersHeader.children')}`}
									color='white'
								/>
								<FlatList
									style={styles.list}
									horizontal
									data={students}
									keyExtractor={(item) => `${item.id}-${item.first_name}`}
									renderItem={renderItem}
									ItemSeparatorComponent={() => (
										<View style={styles.smallRightMargin}/>
									)}
									showsHorizontalScrollIndicator={false}
								/>
							</React.Fragment>
						)
				}}
				</StudentContainer>
			</View>
		</React.Fragment>
	);
}


FilterHeader.propTypes = {
	// data: PropTypes.array
}

FilterHeader.defaultProps = {
	// data: []
}







