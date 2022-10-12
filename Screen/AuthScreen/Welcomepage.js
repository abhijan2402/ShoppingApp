import React from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity, Button } from 'react-native'
import { shouldUseActivityState } from 'react-native-screens';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const handlePress = () => false;
const Welcomepage = ({navigation}) => {

  return (
    <View style={styles.fullback}>
      <Image
        style={styles.imageitem}
        source={require('../../Assets/store.jpg')}
      />
      <Text style={styles.header}>Welcome To The Postdab</Text>
      <Text style={styles.quote}>Explore New Things With Us</Text>
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30 }}>
        <TouchableOpacity style={styles.btnContainer1} onPress={()=>navigation.navigate("Login")}>
          <Text style={[styles.text1, { color: 'white' },]}>Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContainer2} onPress={()=>navigation.navigate("Login")}>
          <Text style={[styles.text2, { color: 'black' }]}>Seller</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default Welcomepage

const styles = StyleSheet.create({
  fullback: {
    backgroundColor: '#3063A0',
    height: windowHeight
  },
  imageitem: {
    alignContent: "center",
    margin: 20,
    borderRadius: 20,
    height: '55%',
    width: '90%'
  },
  header: {
    fontSize: 28,
    color: 'white',
    fontWeight: '900',
    margin: 25,
    textAlign: "center"
  },
  quote: {
    color: 'white',
    fontSize: 21,
    fontWeight: '500',
    textAlign: "center"
  },
  btnContainer1: {
    width: 120,
    height: 53,
    backgroundColor: "#00478F",

    alignItems: "center",
    justifyContent: "center",
    // marginVertical:2,
    // marginHorizontal:20,
    borderWidth: 2,
    borderColor: '#F5FAFF',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,

  },
  btnContainer2: {
    width: 120,
    height: 53,

    backgroundColor: '#F1F1F1',
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: '#F5FAFF',
    // marginVertical:2,
    // marginHorizontal:20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  text1: {
    fontWeight: "bold",

  },
  text2: {
    fontWeight: "bold",

  },
})