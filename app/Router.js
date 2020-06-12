import React, { Component } from 'react';
import { createSwitchNavigator, createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator, TabBarBottom, BottomTabBar, MaterialTopTabBar } from 'react-navigation-tabs';
import AuthLoadingScreen from 'saeko-native/app/screens/AuthLoadingScreen';
import LoginScreen from 'saeko-native/app/screens/LoginScreen';
import ReportCardsScreen from 'saeko-native/app/screens/ReportCardsScreen';
import PortfolioScreen from 'saeko-native/app/screens/PortfolioScreen';
import PostsFeedScreen from 'saeko-native/app/screens/PostsFeedScreen';
import PostDetailScreen from 'saeko-native/app/screens/PostDetailScreen';
import ScheduleScreen from 'saeko-native/app/screens/ScheduleScreen';
import ProfileScreen from 'saeko-native/app/screens/ProfileScreen';
import RelativeProfileScreen from 'saeko-native/app/screens/RelativeProfileScreen';
import SelectModeScreen from 'saeko-native/app/screens/SelectModeScreen';
import GhostScreen from 'saeko-native/app/screens/GhostScreen';
import SelectDateScreen from 'saeko-native/app/screens/SelectDateScreen';
import SelectDateRangeScreen from 'saeko-native/app/screens/SelectDateRangeScreen';
import SelectReasonScreen from 'saeko-native/app/screens/SelectReasonScreen';
import SelectChildrenScreen from 'saeko-native/app/screens/SelectChildrenScreen';
import SelectLanguageScreen from 'saeko-native/app/screens/SelectLanguageScreen';
import PersonalDetailsScreen from 'saeko-native/app/screens/PersonalDetailsScreen';
import CarouselImageScreen from 'saeko-native/app/screens/CarouselImageScreen';
import ProfessorScreen from 'saeko-native/app/screens/ProfessorScreen';
import SelectChildrenListScreen from 'saeko-native/app/screens/SelectChildrenListScreen';
import TimetableScreen from 'saeko-native/app/screens/TimetableScreen';
import ProfessorAbsenceDataScreen from 'saeko-native/app/screens/ProfessorAbsenceDataScreen';
import SelectReasonProfessorScreen from 'saeko-native/app/screens/SelectReasonProfessorScreen';
import PendingRollCallScreen from 'saeko-native/app/screens/PendingRollCallScreen';
import TransitionConfiguration from 'saeko-native/app/utils/TransitionConfiguration';
import { Feather } from '@expo/vector-icons';
import { ApplicationStyles } from 'saeko-native/app/styles';
// import HeaderDocumentsTabNavigator from 'saeko-native/app/components/HeaderDocumentsTabNavigator';
import BottomBar from 'saeko-native/app/components/BottomBar';
import ProfessorBottomBar from 'saeko-native/app/components/ProfessorBottomBar';
import AdminBottomBar from 'saeko-native/app/components/AdminBottomBar';
import { View } from 'react-native';
import Local from 'saeko-native/app/services/Local';
import StatusBarAndroid from 'saeko-native/app/components/StatusBarAndroid';
import { Platform } from 'react-native';

const ProfileStack = createStackNavigator({
	ProfileScreen
});

const RelativeProfileStack = createStackNavigator({
	RelativeProfileScreen
});

const DocumentsTabNavigator = createMaterialTopTabNavigator({
	ReportCardsScreen,
	GhostScreen,
	PortfolioScreen
},{
  swipeEnabled: false,
  animationEnabled: false,
  tabBarComponent: null
});


const AdminBottomBarTabNavigator = createBottomTabNavigator({
	PostsFeedScreen,
	ProfileScreen: {
		screen: ProfileStack,
	},
}, {
	tabBarComponent: AdminBottomBar
});

const AdminStack = createStackNavigator({
	AdminBottomBarTabNavigator,
	PostDetailScreen
},{
	headerMode: 'none'
});

const RelativeBottomTabNavigator = createBottomTabNavigator({
	PostsFeedScreen,
	DocumentsTabNavigator,
	ScheduleScreen,
	ProfileScreen: {
		screen: RelativeProfileStack,
	},
}, {
	tabBarComponent: BottomBar
});

const StudentBottomTabNavigator = createBottomTabNavigator({
	PostsFeedScreen,
	DocumentsTabNavigator,
	ScheduleScreen,
	ProfileScreen: {
		screen: ProfileStack,
	},
}, {
	tabBarComponent: BottomBar
});

const RelativeReasonStackModal = createStackNavigator({
		// SelectModeScreen,
		SelectDateScreen,
		// SelectDateRangeScreen,
		SelectReasonScreen,
		// SelectChildrenScreen
}, {
	headerMode: 'none',
	transitionConfig: TransitionConfiguration
});



const StudentStack = createStackNavigator({
	StudentBottomTabNavigator,
	PostDetailScreen
},{
	headerMode: 'none'
});

const RelativeStack = createStackNavigator({
	RelativeBottomTabNavigator,
	PostDetailScreen
},{
	headerMode: 'none'
});

const RelativeStackModal = createStackNavigator({
	Main: {
		screen: RelativeStack
	},
	SelectLanguageModal: {
		screen: SelectLanguageScreen
	},
	PersonalDetailsModal: {
		screen: PersonalDetailsScreen
	},
	RelativeReasonStack: {
		screen:  RelativeReasonStackModal
	},
	CarouselImageModal: {
		screen: CarouselImageScreen
	},
	SelectReasonScreen: {
		screen: SelectReasonScreen,
	}
}, {
	mode: 'modal',
	headerMode: 'none',
});


const ProfessorScheduleStack = createStackNavigator({
	TimetableScreen,
	PendingRollCallScreen,
}, {
	mode: 'modal',
	headerMode: 'none'
});

const ProfessorBottomTabNavigator = createBottomTabNavigator({
	PostsFeedScreen,
	ProfessorScheduleStack,
	ProfileScreen: {
		screen: ProfileStack,
	},
}, {
	initialRouteName: 'PostsFeedScreen',
	tabBarComponent: ProfessorBottomBar
});

const ProfessorStackStackModal = createStackNavigator({
	ProfessorAbsenceDataScreen,
	SelectChildrenListScreen,
	SelectReasonProfessorScreen
}, {
	headerMode: 'none',
	transitionConfig: TransitionConfiguration
});

const ProfessorStack = createStackNavigator({
	ProfessorBottomTabNavigator,
	PostDetailScreen
},{
	headerMode: 'none'
});

const ProfessorStackModal = createStackNavigator({
	Main: {
		screen: ProfessorStack
	},
	SelectLanguageModal: {
		screen: SelectLanguageScreen
	},
	PersonalDetailsModal: {
		screen: PersonalDetailsScreen
	},
	CarouselImageModal: {
		screen: CarouselImageScreen
	},
	ProfessorStackStackModal: {
		screen: ProfessorStackStackModal
	},
}, {
	mode: 'modal',
	headerMode: 'none',
});

const AdminStackModal = createStackNavigator({
	Main: {
		screen: AdminStack
	},
	SelectLanguageModal: {
		screen: SelectLanguageScreen
	},
	CarouselImageModal: {
		screen: CarouselImageScreen
	}
}, {
	mode: 'modal',
	headerMode: 'none'
});

const StudentStackModal = createStackNavigator({
	Main: {
		screen: StudentStack
	},
	SelectLanguageModal: {
		screen: SelectLanguageScreen
	},
	CarouselImageModal: {
		screen: CarouselImageScreen
	}
}, {
	mode: 'modal',
	headerMode: 'none'
});

const MainNavigationStack = createSwitchNavigator({
	AuthLoading: AuthLoadingScreen, 
	relative: RelativeStackModal,
	professor: ProfessorStackModal,
	student: StudentStackModal,
	admin: AdminStackModal,
	Auth: LoginScreen
},{
	initialRouteName: 'AuthLoading',
});

const MainNavigation = createStackNavigator({ 
	MainNavigationStack:{
		screen: MainNavigationStack,
		navigationOptions: {
			header: (props) => Platform.OS !== 'ios' ? <StatusBarAndroid {...props}/>:null
		}
	}
});
export default createAppContainer(MainNavigation);
