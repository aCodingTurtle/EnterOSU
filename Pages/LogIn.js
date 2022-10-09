//import AsyncStorage from '@react-native-async-storage/async-storage';
// import React from 'react';
// import { View, Input } from 'react-native';
// import{SafeAreaView} from 'react-native';
// import { Button, Text } from 'react-native-paper';
// import styles from './styles';

// const LogIn = ({ navigation }) => {
//     const [inputs, setInputs] =React.useState({
//         email: '',
//         password: '',
//        });
//     const [errors, setErrors] =React.useState({
//        });
//     const handleError = (errorMessage,input)=>{
//        setInputs(prevState)=>({...prevState,[input]:errorMessage})
//        }
//        const validate = () =>{
//         Keyboard.dismiss();
//         let valid = true;
//         if(!inputs.email){
//              handleError("Please input email", 'email');
//              valid = false;
//         }
//         if (!inputs.password){
//            handleError('please input password','password')
//          }
//         if (valid){
//             login();
//          }
//        };

//         const login=() => {
//              setLoading(true);
//              setLoading (false);
//              letUserData = await AsyncStorage.getItem("user");
//              if(userData){
//               userData =JSON.parse(userData);
//             }  if(inputs.email == userData.email && inputs.password == userData.password){
//                  AsyncStorage.setItem("user",JSON.stringify({...userData, loogged: true}));
//             }else{
//                 Alert.alert('Error','Invalid Det');
//             }
//             else {
//                 Alert.alert("Error",'User does not exist');
//             }
//              setTimeout(async() => {},3000);
//          };
//        const handleOnChange =(text,input) =>{
//         setInputs(pervSate => ({...prevState, [input]:text}))
//        };

//        const handleError = (errorMessage,input)=>{
//              setErrors(prevState => ({...prevState,[input]:errorMessage}));
//         };


//     return (
//           <SafeAreaView style = ({backgroundColor:COLORS.white,flex:1})>
//             <ScrollView
//             contentContainerStyle=({
//                 paddingTop:50,
//                 paddingHorizontal: 20,
//               })>
//             </ScrollView>
//            </SafeAreaView>
//             <Text style={{color:styles.COLORS.black, fontSize: 40,fontWeight: 'bold'}}>
//                 Login
//             </Text>
//             <Text style={{color:styles.COLORS.grey, fontSize: 18, marginVertical: 10}}>
//                 Login
//             </Text>
//                 <Input placeholder="Username" iconName ="email-outline" label= "Email" error={errors.email}  onFocus={()=>{handleError(null 'email')}}  onChangeText ={(text)=> handleOnChange(text,"email")}/>
//                 <Input placeholder="password" iconName ="lock-outline" label= "password"  error={errors.email}  onChangeText ={(text)=> handleOnChange(text,"password"/>
//                 <Button  onPress = {() => navigation.navigate("Setting")}>
//                     LOGIN
//                 </Button>
//         </View>
//     );
// } 

// export default LogIn;