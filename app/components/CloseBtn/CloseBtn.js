import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './CloseBtnStyle';
import { Feather } from '@expo/vector-icons';

export default class CloseBtn extends PureComponent {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={(this.props.dark ? styles.darkBtnColor : styles.mainBtnColor)} 
                activeOpacity={0.6} 
            >
                <Feather name='x' style={(this.props.dark ? styles.darkStyle : styles.mainStyle)}/>
            </TouchableOpacity>
        );
    }
}

CloseBtn.propTypes = {
    dark: PropTypes.bool,
    onPress: PropTypes.func
}

CloseBtn.defaultProps = {
    dark: false,
    onPress: ()=>{}
}
