import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import ModelAddress from '../ModelAddress';
import Model from '../ModelAddress';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function ShopperAccount({ navigation }) {
    const [seller, setSeller] = useState(false)
    return (
        <>
            {
                seller ?
                    <View style={styles.AccountScreen}>
                        <View>
                            <TouchableOpacity style={styles.TOBackImg} onPress={() => { setSeller(false) }}>
                                <Image
                                    style={styles.BackImg}
                                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/130/130882.png" }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.UserProfileImgView}>
                            <Image
                                style={styles.UserProfileImg}
                                source={{ uri: "https://img.freepik.com/free-vector/cartoon-style-cafe-front-shop-view_134830-697.jpg?w=2000" }}
                            />

                        </View>
                        <View>
                            <View style={styles.MyProfileText}>
                                <Text style={styles.MyProfileTextInner}>MyProfile</Text>
                            </View>
                            <View style={styles.DetailSection1}>
                                <View style={styles.innerDetailSection1}><Text style={styles.innerDetailSectionText}>Name:ABhi</Text></View>
                                <View style={[styles.innerDetailSection2]}><Text style={[styles.innerDetailSectionText, { justifyContent: "center", color: "white" }]}>Account Details</Text></View>
                            </View>
                            <View style={styles.ContactView}>
                                <View style={styles.innerDetailSection}><Text style={styles.innerDetailSectionText}>Contact : 7976114625</Text></View>

                            </View>
                            <View style={styles.BlueLine}></View>
                        </View>
                        <View>
                            <View style={styles.OrderDetailSectionBtn} onPress={() => navigation.navigate('Details')}>
                                <Image source={{ uri: "https://thumbs.dreamstime.com/b/grocery-order-bag-food-goods-online-shop-hands-holding-vector-illustration-doodles-thin-line-art-sketch-style-concept-181767788.jpg" }} style={styles.OrderImg} />
                                <Text style={styles.OrderDetailSectionText} >OrderLists</Text>
                            </View>
                            <View style={styles.OrderDetailSectionBtn}>
                                <Image source={{ uri: "https://img.freepik.com/premium-vector/special-offer-background-vector-icon-illustration-logo-mascot-hand-drawn-concept-trandy-cartoon_519183-280.jpg?w=2000" }} style={styles.OrderImg} />
                                <Text style={styles.OrderDetailSectionText} >Offer Running</Text>
                            </View>
                            <View style={styles.OrderDetailSectionBtn}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/1041/1041916.png" }} style={styles.OrderImg} />
                                <Text style={styles.OrderDetailSectionText} >Chat with customer</Text>
                            </View>
                            <View style={styles.OrderDetailSectionBtn}>
                                <Image source={{ uri: "https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cartoon-creative-map-location-image_2286149.jpg" }} style={styles.OrderImg} />
                                <Text style={styles.OrderDetailSectionText} >Shop location</Text>
                            </View>
                        </View>
                    </View>
                    :
                    <View style={styles.AccountScreen}>
                        <View>
                            <TouchableOpacity style={styles.TOBackImg} onPress={() => { setSeller(true) }}>
                                <Image
                                    style={styles.BackImg}
                                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/130/130882.png" }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.UserProfileImgView}>
                            <Image
                                style={styles.UserProfileImg}
                                source={{ uri: "https://media.thetab.com/blogs.dir/90/files/2020/04/wig.jpg" }}
                            />

                        </View>
                        <View>
                            <View style={styles.MyProfileText}>
                                <Text style={styles.MyProfileTextInner}>MyProfile1</Text>
                            </View>
                            <View style={styles.DetailSection}>
                                <View style={styles.innerDetailSection}><Text style={styles.innerDetailSectionText}>Name:ABhi</Text></View>
                                <View style={styles.innerDetailSection}><Text style={styles.innerDetailSectionText}>Age:17</Text></View>
                            </View>
                            <View style={styles.ContactView}>
                                <View style={styles.innerDetailSection}><Text style={styles.innerDetailSectionText}>Contact : 7976114625</Text></View>

                            </View>
                            <View style={styles.BlueLine}></View>
                        </View>
                        <View>
                            <View style={styles.OrderDetailSectionBtn} >
                                <Image source={{ uri: "https://thumbs.dreamstime.com/b/grocery-order-bag-food-goods-online-shop-hands-holding-vector-illustration-doodles-thin-line-art-sketch-style-concept-181767788.jpg" }} style={styles.OrderImg} />
                                <Text style={styles.OrderDetailSectionText} >Orders</Text>
                            </View>
                            <View style={styles.OrderDetailSectionBtn}>
                                <Image source={{ uri: "https://cdn5.vectorstock.com/i/1000x1000/95/59/order-checklist-icon-cartoon-delivery-list-vector-39259559.jpg" }} style={styles.OrderImg} />
                                <Text style={styles.OrderDetailSectionText} >Recently Ordered Seller</Text>
                            </View>
                            <View style={styles.OrderDetailSectionBtn}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/1041/1041916.png" }} style={styles.OrderImg} />
                                <Text style={styles.OrderDetailSectionText} >Orders</Text>
                            </View>
                            <View style={styles.OrderDetailSectionBtn} >
                                <Image source={{ uri: "https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cartoon-creative-map-location-image_2286149.jpg" }} style={styles.OrderImg} />
                                <Text style={styles.OrderDetailSectionText} ><ModelAddress /></Text>
                            </View>
                        </View>
                    </View>

            }
        </>


        // 
    )
}
const styles = StyleSheet.create({

    // For Shopper
    AccountScreen: {
        backgroundColor: "white",
        height: windowHeight
    },
    TOBackImg: {
        // borderWidth: 1,
        height: windowHeight / 15,
        justifyContent: "center",
        marginHorizontal: 10
    },
    BackImg: {
        width: 25,
        height: 25

    },
    UserProfileImgView: {
        // borderWidth: 1,
        justifyContent: "center"
    },
    UserProfileImg: {
        width: windowWidth / 1.155,
        height: windowHeight / 4,
        alignSelf: "center",
        margin: 20,
        borderRadius: 20
    },
    MyProfileText: {
        // borderWidth: 1,
        padding: 10,
        marginHorizontal: 10
    },
    MyProfileTextInner: {
        fontSize: 23,
        color: "black",
        fontWeight: "800"
    },
    DetailSection: {
        display: 'flex',
        flexDirection: "row",
    },

    innerDetailSection: {
        width: windowWidth / 1.8,
        marginLeft: 20,
        marginVertical: 10
    },

    innerDetailSectionText: {
        fontSize: 17,
        color: "black"
    },
    ContactView: {
        marginBottom: 18,
    },
    BlueLine: {
        backgroundColor: "#3063A0",
        height: 2,
        marginHorizontal: 30
    },
    OrderImg: {
        width: 35,
        height: 35

    },
    OrderDetailSectionBtn: {
        display: 'flex',
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 13
    },
    OrderDetailSectionText: {
        justifyContent: "center",
        fontSize: 16,
        alignSelf: "center",
        marginLeft: 15,

    },

    // for Shopkepper
    DetailSection1: {
        display: 'flex',
        flexDirection: "row",

    },
    innerDetailSection1: {
        width: windowWidth / 2.1,
        marginVertical: 10,
        justifyContent: "center",
        alignSelf: "center",
        paddingHorizontal: 20
    },
    innerDetailSection2: {
        width: windowWidth / 2,
        marginVertical: 10,
        justifyContent: "center",
        alignSelf: "center",
        textAlign: "center",
        padding: 3,
        paddingHorizontal: 29,
        backgroundColor: "#3063A0",
        borderRadius: 10,
    },


});
export default ShopperAccount