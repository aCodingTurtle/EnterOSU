import { StyleSheet } from "react-native";
import {View, Text, SafeAreaView} from 'react-native';

export default StyleSheet.create({
    loadingPage: {
        flex: 1, 
        justifyContent: 'center',
        paddingTop: 50,
        background: '#E84444',
        padding: 90,
    },
    blockO: {
        textAlign: 'center',
        hieght: 150,
        width: 120,
    },
    background: {
        flex: 1,
        background: '#FFFEFE',
    },
    title: {
        margin: 24,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        fontColor: '#FFFEFE', 
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        textAlign: 'center',
        background: '#E84444',
        PaddingTop: 15,
        PaddingBotton: 15,
    },
});
