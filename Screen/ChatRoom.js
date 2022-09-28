import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,Dimensions, TouchableOpacity,TextInput,FlatList,ScrollView} from 'react-native';
import dummyChatData from '../ChatData';
const logo1=require("../Assets/profile.png");
const search=require("../Assets/more.png");
const send=require("../Assets/send.png");
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const ChatRoom=()=>{
    const [thisUser,setThisUser]=useState('chirag')
    const renderItem = ({ item }) => (
        <>
          <View 
            style={[
              styles.messageContainer,
              {
                alignSelf:item.user===thisUser?'flex-end':'flex-start',
              }
            ]}    
          >
            <Text style={[styles.title,{
              alignSelf:item.user===thisUser?'flex-end':'flex-start',
            }]}>
              {item.message}
            </Text>
          </View >
        </>
      );
    return(
        <View style={{flex:1,backgroundColor:"white"}}>
            <View style={styles.header}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image 
                        style={styles.iconImage}
                        source={logo1}
                    />
                    <Text style={styles.showName}>Shop Name</Text>
                </View>
                <TouchableOpacity style={styles.iconContainer}>
                    <Image
                        style={styles.iconImage}
                        source={search}
                    /> 
                </TouchableOpacity>
            </View>
            <FlatList
                ListHeaderComponent={
                  <>
                    <Text style={styles.warnContainer}>
                      Message in this chat are private and protected by Viber end to end encryption. Learn more
                    </Text>
                  </>
                }
                inverted={false}
                
                data={dummyChatData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.messageList}
            />
            <View  style={styles.chatIPStyle}>
                <TextInput
                    placeholder={"Message..."}
                    placeholderTextColor={"black"}
                    style={styles.chatInput}
                />
                <TouchableOpacity style={styles.iconview} >
                    <Image
                        style={styles.sentIcon}
                        source={require('../Assets/send.png')}
                    />
                </TouchableOpacity>
            </View> 
        </View>
    )
}
const styles=StyleSheet.create({
    header:{
        width:windowWidth,
        height:60,
        backgroundColor:"#3063A0",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        justifyContent:"space-between",
        padding:10,
        flexDirection:'row',
    },      
    showName:{
        fontWeight:"bold",
        color:"white",
        fontSize:20,
        marginHorizontal:10
    },
    iconImage:{
        height:30,
        width:30,
        resizeMode:'contain',
        // borderRadius:20
    },
    iconContainer:{
        width:40,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        backgroundColor:"white"
    },
    chatInput:{
        height:50,
        width:2*(windowWidth/2.5),
        backgroundColor:"white",
        color:"black",
        margin:10,
        borderWidth:1,
        borderRadius:50,
        paddingHorizontal:25,
        fontWeight:"bold"
      },
      chatIPStyle:{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:"center",
        backgroundColor:"#3063A0",
        borderTopLeftRadius:10,
        borderTopRightRadius:10
      },
      sentIcon:{
        width:35,
        height:35,
        resizeMode:'contain'
      },
      messageContainer:{
        backgroundColor:"#3063A0",
        marginHorizontal:10,
        paddingHorizontal:10,
        paddingVertical:5,
        marginTop:6,
        marginBottom:5,
        borderWidth:1,
        borderRadius:5,
        maxWidth:'70%'
      },
      title:{
        color:"white",
        fontSize:15,
        fontFamily:"Alias",
        // marginLeft:10,
        fontWeight:"bold"
      },
      iconview:{
        height:50,
        width:50,
        backgroundColor:"white",
        borderRadius:50/2,
        alignItems:"center",
        justifyContent:"center",
        marginRight:10
      },
      warnContainer:{
        color:"white",
        width:'70%',
        fontWeight:"bold",
        borderRadius:10,
        backgroundColor:"#3063A0",
        padding:15,
        alignSelf:"center",
        margin:10
    }
})
export default ChatRoom;