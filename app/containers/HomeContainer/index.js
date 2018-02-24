//@flow

import React from 'react';
import { Platform, View, Text } from 'react-native';
import { connect } from "react-redux";

import mockData from './_mockData'
import styles from './styles'


export interface Props { }
class HomeContainer extends React.Component<Props> {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Home Container
                </Text>
            </View>
        );
    }
};

const bindAction = dispatch => ({})
const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(HomeContainer);
