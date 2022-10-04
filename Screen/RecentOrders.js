import React,{useEffect, useRef} from 'react';
import { Modal,Animated, TouchableOpacity,Text, View,StyleSheet,Image,Dimensions, ScrollView } from 'react-native';
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;

const RecentOrders=()=>{
    useEffect(()=>{
        showPopUp()
    },[])
    const position=new Animated.ValueXY({x:0,y:windowHeight});
    const showPopUp=()=>{
        Animated.timing(position,{
            toValue:{x:0,y:0},
            duration:1500,
            useNativeDriver:true
        }).start();
    }
    return(
        <View style={styles.container}>
            <View style={{width:'100%',padding:10,borderBottomLeftRadius:20,borderBottomRightRadius:20,backgroundColor:"white"}}>
                <Image
                    style={styles.iconImage}
                    source={require('../Assets/arrow.png')}
                />
            </View>
            <Text style={styles.textStyle}>
                Recently Order Sellers
            </Text>
            <Animated.View style={[styles.animtedView,
                {
                    transform:[
                        {translateX:position.x},
                        {translateY:position.y}
                    ]
                }
            ]}>
                <Text style={styles.modalText}>Recently Ordered Sellers</Text>
                <ScrollView style={{padding:20}}>
                    <Text style={{fontSize:30,padding:5,margin:10,color:"#3063A0",fontWeight:"bold"}}>1. Pizza hut</Text>
                    <Text style={{fontSize:30,padding:5,margin:10,color:"#3063A0",fontWeight:"bold"}}>1. Crazy hut</Text>
                    <Text style={{fontSize:30,padding:5,margin:10,color:"#3063A0",fontWeight:"bold"}}>1. Trends</Text>
                </ScrollView>
            </Animated.View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#3063A0"
    },
    iconImage:{
        width:40,
        height:40
    },
    textStyle:{
        color:"white",
        fontWeight:"bold",
        fontSize:40,
        padding:30
    },
    animtedView:{
        backgroundColor:"white",
        width:windowWidth,
        height:2*(windowHeight/3),
        position:"absolute",
        bottom:0,
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        padding:30
    },
    modalText:{
        fontWeight:"bold",
        color:"#3063A0",
        fontSize:25,
        textAlign:"center"
    }
})
export default RecentOrders