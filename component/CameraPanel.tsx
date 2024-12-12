import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Button, Text } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { CameraCapturedPicture, CameraRecordingOptions } from 'expo-camera';

export default function CameraPanel(): JSX.Element {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState<boolean | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isCameraOn, setIsCameraOn] = useState<boolean>(false);
  const cameraRef = useRef(null);

  // Request permissions for the camera and media library
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryStatus = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
      setHasMediaLibraryPermission(mediaLibraryStatus.status === 'granted');
    })();
  }, []);

  const startRecording = async () => {
    if (cameraRef.current) {
      setIsRecording(true);
      try {
        const video = await cameraRef.current.recordAsync({
          quality: Camera.Constants.VideoQuality['720p'],
        } as CameraRecordingOptions);

        console.log('Video URI:', video.uri);

        if (hasMediaLibraryPermission) {
          await MediaLibrary.createAssetAsync(video.uri);
          alert('Video saved to gallery!');
        } else {
          alert('No permission to save videos to gallery.');
        }
      } catch (error) {
        console.error('Recording error:', error);
      }
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (cameraRef.current) {
      cameraRef.current.stopRecording();
    }
  };

  if (hasCameraPermission === null) {
    return <Text>Requesting camera permissions...</Text>;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera. Please enable permissions in your settings.</Text>;
  }

  return (
    <SafeAreaView style={styles.panelWindow}>
      <View style={styles.viewBar}>
        {isCameraOn ? (
          <Camera
            style={styles.camera}
            type={CameraType.front}
            ref={cameraRef}
          />
        ) : (
          <Text style={styles.textFeed}>Camera is off</Text>
        )}
      </View>
      <View style={styles.stopViewBar}>
        {isCameraOn ? (
          isRecording ? (
            <Button title="Stop Recording" color="red" onPress={stopRecording} />
          ) : (
            <Button title="Start Recording" color="green" onPress={startRecording} />
          )
        ) : (
          <Button
            title="Start Camera"
            color="blue"
            onPress={() => setIsCameraOn(true)}
          />
        )}
        {isCameraOn && (
          <Button
            title="Stop Camera"
            color="red"
            onPress={() => setIsCameraOn(false)}
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
    overflow: 'hidden',
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
    borderRadius: 10,
  },
});
