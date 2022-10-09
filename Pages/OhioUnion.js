import * as React from 'react';
import {Button, Image, View,} from 'react-native';
import { Text } from 'react-native-paper';
import BuildingData from '../Buildings/BuildingData.js';


const OhioUnion = {
    name : "Ohio Union", 
    imageSrc : '../assets/HagertyHall.png',
    address : "1739 N High St, Columbus, OH 43210", 
    description : "Some doors enter to the restaurants, not the main union atrium."
};

const OU = ({ navigation }) => {
    return (
        <View>
            <Text>
                {OhioUnion.name}
            </Text>
            <Image source= {require('../assets/OhioUnion.png')}   style = {{height:250, width:350, float: 'center'}}/>
            <Text style = {{textAlign:'center'}}>
             -------------------------------------------------------- 
            </Text>
            <Text>
                1739 N High St, Columbus, OH 43210
            </Text>
            <Text>
                {OhioUnion.description}
            </Text>
        </View>
    );
};

export default OU; 
