import React, { useState } from 'react';
import {
	View,
	SectionList,
	Text,
	RefreshControl,
	TouchableOpacity,
	Platform
} from 'react-native';

import SegmentedControlTab from 'saeko-native/app/components/SegmentedControlTab';
import HugeText from 'saeko-native/app/components/HugeText';
import SubtitleText from 'saeko-native/app/components/SubtitleText';
import ReportItem from 'saeko-native/app/components/ReportItem';
import Shimmer from 'saeko-native/app/components/Shimmer';
import ShimmerPortfolioItem from 'saeko-native/app/components/ShimmerPortfolioItem';
import ShimmerPostCard from 'saeko-native/app/components/ShimmerPostCard';
import Divider from 'saeko-native/app/components/Divider';
import EmptyState from 'saeko-native/app/components/EmptyState';
import ErrorState from 'saeko-native/app/components/ErrorState';
import DocumentsHeaderSvg from 'saeko-native/app/components/DocumentsHeaderSvg';
import TitleText from 'saeko-native/app/components/TitleText';
import FilterHeader from 'saeko-native/app/components/FilterHeader';

import PortfolioListContainer from 'saeko-native/app/containers/PortfolioListContainer';
import useCurrentUser from 'saeko-native/app/hooks/useCurrentUser';
import moment from 'moment';
import Local from 'saeko-native/app/services/Local';
import { Linking } from 'react-native';
import { Metrics } from 'saeko-native/app/styles';
import styles from './PortfolioScreenStyle';
import { Colors } from 'saeko-native/app/styles';
import GaService from 'saeko-native/app/services/GaService';

export default function PortfolioScreen(props) {
	const [userData] = useCurrentUser();
	let [showFilters, setShowFilters] = useState(false);
	let bg = { backgroundColor: Colors.light }
	let shimmerColors = ['#F0F0F0', '#DEDEDE', '#EDEDED']

	return (
		<React.Fragment>
			<PortfolioListContainer>
				{(data, loadData, reloadData) => (
					<SectionList
						extraData={data.filters}
						renderItem={({ item, index, section }) => (
							<ReportItem
								date={`${moment(item.begins_at).format('MMMM')} - ${moment(item.ends_at).format('MMMM')} ${moment(item.ends_at).format('Y')}`}
								name={item.first_name}
								description={Local.get('reportItem.open')}
								onPress={() => {
									Linking.openURL(item.file_url);
									GaService.portfoliosEvent('link-to:drive')
								}}
								index={index}
							/>
						)}
						renderSectionHeader={({ section: { title } }) => (
							<View style={[styles.baseVerticalMargin, styles.baseHorizontalMargin]}>
								<SubtitleText
									color='darkest'
									weight='bold'
									text={title}
								/>
							</View>
						)}
						ListHeaderComponent={<View style={{ marginTop: !showFilters ? Metrics.screenWidth * 0.352 : Metrics.screenWidth * 0.576 }} />}
						ItemSeparatorComponent={() => <Divider addVerticalMargin />}
						stickySectionHeadersEnabled={false}
						sections={data.section}
						keyExtractor={(item) => String(item.id)}
						ListEmptyComponent={() => {
							if (data.isLoading) return (
								<React.Fragment>
									<View style={[styles.baseVerticalMargin, styles.baseHorizontalMargin]}>
										<Shimmer
											duration={1000}
											autoRun={true}
											style={[{ height: 18 }, { width: '60%' }]}
											colorShimmer={shimmerColors}
										/>
									</View>
									<ShimmerPortfolioItem
										title={Local.get('portfolioScreen.currentTerm')}
									/>
									<ShimmerPortfolioItem
										title={Local.get('portfolioScreen.pastTerm')}
									/>
									<ShimmerPortfolioItem
										title={Local.get('portfolioScreen.currentTerm')}
									/>
									<ShimmerPortfolioItem
										title={Local.get('portfolioScreen.pastTerm')}
									/>
								</React.Fragment>
							)
							if (data.error.length > 0) return (<EmptyState />);
							if (!data.isLoading) return (<EmptyState />);
							return null
						}}
						refreshControl={
							<RefreshControl
								refreshing={data.isLoading}
								onRefresh={() => reloadData()}
							/>
						}
					/>
				)}
			</PortfolioListContainer>
			{
				showFilters ? (
					<FilterHeader onPress={() => setShowFilters(false)} />
				) : (
						<React.Fragment>
							<View style={{ position: 'absolute', top: -5, right: -5, left: -5 }}>
								<DocumentsHeaderSvg
									type={userData.type}
									onSelect={() => props.navigation.navigate('ReportCardsScreen')}
									onPress={() => setShowFilters(true)}
								/>
							</View>
							<View style={styles.headerTitle}>
								<TitleText
									text={Local.get('portfolioScreen.title')}
									color='white'
								/>
							</View>
						</React.Fragment>
					)
			}
		</React.Fragment>
	);
}
