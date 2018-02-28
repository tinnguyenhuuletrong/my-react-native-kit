//@flow

import React from 'react';
import { Platform, View, Text, Image, Dimensions } from 'react-native';
import Lightbox from 'react-native-lightbox';
import { connect } from "react-redux";

import mockData from './_mockData'
import styles from './styles'

const instructions = Platform.select({
    ios: mockData.ios,
    android: mockData.android
});

const WINDOW_HEIGHT = Dimensions.get('window').height; 

// https://github.com/oblador/react-native-lightbox/issues/74


const LightboxView = ({ src, style }) => (
    <View style={style}>
        <Lightbox 
            underlayColor= '#F5FCFF'
            renderContent={_ => (
                <View style={{flex: 1}}>
                    <Image
                    style={{
                        resizeMode: 'contain',
                        flex: 1
                    }}
                    source={src}
                    />
                </View>
            )}
         >
            <Image
                style={{
                    resizeMode: 'contain',
                    height: style.height
                }}
                source={src}
            />
        </Lightbox >
    </View>
);

export interface Props { }
class SettingContainer extends React.Component<Props> {

    constructor(props) {
        super(props)
        this.imgSrc = { uri: 'https://vetstreet.brightspotcdn.com/dims4/default/beb5999/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F00%2Fea%2F576b21fc4f1482d5ff121dc34623%2FNorwegian-Forest-Cat-AP-ZYVRVP-645sm3614.jpg' };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Avatar:
                </Text>
                <LightboxView src={this.imgSrc} style={{width:100, height:100}} />
                <LightboxView src={this.imgSrc} style={{width:200, height:200}} />
                
            </View>
        );
    }
};

const bindAction = dispatch => ({})
const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(SettingContainer);
