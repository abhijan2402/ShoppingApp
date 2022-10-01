import React, { useState } from 'react';
import {  Text, View ,TextInput,Dimensions, Image,TouchableOpacity, StyleSheet} from 'react-native';
const windowWidth=Dimensions.get('window').width;

export default function InputBox(props) {
    const [showPassword,setShowPassword]=useState(true)
    return (
        <>
        <View style={{
            // flex:1,
            alignItems:"center",
            justifyContent:"center"
        }}>
            <View style={[
                {flexDirection:'row',alignItems:"center"},
                inputStyleView.InputView
            ]}>
            <Image 
                // source={require("../Assets/lock.png")} 
                source={props.iconImageLink}
                style={inputStyleView.icon} 
            />
            <TextInput
                style={{flex:1,fontWeight:"bold",fontSize:15}}
                placeholder={props.type}
                placeholderTextColor={"black"}
                secureTextEntry={ props.type=="Password"?showPassword:false}
            />
            {
                props.type=="Password"?
                <TouchableOpacity onPress={()=>setShowPassword(!showPassword)} >
                    <Image 
                        source={showPassword?require("../Assets/eye.png"):require("../Assets/hidden.png")} 
                        style={inputStyleView.icon} 
                    />
                </TouchableOpacity>:null
            }
            </View> 
        </View>
        </>
    );
}
const inputStyleView=StyleSheet.create({
  InputView:{
    backgroundColor:"#F2F2F2",
    height:50,
    width:windowWidth-80,
    borderRadius:50,
    marginTop:10,
    fontWeight:'bold',
    borderWidth:2,
    borderColor:"#060606",
    paddingHorizontal:10
  },
  icon:{
    height:25,
    width:25,
    marginHorizontal:15
  }
})