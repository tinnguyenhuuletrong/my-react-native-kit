//@flow

import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

const defaultStyles = {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
};

export interface Props {
    children?: any,
    style?: Object
}
export default class CustomButton extends React.PureComponent<Props> {
    constructor(props : Props) {
        super(props)
    }

    render() {
        const { style, ...others } = this.props
        
        return <TouchableOpacity
            style={[defaultStyles, style]}
            {...others}
        >
            {this.props.children}
        </TouchableOpacity>
    }
}

CustomButton.propTypes = {
    children: PropTypes.element.isRequired
};