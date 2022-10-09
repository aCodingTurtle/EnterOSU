import { StyleSheet } from "react-native";
import {View, Text, SafeAreaView} from 'react-native';

export default StyleSheet.create({
    loadingPage: { 
        backgroundColor: '#E84444',
        height: "100%",
        justifyContent: 'center',
        textAlign:'center',
        float:'center',
        paddingTop: 50,
        padding: 90,
    },
    COLORS : {
        white: '#fff',
        black: '#000',
        blue: '#5D5FEE',
        red: 'red',
        light: '#F3F4FB',
        grey: '#BABBC3',
    },
 
    blockO: {
        alignItems: 'center',
        float:'center',
        textAlign:'center',
        height: 150,
        width: 120,
    },
    background: {
        flex: 1,
        background: '#FFFEFE',
    },
    nav:{
        background: '#E84444',
        fontColor: '#FFFFFF', 
    },
    title: {
        margin: 20,
        fontSize: 25,
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
        width: 200,
        height: 200,
    },
    selectMultipleButton: {
        borderRadius: 10, 
        height: 20,
    },
    highLightStyle: {
        borderColor: 'black',
        backgroundColor: 'transparent',
        textColor: 'black',
        borderTintColor: '#E84444',
        backgroundTintColor: 'transparent',
        textTintColor: 'white',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});
