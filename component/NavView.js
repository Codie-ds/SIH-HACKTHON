import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function NavView() {
  return (
    <View style={styles.container}>
      <Image source={require('../Images/hamburger.png')} style={styles.resizeHum}/>
      <Text style={{fontSize: 18, color:"red", fontWeight: "800"}}>
        Anokhi 
        <Text style={{fontWeight: "400"}}> Bhasha</Text>
      </Text>
      <Image source={require('../Images/profile-img.png')} style={styles.resizeProfile}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: '#fff',
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-around",
    },
  
    profileImg:{
      height: 25,
      width: 25,
      backgroundColor: "#000",
      borderRadius: "50%",
      elevation: 20
    },
    resizeHum: {
      height: 25,
      width: 25
    },
    resizeProfile: {
      height: 45,
      width: 32
    }
});