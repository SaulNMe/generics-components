import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './IconDoubleTextStyle';

import TinyText from 'saeko-native/app/components/TinyText';
import CircleImg from 'saeko-native/app/components/CircleImg';
import BodyText from 'saeko-native/app/components/BodyText';

import moment from 'moment';

export default class IconDoubleText extends PureComponent{
	render(){
		return (
			<View style={[styles.row, styles.baseHorizontalMargin, styles.alignItemsCenter]}>
				{!!this.props.icon &&
					<View style={styles.smallRightMargin}>
						<CircleImg
				          	image={this.props.icon}
				          	size='Base'
				    	/> 
			    	</View>
				}
	            <View>
					<BodyText
						text={this.props.title}
						color={this.props.titleColor}
						weight='regular'
					/>
					<TinyText
						text={this.props.subtitle}
						color={this.props.subtitleColor}
						weight='light'
					/>
	            </View>
    		</View>
		);
	}
}

IconDoubleText.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	icon: PropTypes.string,
	titleColor: PropTypes.string,
	subtitleColor: PropTypes.string
}
IconDoubleText.defaultProps = {
	title: '',
	subtitle: '',
	icon: '',
	titleColor: 'darkest',
	subtitleColor: 'darkest'
}