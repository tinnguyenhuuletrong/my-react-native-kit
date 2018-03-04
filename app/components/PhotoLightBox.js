//@flow

import React from 'react';
import { View, TouchableOpacity, Modal, Image, StyleSheet, Text, Dimensions } from 'react-native';
import ImageZoom from "react-native-image-pan-zoom"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const headerHeight = 60;

const ModalContainer = ({ close, source }) => {
    return (<View style={styles.modalContainer}>
        <View style={styles.modalTopContainer}>
            <TouchableOpacity style={styles.modalTopClose} onPress={close} >
                <Text style={{ color: 'white' }}>X</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.modalMiddleContainer} >
            <ImageZoom
                cropWidth={width}
                cropHeight={height - headerHeight * 2}
                imageWidth={width}
                imageHeight={height / 3} 
            >
                <Image source={source} style={{ width: width, height: height / 3 }} resizeMode='contain' />
            </ImageZoom>
        </View>
    </View>
    );
};

export default class PhotoLightBox extends React.Component {
    constructor(props: Props) {
        super(props)
        this.state = {
            modalVisible: false,
        };
    }
    
    setModalVisible(visible: boolean) {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { style, source } = this.props;
        return (<View>
            {this.state.modalVisible ? <Modal
                animationType='fade'
                hardwareAccelerated={true}
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => { }}>
                <ModalContainer
                    source={source}
                    close={() => this.setModalVisible(!this.state.modalVisible)}
                />
            </Modal> : <View/>
            }

            <TouchableOpacity
                onPress={() => {
                    this.setModalVisible(true);
                }}>
                <Image source={source} style={style} />
            </TouchableOpacity>
        </View >
        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'black',
        marginTop: 22,
        flexDirection: 'column',
        flex: 1,
    },
    modalTopContainer: {
        height: headerHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalTopClose: {
        height: headerHeight,
        width: headerHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalMiddleContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: headerHeight
    },
})