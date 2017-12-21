import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Device from 'react-native-device-detection';

const deviceW = Dimensions.get('window').width;

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={.5} onPress={this.onPressPlay}>
                    <FontAwesome name="play" size={px2dp(50)} color="#fff" style={{marginRight: 20}}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.5} onPress={this.onPressPause}>
                    <FontAwesome name="pause" size={px2dp(50)} color="#fff" style={{marginRight: 20}}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.5} onPress={this.onPressClock}>
                    <FontAwesome name="clock-o" size={px2dp(50)} color="#fff" style={{marginRight: 10}}/>
                </TouchableOpacity>
            </View>
        );
    }

    onPressPlay() {
        console.log("PLAY");
    }
    onPressPause() {
        console.log("PAUSE");
    }
    onPressClock() {
        console.log("CLOCK");
    }
}

function px2dp(px) {
    let basePx;
    if (Device.isTablet) {
        basePx = 1000;
    } else {
        basePx = 375;
    }
    return px * deviceW / basePx
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    }
});
