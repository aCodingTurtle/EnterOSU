import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';
import styles from './styles.js';
//import { SelectMultipleButton, SelectMultipleGroupButton } from 'react-native-selectmultiple-button';

const transportation_OPTIONS = [
    {
        item: 'Walking',
        id: 'WK',
    },
    {
        item: 'Bike',
        id: 'BK',
    },
    {
        item: 'Car',
        id: 'CR',
    },
    {
        item: 'CBUS',
        id: 'BS',
    },
]

const accomodation_OPTIONS = [
    {
        item: 'Elevator',
        id: 'El',
    },
    {
        item: 'Ramp',
        id: 'rp',
    },
    {
        item: 'Push Button',
        id: 'PB',
    },
]

function Setting () {
    const [selectedTeam, setSelectedTeam] = useState({});
    const [selectedTeams, setSelectedTeams] = useState([]);
    return (
        <View style={{margin: 30}}>
        <View style = {{width: '100%', alignItems: 'center'}}>
            <Text style={styles.title}>
                Transportation Method
            </Text>
        </View>
        <SelectBox
            label = "Select appropriate transportation"
            options = {transportation_OPTIONS}
            selectedValues = {selectedTeams}
            onMultiSelect = {onMultiChange()}
            onTapClose = {onMultiChange()}
            isMulti
        />   
        <View>
            <Text style = {styles.title}>
                    Accommodations
            </Text>
        </View>
        <SelectBox
            label = "Select necesssary accommodations"
            options = {accomodation_OPTIONS}
            selectedValues = {selectedTeams}
            onMultiSelect = {onMultiChange()}
            onTapClose = {onMultiChange()}
            isMulti
        />
        </View>
    )

function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
}

function onChange() {
    return (val) => setSelectedTeam(val)
}
}

export default Setting; 
