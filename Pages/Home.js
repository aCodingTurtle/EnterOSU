import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles.js';

const Home =  ({ navigation }) => {
    return (
        <View style = {styles.background}>
            <Text style = {styles.title}>
                enterOSU
            </Text>
            <Button onPress = {() => navigation.navigate("Setting")}>
                Switch to Settings
            </Button>
            <Button onPress = {() => navigation.navigate("Building")}>
                Switch to Building
            </Button>
        </View>
    );
};

export default Home; 

// <Button title = "Switch to LogIn" onPress = {() => navigation.navigate("LogIn")}></Button>