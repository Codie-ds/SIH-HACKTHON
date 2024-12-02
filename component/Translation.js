import { View, Text, StyleSheet } from 'react-native'
import { React, useState } from 'react'
import { Picker } from '@react-native-picker/picker';

export default function () {
  const [selectedValue, setSelectedValue] = useState("Hindi");  

  return (
    <View style={style.TransContainer}>
       <View style={style.selectTrans}>
        <Text style={style.ISLSec}>ISL</Text>
        <Text style={{fontSize: 35, fontWeight: "700"}}>&#8644;</Text>

        <View style={style.outputLanguage}>
            <Text style={{fontSize: 17}}>{selectedValue}</Text>
            <Picker 
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            style={{height:30, width:50}}>
                <Picker label='Select Language' />
                <Picker.Item label='English' value="English"/>
                <Picker.Item label='Hindi' value="Hindi"/>
                <Picker.Item label='Gujarati' value="Gujarati"/>
                <Picker.Item label='Marathi' value="Marathi"/>
                <Picker.Item label='Tamil' value="Tamil"/>
                <Picker.Item label='Telugu' value="Telugu"/>
                <Picker.Item label='Bihari' value="Bihari"/>
                <Picker.Item label='Bengali' value="Bengali"/>
                <Picker.Item label='Malayalam' value="Malayalam"/>
                <Picker.Item label='Sindhi' value="Sindhi"/>
                <Picker.Item label='Punjabi' value="Punjabi"/>
                <Picker.Item label='' value=""/>
            </Picker>
        </View>
       </View>

       <View style={style.TranslateSec}>
        <Text style={{fontSize: 15, fontWeight: "400"}}>वास्तविक समय अनुवाद</Text>
       </View>
    </View>
  )
}

const style = StyleSheet.create({
    TransContainer: {
        flex: 0.712,
        backgroundColor: "#FFD3AC",
        width: "100%",
        height: "100%",
        borderTopStartRadius: "5%",
        borderTopEndRadius: "5%",
        alignItems: "center",
        flexDirection: "column",
        gap: "10%"
    },

    selectTrans:{
        paddingTop: 10,
        flex: 0,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center"       
    },  

    ISLSec: {
        padding: 8,
        height: "80%",
        backgroundColor: "#FFEEEE",
        paddingRight: 15,
        paddingLeft: 15,
        fontSize: 17,
        borderRadius: 10
    },  

    outputLanguage:{
        flex: 0,
        flexDirection: "row",
        padding: 8,
        height: "80%",
        backgroundColor: "#FFEEEE",
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 17,
        borderRadius: 10
    },

    TranslateSec: {
        flex: 0,
        height: "60%",
        width: "90%",
        borderRadius: "5%",
        backgroundColor: "#FFEEEE",
        padding: 20,
    },
}); 