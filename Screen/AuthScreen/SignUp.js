import  React from 'react';
import {View,Text,Image,StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
import InputBox from '../../components/InputBox';
const SignUp=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.titleText}>
                    Hello! SignUp to get started
                </Text>
                <View>
                    <InputBox 
                        type="user"
                        iconImageLink={require("../../Assets/user.png")}
                    />
                    <InputBox 
                        type="email"
                        iconImageLink={require("../../Assets/mail.png")}
                    />
                    <InputBox 
                        type="Password"
                        iconImageLink={require("../../Assets/lock.png")}
                    />
                </View>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",alignSelf:"flex-end",marginHorizontal:10}}>
                    <Text style={{
                        color:"black",fontWeight:"bold",fontSize:30,marginHorizontal:20
                    }}>SignUp</Text>
                    <View style={styles.icomView}>
                        <Image
                            style={styles.iconImage}
                            source={require("../../Assets/right.png")}
                        />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonTextContainer}>
                <Text style={{
                    color:"white",fontWeight:"bold",fontSize:18
                }}>Already Have an Account ?</Text>
                <TouchableOpacity style={styles.customButtom}>
                    <Text style={{color:"#3063A0",fontWeight:"bold",fontSize:15}}>Login</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"#3063A0",
        padding:10
    },
    buttonTextContainer:{
        backgroundColor:"#3063A0",
        width:windowWidth-40,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:10,
        borderWidth:3,
        borderColor:"white",
        borderRadius:10
    },
    customButtom:{
        backgroundColor:"white",
        padding:8,
        width:80,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5
    },
    itemContainer:{
        backgroundColor:"white",
        width:windowWidth-40,
        height:2*(windowHeight/2.5),
        borderRadius:40,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding:10
    },
    titleText:{
        color:"black",
        // backgroundColor:"red",
        fontSize:35,
        fontWeight:"bold",
        width:'60%',
        alignSelf:"flex-start",
        marginHorizontal:10,
        padding:10
    },
    icomView:{
        backgroundColor:'#6AA6EE',
        width:80,
        padding:5,
        alignItems:"center",
        justifyContent: 'center',
        borderRadius:10,
        elevation:20
    },
    iconImage:{
        height:30,
        width:30
    }
})
export default SignUp;