import * as React from 'react';
import {Button, Image, View,} from 'react-native';
import { Text } from 'react-native-paper';
import BuildingData from '../Buildings/BuildingData.js';


const SmithLab = {
    name : "Smith Labs", 
    imageSrc : '../assets/SmithLab.png',
    address : "174 W 18th Ave, Columbus, OH 43210", 
    description : "Most doors enter stairwells."
};

const SL = ({ navigation }) => {
    return (
        <View>
            <Text>
                {SmithLab.name}
            </Text>
            <Image source= {require('../assets/SmithLab.png')}   style = {{height:250, width:350, float: 'center'}}/>
            <Text style = {{textAlign:'center'}}>
             -------------------------------------------------------- 
            </Text>
            <Text>
                {SmithLab.address}
            </Text>
            <Text>
                {SmithLab.description}
            </Text>
        </View>
    );
};

export default SL; 

//<Image source={require(building.imageSrc)} />