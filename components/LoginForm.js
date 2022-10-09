// import React,{ useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {View, Text, StyleSheet, useColorScheme, hidePassword} from 'react-native';
// import Icon from "reat-native-vector-icons/MaterialCommunityIcons";
// import { Button } from 'react-native-paper';
// import styles from './styles';

// const Input = ({
//     label,
//     iconName,
//     error,
//     password,
//     onFocus = {},
//     ...props
// }) => {
//     const [isFocused, setIsFocused] =React.useState(false);
//     return (
//     <View style ={{marginBottom: 20}}>
//         <Text style={style.label}>
//             {label}
//         </Text>
//         <View style={[style.inputContainer, {borderColor: error ? styles.COLORS.red:isFocused ? styles.COLORS.darkBlue: styles.COLORS.light}]}>
//             <Icon name={iconName} style={{fontSize :22, color:styles.COLORS.darkBlue, marginRight: 10}}/>
//             <TextInput 
//             secureTextEntry={hidePassword}
//             autoCorrect={false}
//             onFocus={() => {
//                 onFocus();
//                 setIsFocused(true);
//             }}

//             onBlur={() => {
//                 setIsFocused(false);
//             }}
//             style ={{color:styles.styles.COLORS.darkBlue,flex: 1}}{...props}/>
//             {password && ( <Icon 
//             onPress={()=>setHidePassword(!hidePassword)}
//             style={{fontSize:22,color:styles.COLORS.darkBlue}}
//             name ={hidePassword ? "eye-outline":"eye-off-outline"}
//             />)}
           
//         </View>
//         {error && (<Text style={{color:styles.COLORS.red,fontSize:12,marginTop: 7}}>{error}</Text>)}
        
//     </View>
//     );
// };

// const style = StyleSheet.create({
//     label: {
//         marginVertical: 5,
//         fontSize: 14,
//         color: styles.COLORS.grey,
//     },
//     inputContainer:{
//         height: 55,
//         backgroundColor: styles.COLORS.light,
//         flexDirection:'row',
//         paddingHorizontal: 15,
//         borderWidth: 0.5,
//         alignItems: 'center',
//     }
// });

// export default Input;
