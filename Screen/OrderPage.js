import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, FlatList } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import data from "../DummyOrderData";
function OrderPage() {
    const renderItem = ({ item }) => (
        <View style={styles.mainBox}>
            <View style={styles.mainInnerBox}>
                <Image
                    style={styles.itemImage}
                    source={{ uri: item.imageLink }}
                />
                <Text style={styles.PriceText}>MRP-{item.Price}</Text>
            </View>
            <View style={styles.mainBoxDetails}>
                <View style={styles.InnerMainBoxDetails}>
                    <Text style={styles.ItemSpecification}>{item.Specification}</Text>
                    <Text style={[styles.ItemSpecification, { marginLeft: 20, fontWeight: "600" }]}>{item.Size}</Text>
                </View>
                <View style={styles.InnerMainBoxDetails}>
                    <Text style={[styles.ItemSpecification, { fontWeight: "700", fontSize: 16 }]}>Order By:{item.OrderBy}</Text>
                </View>
                <View style={styles.InnerMainBoxDetails}>
                    <Text style={[styles.ItemSpecification, { fontWeight: "600" }]}>Address : {item.Address}</Text>
                </View>
            </View>
        </View >
    )
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

                    <Text style={styles.OrderHeaderInnerText}>All Orders</Text>
                </View>
            </View>
            <View style={styles.BlueLine}></View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
const styles = StyleSheet.create({

    // For Seller
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
        // fontFamily: "monospace"
    },
    BlueLine: {
        backgroundColor: "#3063A0",
        height: 1.5,
        marginHorizontal: 15,
        marginTop: 14,
        marginVertical: 14
    },
    mainBox: {
        borderWidth: 1,
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
        height: 70,
        width: 90
    },
    PriceText: {
        fontSize: 14,
        alignSelf: 'center',
        color: "black",
        fontWeight: "600",

    },
    mainBoxDetails: {
        // borderWidth: 1,
        width: windowWidth / 1.6,
        // justifyContent: "flex-start"
    },
    InnerMainBoxDetails: {
        display: "flex",
        flexDirection: 'row',
        // justifyContent: "space-evenly",
        marginVertical: 6
    },
    ItemSpecification: {
        fontSize: 16,
        color: "black"
    }
});
export default OrderPage