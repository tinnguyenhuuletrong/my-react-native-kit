//@flow

import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

const defaultStyles = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
};

export interface Props {}
export default class LoadingIndicator extends React.PureComponent<Props> {
    constructor(props) {
        super(props)
    }

    render() {
        return <View style={defaultStyles}>
            <ActivityIndicator size='large' color="#ffffff"/>
        </View>
    }
}