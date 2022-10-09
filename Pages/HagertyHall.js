import * as React from 'react';
import {Button, Image, View,} from 'react-native';
import { Text } from 'react-native-paper';
import BuildingData from '../Buildings/BuildingData.js';


const HagertyHall = {
    name : "Hagerty Hall", 
    imageSrc : '../assets/HagertyHall.png',
    address : "1775 College Rd S, Columbus, OH 43210", 
    description : "Not all stairs inside go to all floors; follow signage carefully."
};

const HH = ({ navigation }) => {
    return (
        <View>
            <Text>
                {HagertyHall.name}
            </Text>
            <Image source= {require('../assets/HagertyHall.png')}   style = {{height:250, width:350, float: 'center'}}/>
            <Text style = {{textAlign:'center'}}>
             -------------------------------------------------------- 
            </Text>
            <Text>
                {HagertyHall.address}
            </Text>
            <Text>
                {HagertyHall.description}
            </Text>
        </View>
    );
};

export default HH; 

//<Image source={require(building.imageSrc)} />