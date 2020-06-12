import React, { Component } from 'react';
import {
	View,
	FlatList,
	RefreshControl,
	TouchableOpacity,
	Platform,
	StatusBar,
	SafeAreaView
} from 'react-native';

import SubtitleText from 'saeko-native/app/components/SubtitleText';
import HeaderNavbar from 'saeko-native/app/components/HeaderNavbar';
import moment from 'moment';
import styles from './PostsFeedScreenStyle';
import Local from 'saeko-native/app/services/Local';
import GetUserContainer from 'saeko-native/app/containers/GetUserContainer';
import FeedListContainer from 'saeko-native/app/containers/FeedListContainer';
import PostCard from 'saeko-native/app/components/PostCard';
import EmptyState from 'saeko-native/app/components/EmptyState';
import ErrorState from 'saeko-native/app/components/ErrorState';
import ShimmerPostCard from 'saeko-native/app/components/ShimmerPostCard';
import Shimmer from 'saeko-native/app/components/Shimmer';
import LogoSaekoSVG from 'saeko-native/app/components/LogoSaekoSVG';
import PostFeedHeaderSvg from 'saeko-native/app/components/PostFeedHeaderSvg';

import { Metrics } from 'saeko-native/app/styles';

export default class PostsFeedScreen extends Component {

	state = {
		isReloading: false
	}

	renderItem = ({ item }) => (
		<PostCard
			onPress={() => this.props.navigation.navigate('PostDetailScreen', { item })}
			title={item.actor.first_name}
			date={moment(item.time).fromNow()}
			avatar={item.actor.avatar}
			fileList={item.activity_object.attachments}
			text={item.activity_object.message}
		/>
	)

	render() {
		return (
			<React.Fragment>
				<View style={styles.container}>
					<View style={[styles.mainTitle, styles.main, styles.container]}>
						<FeedListContainer>
							{(data, loadData, reloadData) => (
								<FlatList
									data={data.allIds.map(id => data.byId[id])}
									contentInset={{ top: this.state.isReloading ? Metrics.screenWidth * 0.4 : 0 }}
									keyExtractor={(FeedActivities) => String(FeedActivities.id)}
									renderItem={this.renderItem}
									ListEmptyComponent={() => {
										if (data.isLoading) return [1, 2, 3, 4, 5, 6, 7].map((x) =>
											<React.Fragment key={x}>
												<ShimmerPostCard />
											</React.Fragment>);
										return (data.error !== '') ? (<ErrorState addMarginTop={true} />) : (<EmptyState addMarginTop={true} />);
									}}
									ListHeaderComponent={<View style={{ marginTop: '45%' }} />}
									refreshControl={
										<RefreshControl
											refreshing={false}
											onRefresh={async () => {
												this.setState({ isReloading: true });
												await reloadData();
												this.setState({ isReloading: false });
											}}
											progressViewOffset={Metrics.screenWidth * 0.4}
										/>
									}
									onEndReached={() => loadData()}
								/>
							)}
						</FeedListContainer>
					</View>
				</View>
				<PostFeedHeaderSvg />
				<SafeAreaView style={[styles.justifyContentSpaceEvenly, styles.alignItemsCenter, styles.headerLogo]}>
					<LogoSaekoSVG size='104' width='50' height='50' />
					<View style={[styles.fullWidth, styles.row, styles.justifyContentFlexStart, styles.baseLeftMargin]}>
						<GetUserContainer>
							{(userData) => (
								<SubtitleText
									text={`${Local.get('homeScreen.welcome')} ${userData.first_name}!`}
									weight='medium'
									color='darkest'
								/>
							)}
						</GetUserContainer>

					</View>
				</SafeAreaView>
			</React.Fragment>
		);
	}
}

