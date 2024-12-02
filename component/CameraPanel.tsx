import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Button, Text, TouchableOpacity } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

export default function CameraPanel() {
  const [hasPermission, setHasPermission] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [permission, requestPermission] = useCameraPermissions(); 

  if(!permission){
    return <View />
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.panelWindow}>
      <View style={styles.viewBar}>
        {isCameraOn ? (
          <CameraView style={styles.camera} facing={'front'}>
    
          </CameraView>
        ) : (
          <Text style={styles.textFeed}>Camera is off</Text>
        )}
      </View>
      <View style={styles.stopViewBar}>
        {isCameraOn ? (
          <Button
            title="Stop Camera"
            color="red"
            onPress={() => 
              setIsCameraOn(false)
            } // Turn off the camera
          />
        ) : (
          <Button
            title="Start Camera"
            color="blue"
            onPress={() => {
              setIsCameraOn(true)
            }} // Turn on the camera
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  panelWindow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBar: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden'
  },
  textFeed: {
    color: 'pink',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  stopViewBar: {
    paddingVertical: 10,
  },
  camera: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    borderRadius: '10%'
  },
});