//@flow

import React from 'react';
import { Platform, View, Text, Image, Dimensions } from 'react-native';
import { connect } from "react-redux";

import mockData from './_mockData'
import styles from './styles'

const instructions = Platform.select({
    ios: mockData.ios,
    android: mockData.android
});

export interface Props { }
class SettingContainer extends React.Component<Props> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Avatar:
                </Text> 
            </View>
        );
    }
};

const bindAction = dispatch => ({})
const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(SettingContainer);
