import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles.js';

const Splash = ({ navigation }) => {
    return (
        <View style = {styles.loadingPage}>
            <Image style={styles.blockO} source={require('../assets/BlockO.png')}/>
            <Text style = {styles.title}>
                 enterOSU
            </Text>
            <Button onPress = {() => navigation.navigate('LogIn')}>
                Switch to Home Screen
            </Button>
        </View>
    );
};

export default Splash; 

// <Button title = "Switch to LogIn" onPress = {() => navigation.navigate("LogIn")}></Button>