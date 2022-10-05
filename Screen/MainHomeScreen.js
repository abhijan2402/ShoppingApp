import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import ImageSlider from 'react-native-image-slider';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const images = [
    'https://previews.123rf.com/images/vectorhot/vectorhot1612/vectorhot161200015/67708097-store-icon-shop-icon-cartoon-vector-illustration-isolated-on-white-background-.jpg',
    'https://placeimg.com/640/640/people',
    'https://img.freepik.com/free-vector/sales-promotion-cartoon-web-icon-marketing-strategy-rebate-advertising-discount-offer-low-price-idea-clearance-sale-customer-attraction-vector-isolated-concept-metaphor-illustration_335657-2752.jpg?w=2000',
    'https://placeimg.com/640/640/beer',
];
function MainHomeScreen() {
    return (
        <>
            <View style={{ backgroundColor: "white", height: windowHeight }}>
                <View style={styles.Header}>
                    <View style={styles.HeaderInner}>
                        <Text style={styles.HeaderInnerText}>PostTab</Text>
                    </View>
                </View>
                <ScrollView>


                    <ImageSlider
                        loopBothSides
                        autoPlayWithInterval={3000}
                        images={images}
                        style={{ height: 200, borderRadius: 100, marginHorizontal: 5, borderRadius: 20, marginVertical: 10 }}
                        customSlide={({ index, item, style, width }) => (
                            <View key={index} style={[styles.ImageSlider, {}]}>
                                <Image source={{ uri: item }} style={{ width: windowWidth - 10, height: 200, alignSelf: "center", }} />
                            </View>
                        )}
                    />
                    <View style={{ marginTop: 10, backgroundColor: "white" }}>
                        <Text style={{ fontSize: 22, color: "black", textAlign: "left", fontWeight: "700", marginHorizontal: 20 }}>Special Products</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginVertical: 20 }}>
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 150, height: 150, borderRadius: 20 }}
                                    source={{ uri: "https://images.meesho.com/images/products/44009963/kxwus_512.jpg" }}
                                />
                                <Text style={styles.specialProduct}>Puma</Text>

                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 150, height: 150, borderRadius: 20 }}
                                    source={{ uri: "https://images.meesho.com/images/products/89867327/hh4s5_512.jpg" }}
                                />
                                <Text style={styles.specialProduct}>Nike</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 23, color: "black", textAlign: "right", fontWeight: "700", marginHorizontal: 30 }}>Latest brands</Text>
                        <TouchableOpacity style={{ marginHorizontal: 20, marginTop: 20 }}>
                            <Image
                                style={{ width: 310, height: 150, borderRadius: 20 }}
                                source={{ uri: "https://hips.hearstapps.com/hmg-prod/images/best-running-shoes-lead-1576249557.jpg" }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 20, marginTop: 20 }}>
                            <Image
                                style={{ width: 310, height: 150, borderRadius: 20 }}
                                source={{ uri: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17305046/2022/2/26/d3e17ae1-f482-42d1-bc3b-a46afb1a25c01645858426508KillerMenNavyBlueSlip-OnSneakers1.jpg" }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text style={{ fontSize: 23, color: "black", textAlign: "left", fontWeight: "700", marginHorizontal: 30 }}>Offers</Text>
                        <TouchableOpacity style={{ marginHorizontal: 20, marginTop: 20 }}>
                            <Image
                                style={{ width: 310, height: 150, borderRadius: 20 }}
                                source={{ uri: "https://hungamadeal.co.in/wp-content/uploads/2019/09/amazon-54.jpg" }}
                            />
                        </TouchableOpacity>

                    </View>

                </ScrollView>
            </View>
        </>

    )
}
const styles = StyleSheet.create({
    Header: {
        height: windowHeight / 10,
        // borderWidth: 3,
        // flex: 1


    },
    HeaderInner: {
        backgroundColor: "#3063A0",
        height: windowHeight / 11,
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        justifyContent: "center"
    },
    HeaderInnerText: {
        fontSize: 30,
        color: "white",
        textAlign: "center"
    },
    ImageSlider: {
        // width: windowWidth - 10,
        height: 200,
        // alignSelf: "center",
        // marginTop: 10,
        borderRadius: 30,
        backgroundColor: "white"
    },
    Imagesliderheader: {
        height: windowHeight
        // backgroundColor: "white"
    },
    specialProduct: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    }
})
export default MainHomeScreen