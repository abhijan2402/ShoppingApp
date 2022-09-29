import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native'
const back=require('../Assets/arrow.png');
const cart=require('../Assets/cart.png');
const next=require('../Assets/next.png');

const windowWidth=Dimensions.get('window').width;
import { Dropdown } from 'react-native-element-dropdown';
const ProductDetails=()=>{
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
      ];
    
    return(
        <View style={{flex:1,alignItems:"center"}}>
            <View style={[styles.container,{padding:10}]}>
                <Image
                    style={styles.iconImage}
                    source={back}
                />
                <Image
                    style={styles.iconImage}
                    source={cart}
                />
            </View>
            <ScrollView>
                <Image
                    source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXtHjT64W2j7IKvMI2qo5OPq4Hkq7N9b8zKA&usqp=CAU"}}
                    style={{width:windowWidth-20,height:200,alignSelf:"center",margin:10,borderRadius:10}}
                />
                <Text style={{
                    color:"black",
                    fontWeight:"bold",
                    fontSize:15,
                    paddingHorizontal:20
                }}>
                    Nike
                </Text>
                <Text style={{
                    color:"black",
                    fontWeight:"bold",
                    fontSize:20,
                    textAlign:"center"
                }}>
                    Training and Gym for Men (Red)
                </Text>
                <View style={styles.priceContainer}>
                    <Text style={[styles.priceText,{color:"green"}]}>
                        71% Off
                    </Text >
                    <Text style={[styles.priceText,{ textDecorationLine: "line-through",color:"red"}]}>
                        1799
                    </Text >
                    <Text style={[styles.priceText,{color:"black"}]}>
                        ₹ 599
                    </Text>
                </View>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={'Select Color'}
                />
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={'Select Size'}
                />
                <View style={{padding:20,marginTop:20,borderBottomWidth:1,borderColor:"black"}}>
                    <Text style={styles.detailText}>
                        Free Delivery By 25thNov
                    </Text>
                    <Text style={styles.detailText}>
                        10 Days return policy
                    </Text>
                    <Text style={styles.detailText}>
                        Cash on Delivery
                    </Text>
                </View>
                <View style={{padding:20,marginTop:20,borderBottomWidth:1,borderColorr:"black"}}>
                    <Text style={styles.detailText}>
                        Product Details
                    </Text>
                    <Text style={[[styles.detailText,{fontSize:16}]]}>
                       Footwear refers to garments worn on the feet, which typically serves the purpose of 
                       protection against adversities of the environment such as wear from ...
                    </Text>
                    <View style={{width:windowWidth-50,justifyContent:"space-between",flexDirection:"row"}}>
                        <Text style={[styles.detailText,{fontSize:18}]}>
                            All Details
                        </Text>
                        <Image
                            style={styles.iconImage}
                            source={next}
                        />
                    </View>
                </View>
                {/* <View style={{padding:20,marginTop:20,borderBottomWidth:1,borderColoR:"black"}}>
                    <Text style={styles.detailText}>
                       Product reviews
                    </Text>
                    <Text style={styles.detailText}>
                        Cash on Delivery
                    </Text>
                </View> */}
            </ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={{color:"black",fontWeight:"bold"}}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:"#3063A0"}]}>
                    <Text style={{color:"white",fontWeight:"bold"}}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        justifyContent:"space-between",
        flexDirection: 'row',
        backgroundColor:"white",
        width:windowWidth
    },
    iconImage:{
        width:30,
        height:30
    },
    buttonContainer:{
        width:windowWidth/2,
        // padding:5,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        borderWidth:2,
        borderColor:"#3063A0"
    },
    priceContainer:{
        backgroundColor:"#BFF7C4",
        flexDirection: 'row',
        width:windowWidth-50,
        height:50,
        padding:10,
        alignSelf:"center",
        marginTop:20,
        borderRadius:5,
        justifyContent:"space-between",
        paddingHorizontal:20
    },
    priceText:{
        fontWeight:"bold",
        fontSize:20
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width:windowWidth-50,
        alignSelf:"center",
        margin:10
    },
    placeholderStyle: {
        fontSize: 16,
        fontWeight:"bold",
        color:"black"
    },
    selectedTextStyle: {
        fontSize: 16,
        fontWeight:"bold",
        color:"black"
    },
    detailText:{
        fontWeight:"bold",
        color:"black",
        fontSize:20,
        margin:10
    }
})
export default ProductDetails;


