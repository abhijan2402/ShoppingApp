import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function ShopperOrderPageDetail() {
    return (
        <View style={styles.AccountScreen}>
            <View style={styles.OrderHeader}>
                <TouchableOpacity style={styles.TOBackImg} onPress={() => { setSeller(false) }}>
                    <Image
                        style={styles.BackImg}
                        source={{ uri: "https://cdn-icons-png.flaticon.com/512/130/130882.png" }}
                    />
                </TouchableOpacity>
                <View style={styles.OrderHeaderText}>

                    <Text style={styles.OrderHeaderInnerText}>Order Details</Text>
                </View>
            </View>
            <View style={styles.mainBox}>
                <View style={styles.mainInnerBox}>
                    <Image
                        style={styles.itemImage}
                        source={{
                            uri: "https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI="
                        }}
                    />
                </View>
                <View style={styles.mainBoxDetails}>
                    <View style={styles.InnerMainBoxDetails}>
                        <Text style={[styles.ItemSpecification, { fontWeight: "800", fontSize: 18 }]}>All season shoes</Text>
                    </View>
                    <View style={styles.InnerMainBoxDetails}>
                        <Text style={[styles.ItemSpecification, { fontWeight: "700", fontSize: 18 }]}>Size 8</Text>
                    </View>
                    <View style={styles.InnerMainBoxDetails}>
                        <Text style={[styles.ItemSpecification, { fontWeight: "600", fontSize: 18 }]}>MRP-900/- </Text>
                    </View>
                </View>
            </View >
            <View style={styles.BlueLine}></View>
            <View style={styles.MidOrderDetails}>
                <Text style={styles.MidOrderDetailsText}>Order by <Text style={{ fontWeight: "700" }}>Aayushi Thathera</Text></Text>
                <Text style={styles.MidOrderDetailsText}>Address - Nathdwara</Text>
                <Text style={styles.MidOrderDetailsText}>Contact - 9899999977</Text>
            </View>
            <View style={styles.BlueLine}></View>
            <View style={styles.MidOrderDetails}>
                <Text style={[styles.MidOrderDetailsText, { fontWeight: "800" }]}>Payment Details </Text>
                <Text style={styles.MidOrderDetailsText}>Account details -2920010288282</Text>
                <Text style={styles.MidOrderDetailsText}>Bank Name - Bank of Unknown</Text>
            </View>
            <View style={styles.BlueLine}></View>
            <View style={styles.MidOrderDetails}>
                <Text style={[styles.MidOrderDetailsText, { fontWeight: "800" }]}>Status - Delivered</Text>
                <Text style={[styles.MidOrderDetailsText, { fontWeight: "900", color: "green", textAlign: "center", fontSize: 26, marginTop: 30 }]}>Thanks for shopping </Text>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    AccountScreen: {
        backgroundColor: "white",
        height: windowHeight
    },
    TOBackImg: {
        height: windowHeight / 15,
        justifyContent: "center",
        marginHorizontal: 10
    },
    BackImg: {
        width: 25,
        height: 25
    },
    OrderHeader: {
        display: 'flex',
        flexDirection: "row",
    },
    OrderHeaderText: {
        fontSize: 15,
        color: "black",
        width: windowWidth / 1.3,
        justifyContent: "center",
    },
    OrderHeaderInnerText: {
        fontSize: 20,
        color: "black",
        justifyContent: 'center',
        alignSelf: "center",
        fontWeight: "800",
    },
    mainBox: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        shadowOffset: -20,
        shadowColor: "red",
        elevation: -10,
        borderColor: "darkgrey",
        shadowOffset: { width: -9, height: -9 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    mainInnerBox: {
        margin: 8
    },
    itemImage: {
        height: 130,
        width: 135
    },
    PriceText: {
        fontSize: 14,
        alignSelf: 'center',
        color: "black",
        fontWeight: "600",
    },
    mainBoxDetails: {
        width: windowWidth / 1.6,
        marginTop: 15
    },
    InnerMainBoxDetails: {
        display: "flex",
        flexDirection: 'row',
        marginVertical: 6
    },
    ItemSpecification: {
        fontSize: 16,
        color: "black"
    },
    BlueLine: {
        backgroundColor: "#3063A0",
        height: 2,
        marginHorizontal: 30
    },
    MidOrderDetails: {
        height: windowHeight / 4.9,
    },
    MidOrderDetailsText: {
        fontSize: 20,
        color: "black",
        marginVertical: 11,
        marginHorizontal: 30
    }
})
export default ShopperOrderPageDetail;