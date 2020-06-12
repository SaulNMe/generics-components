import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import {
	View,
	RefreshControl,
	SectionList,
	TouchableOpacity,
	Platform
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import SubtitleText from 'saeko-native/app/components/SubtitleText';
import ReportItem from 'saeko-native/app/components/ReportItem';
import Shimmer from 'saeko-native/app/components/Shimmer';
import ShimmerReportItem from 'saeko-native/app/components/ShimmerReportItem';
import Divider from 'saeko-native/app/components/Divider';
import EmptyState from 'saeko-native/app/components/EmptyState';
import ErrorState from 'saeko-native/app/components/ErrorState';
import DocumentsHeaderSvg from 'saeko-native/app/components/DocumentsHeaderSvg';
import TitleText from 'saeko-native/app/components/TitleText';
import FilterHeader from 'saeko-native/app/components/FilterHeader';

import Local from 'saeko-native/app/services/Local';
import ReportCardsContainer from 'saeko-native/app/containers/ReportCardsContainer';
import ApiService from 'saeko-native/app/services/ApiService';
import useCurrentUser from 'saeko-native/app/hooks/useCurrentUser';
import moment from 'moment';
import GaService from 'saeko-native/app/services/GaService';

import { Metrics } from 'saeko-native/app/styles';
import styles from './ReportCardsScreenStyle';
import * as FileSystem from 'expo-file-system';
import { Colors } from 'saeko-native/app/styles';

export default function ReportCardsScreen(props) {
	const [userData] = useCurrentUser();
	let [showFilters, setShowFilters] = useState(false);
	let bg = { backgroundColor: Colors.light }
	let shimmerColors = ['#F0F0F0', '#DEDEDE', '#EDEDED']

	async function downloadDoc(item) {
		await WebBrowser.openBrowserAsync(item.pdf_url);
		GaService.reportsEvent('download:report-card');
	}

	return (
		<React.Fragment>
			<ReportCardsContainer>
				{(params) => {
					return (
						<SectionList
							extraData={params.filters}
							renderItem={({ item, index, section }) => {
								return (
									<ReportItem
										date={`${moment(item.start_at).format('MMMM')} - ${moment(item.end_at).format('MMMM')} ${moment(item.ends_at).format('Y')}`}
										name={item.enrollment.first_name}
										description={Local.get('reportItem.download')}
										avatar={item.enrollment.avatar}
										onPress={() => downloadDoc(item)}
										index={index}
										moveImgRight
									/>
								)
							}
							}
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
							sections={params.isLoading ? [] : params.section}
							keyExtractor={(item) => String(item.id)}
							stickySectionHeadersEnabled={false}
							ListEmptyComponent={() => {
								if (params.isLoading) return (
									<React.Fragment>
										<View style={[styles.baseVerticalMargin, styles.baseHorizontalMargin]}>
											<Shimmer
												duration={1000}
												autoRun={true}
												style={[{ height: 18 }, { width: '60%' }]}
												colorShimmer={shimmerColors}
											/>
										</View>
										<ShimmerReportItem
											title={Local.get('reportCardsScreen.currentReport')}
										/>
										<ShimmerReportItem
											title={Local.get('reportCardsScreen.pastReport')}
										/>
										<ShimmerReportItem
											title={Local.get('reportCardsScreen.currentReport')}
										/>
										<ShimmerReportItem
											title={Local.get('reportCardsScreen.pastReport')}
										/>
									</React.Fragment>
								)
								if (!params.isLoading) return (<EmptyState />);
								return null;
							}}
							refreshControl={
								<RefreshControl
									refreshing={false}
									onRefresh={() => params.loadData()}
								/>
							}
						/>
					);
				}}
			</ReportCardsContainer>
			{
				showFilters ? (
					<FilterHeader onPress={() => setShowFilters(false)} screen='reports' />
				) : (
						<React.Fragment>
							<View style={{ position: 'absolute', top: -5, right: -5, left: -5 }}>
								<DocumentsHeaderSvg
									screen='reports'
									onSelect={() => props.navigation.navigate('PortfolioScreen')}
									onPress={() => setShowFilters(true)}
									type={userData.type}
								/>
							</View>
							<View style={styles.headerTitle}>
								<TitleText
									text={Local.get('reportCardsScreen.title')}
									color='white'
								/>
							</View>
						</React.Fragment>
					)
			}
		</React.Fragment>
	);
}