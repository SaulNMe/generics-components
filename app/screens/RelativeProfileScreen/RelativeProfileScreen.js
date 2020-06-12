import React, { useState } from 'react';
import {
	View,
	ScrollView,
	TouchableOpacity,
	Image,
	Platform,
	Alert
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import ProfileHeaderRightSvg from 'saeko-native/app/components/ProfileHeaderRightSvg';
import HugeText from 'saeko-native/app/components/HugeText';
import SquareBtn from 'saeko-native/app/components/SquareBtn';
import ProfileInfo from 'saeko-native/app/components/ProfileInfo';
import BodyText from 'saeko-native/app/components/BodyText';
import Shimmer from 'saeko-native/app/components/Shimmer';
import StatusBarAndroid from 'saeko-native/app/components/StatusBarAndroid';

import StudentContainer from 'saeko-native/app/containers/StudentContainer';
import BtnLogOutContainer from 'saeko-native/app/containers/BtnLogOutContainer';
import StatusAbsencesContainer from 'saeko-native/app/containers/StatusAbsencesContainer';

import GaService from 'saeko-native/app/services/GaService';
import Local from 'saeko-native/app/services/Local';

import { useSelector } from 'react-redux';
import Selectors from 'saeko-native/app/Selectors';
import useCurrentUser from 'saeko-native/app/hooks/useCurrentUser';

import styles from './RelativeProfileScreenStyle';
import { Metrics } from 'saeko-native/app/styles';

export default function RelativeProfileScreen(props) {
	const isLoadingStudents = useSelector(Selectors.selectIsLoadingStudents);
	const [userData, userLoader] = useCurrentUser();
	const [indexChildren, setIndexChildren] = useState(0);
	const shimmerColors = ['#F0F0F0', '#DEDEDE', '#EDEDED'];

	const simpleShimer = (style) => (
		<Shimmer
			duration={1000}
			autoRun={true}
			style={[styles.simpleShimer, { ...style }]}
			colorShimmer={shimmerColors}
		/>
	);

	const nextChildren = (steps, students) => {
		setIndexChildren((indexChildren + steps) % students);
		GaService.profileEvent('next children:carousel');
	}

	function logout(resetStore) {
		Alert.alert(
			Local.get('profileScreen.logout'),
			Local.get('profileScreen.logoutText'),
			[
				{
					text: Local.get('profileScreen.cancelBtn'),
					style: 'cancel'
				},
				{
					text: Local.get('profileScreen.confirmBtn'),
					onPress: () => {
						GaService.profileEvent('logout');
						resetStore();
						props.navigation.navigate('AuthLoading');
					}
				}
			]
		)
	}

	return (
		<React.Fragment>
			<Image
				resizeMode="cover"
				style={styles.leftHeader}
				source={require('saeko-native/assets/verde.png')}
			/>

			<View style={[styles.row, styles.justifyContentSpaceBetween]}>
				<View style={[styles.baseMargin, styles.baseVerticalMargin, styles.logoutBtnContainer]}>
					<BtnLogOutContainer>
						{(resetStore) => (
							<TouchableOpacity
								activeOpacity={0.8}
								style={[styles.baseTopMargin, styles.baseHorizontalMargin, styles.logOut]}
								onPress={() => logout(resetStore)}
							>
								<Feather size={30} name="power" color="#fff" />
							</TouchableOpacity>
						)}
					</BtnLogOutContainer>
				</View>
				<ProfileHeaderRightSvg
					nextChildren={nextChildren}
					indexChildren={indexChildren}
					type={userData.type}
					avatar={userData.avatar ? userData.avatar : ''}
					isLoading={isLoadingStudents}
				/>
			</View>

			<View style={[styles.baseHorizontalMargin, styles.mainContainer]}>
				<ScrollView style={styles.fullWidth} alwaysBounceVertical={false}>
					<View style={{ height: 180 }} />

					<StudentContainer>
						{(students, error, isLoading) => {
							let first_name = students[indexChildren] ? students[indexChildren].first_name.split(' ')[0] : '';
							let surname = students[indexChildren] ? students[indexChildren].surname : '';

							return isLoadingStudents && error ? (<React.Fragment />) : (
								<View>
									<View style={{ width: Metrics.screenWidth - 200 }}>
										{isLoadingStudents ? (simpleShimer()) : (
											<HugeText
												text={first_name}
												weight="medium"
												color="nav"
											/>
										)}
										{isLoadingStudents && (<View style={styles.diverIsLoading} />)}
										{isLoadingStudents ? (simpleShimer()) : (
											<HugeText
												text={surname}
												weight="medium"
												color="nav"
												style={{ lineHeight: 40 }}
											/>
										)}
									</View>
									{isLoadingStudents && (<View style={styles.diverIsLoading} />)}
									<React.Fragment>
										{isLoadingStudents && (<View style={styles.diverIsLoading} />)}
										<StatusAbsencesContainer 
											student={students[indexChildren]} 
											style={[styles.row]} 
											isLoading={isLoadingStudents}
											userData={userData}
											userLoader={userLoader}
										/> 
										<React.Fragment>
											<View
												style={[styles.bigTopMargin, styles.baseBottomMargin]}
											>
												<BodyText
													weight="medium"
													color="darker"
													text={Local.get('profile.aboutYou')}
												/>
											</View>
											<ProfileInfo
												userName={`${userData.first_name} ${userData.surname}`}
												description={students.length > 0 ? `${students.length} ${Local.get('profile.children')}` : userData.email}
												isRelative

											/>
										</React.Fragment>
									</React.Fragment>
								</View>
							);
						}}
					</StudentContainer>
					<React.Fragment>
						<View style={[styles.bigTopMargin, styles.baseBottomMargin]}>
							<BodyText
								weight="medium"
								color="darker"
								text={Local.get('profileScreen.settings')}
							/>
						</View>
						<SquareBtn
							icon="globe"
							text={`  ${Local.get('profileScreen.language')}  `}
							color="purple"
							onPress={() => props.navigation.navigate('SelectLanguageModal')}
						/>
					</React.Fragment>
				</ScrollView>
			</View>
		</React.Fragment>
	);
}

RelativeProfileScreen.navigationOptions = {
	header: Platform.OS !== 'ios' ? <StatusBarAndroid /> : null
};