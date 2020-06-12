import React, { Component } from 'react';
import { 
	View 
} from 'react-native';
import { Colors } from 'saeko-native/app/styles';
import styles from './HeaderDocumentsTabNavigatorStyle';
import SegmentedControlTab from 'saeko-native/app/components/SegmentedControlTab';
import HugeText from 'saeko-native/app/components/HugeText';
import HeaderNavbar from 'saeko-native/app/components/HeaderNavbar';
import Local from 'saeko-native/app/services/Local';

export default class HeaderDocumentsTabNavigator extends Component {
  render() {
	let routeName = this.props.navigation.state.routes[this.props.navigation.state.index].routeName;
    return (
		<React.Fragment>
			<HeaderNavbar
				statusBar='light-content'
				left={
					<HugeText 
						text={Local.get('documentsTabNavigator.report')}
						color='darkest'
						weight='medium'
					/>
				}
			/>
			<View style={styles.smallBottomPadding}>
				<SegmentedControlTab 
					leftText={Local.get('documentsTabNavigator.reportCards')}
					leftName={'ReportCardsScreen'}
					rightText={Local.get('documentsTabNavigator.portfolios')}
					rightName={'PortfolioScreen'}
					rightAction={() =>{ 
						this.props.navigation.navigate('PortfolioScreen');
					}}
					leftAction={() => {
						this.props.navigation.navigate('ReportCardsScreen');
					}}
					current={routeName}
				/>
			</View>
		</React.Fragment>
    );
  }
}