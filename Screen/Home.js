import React from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native'
import data from '../DummyData'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const logo1 = require("../Assets/logo3.png");
const search = require("../Assets/search.png");
const Home = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemCard} onPress={() => navigation.navigate("ProductDetail")}>
            <Image
                style={styles.itemImage}
                source={{ uri: item.imageLink }}
            />
            <View style={{ paddingHorizontal: 10, width: "70%" }}>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                    <Text style={[styles.text, { fontSize: 20 }]}>{item.name}</Text>
                    <Text style={[styles.text, { fontSize: 15 }]}>Orders:{item.orders}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                    <Text style={[styles.text, { fontSize: 15 }]}>{item.mrp} Rs</Text>
                    <Text style={[styles.text, { fontSize: 15 }]}>{item.offers} Applied</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", width: "100%" }}>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={[styles.text, { color: 'white' }]}>{item.availability}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={[styles.text, { color: 'white' }]}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.btnContainer, { width: '100%', alignSelf: "center" }]}>
                    <Text style={[styles.text, { color: 'white' }]}>All Orders</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        style={styles.iconImage}
                        source={logo1}
                    />
                    <Text style={styles.showName}>Shop Name</Text>
                </View>
                <Image
                    style={styles.iconImage}
                    source={search}
                />
            </View>
            <Text style={styles.itemText}>Items</Text>
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
    header: {
        width: windowWidth,
        height: 60,
        backgroundColor: "white",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "space-between",
        padding: 10,
        flexDirection: 'row',
    },
    showName: {
        fontWeight: "bold",
        color: "#3063A0",
        fontSize: 20,
        marginHorizontal: 10
    },
    container: {
        flex: 1,
        alignItems: "center",
        // justifyContent:"center",
        backgroundColor: "#3063A0"
    },
    itemCard: {
        backgroundColor: "white",
        width: windowWidth - 30,
        padding: 10,
        borderRadius: 10,
        // height:windowHeight/3.5,
        flexDirection: "row",
        marginTop: 20
    },
    itemImage: {
        height: 120,
        width: '30%',
        resizeMode: 'contain',
        borderRadius: 10
    },
    text: {
        fontWeight: "bold",
        color: "black"
    },
    itemText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 30,
        alignSelf: "flex-start",
        padding: 20
    },
    btnContainer: {
        width: '50%',
        height: 30,
        backgroundColor: "#3063A0",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 4,
        marginHorizontal: 1,
        borderRadius: 1000
    },
    iconImage: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        // borderRadius:20
    }
})
export default Home

