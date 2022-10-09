import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles.js';
import OhioUnion from '../Buildings/BuildingData.js';

const Home =  ({ navigation }) => {
    return (
        <View style = {styles.background}>
            <Text style = {styles.title} >
                Your Buildings
            </Text>
            <Button onPress = {() => navigation.navigate("OU")}>
                Ohio Union
            </Button> 
            <Button onPress = {() => navigation.navigate("SL")}>
                Smith Laboraties
            </Button> 
            <Button onPress = {() => navigation.navigate("HH")}>
                Hagerty Hall
            </Button>
            <Text style={{textAlign: "center"}}>------</Text> 
            <Button onPress = {() => navigation.navigate("Setting")}>
                Settings
            </Button>
        </View>
    );
};

export default Home; 

// <Button title = "Switch to LogIn" onPress = {() => navigation.navigate("LogIn")}></Button>