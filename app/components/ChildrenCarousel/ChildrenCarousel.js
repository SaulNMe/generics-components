import React, { PureComponent } from 'react';
import {
	View,
	Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './ChildrenCarouselStyle';
import Carousel from 'react-native-banner-carousel';
import CircleImg from 'saeko-native/app/components/CircleImg';
import { Metrics } from 'saeko-native/app/styles';
import TinyText from 'saeko-native/app/components/TinyText';
import EmptyState from 'saeko-native/app/components/EmptyState';
import ErrorState from 'saeko-native/app/components/ErrorState';

const BannerWidth = Dimensions.get('window').width;

export default class ChildrenCarousel extends PureComponent {


	onlyOneName(name){
		let spacePosition = name.indexOf(' ');
        if (spacePosition === -1)
            return name;
        else
            return name.substr(0, spacePosition);
	}

	renderPage = (item, index) => {
		return (
			<View style={styles.childrensGroup} key={index + item.length}>
				{item.map((children) =>
					<View style={[styles.baseHorizontalMargin, styles.childrenContainer, styles.smallestVerticalMargin]} key={children.id}>
						{
							children.avatar === '-'? (
								<React.Fragment />
							):(
								<CircleImg
									isLoading={this.props.isLoading}
									image={children.avatar}
									size='Huge'
								/>
							)
						}
						<View style={styles.smallTopMargin}>
							<TinyText
								color='dark'
								weight='bold'
								text={this.onlyOneName(children.first_name)}
							/>
						</View>
					</View>
				)}
			</View>
		);
	}

	render() {
		let div = Math.ceil(Dimensions.get('window').width/(Metrics.circleIcons.huge*2));
		let groups = [];
		let id = 0;
		let children = [...new Set(this.props.children)];
		
		if(this.props.children.length === 0) {
			children.push({
				id: '1',
				avatar: '-',
				first_name: '' 
			});
		} 

		for (let i = 0; i < (children.length / div); i++) {
			let group = [];
			for(let j = 0; j < div; j++){
				group.push((typeof children[id] === 'undefined')? {
					id: id + 2,
					avatar: '-',
					first_name: '' } :children[id]);
				id++;
			}
			groups.push(group);
		}

		groups = groups.reverse();
		
		if(!this.props.isLoading && this.props.children.length === 0) return (<EmptyState />);
		else if(this.props.error) return (<ErrorState />);
		else return (
			<Carousel
				pageSize={BannerWidth}
				loop
				showsPageIndicator={false}
			>
					{groups.map((item, index) => this.renderPage(item, index))}
			</Carousel>
		);
	}
}

ChildrenCarousel.propTypes = {
	children: PropTypes.array,
	isLoading: PropTypes.bool
}

ChildrenCarousel.defaultProps = {
	children: [],
	isLoading: false
}
