//@flow

import React from 'react';
import { Platform, View, Text } from 'react-native';
import { connect } from "react-redux";

import PhotoLightBox from '../../components/PhotoLightBox';
import mockData from './_mockData'
import styles from './styles'


export interface Props { }
class HomeContainer extends React.Component<Props> {
    imgSource: Object
    
    constructor(props) {
        super(props)
        this.imgSource = { uri: 'https://vetstreet.brightspotcdn.com/dims4/default/beb5999/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F00%2Fea%2F576b21fc4f1482d5ff121dc34623%2FNorwegian-Forest-Cat-AP-ZYVRVP-645sm3614.jpg' };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Home Container
                </Text>

                <PhotoLightBox source={this.imgSource} style={{width:200, height:200}} />
            </View>
        );
    }
};

const bindAction = dispatch => ({})
const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(HomeContainer);
