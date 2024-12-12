import React, { useState } from 'react';
import {
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import NavView from './component/NavView';
import CameraPanel from './component/CameraPanel';
import Translation from './component/Translation';
import TextToISL from './component/TextToISL';

const App: React.FC = () => {
  const [screen, setScreen] = useState<string>('home');

  const renderContent = () => {
    switch (screen) {
      case 'islToText':
        return (
          <>
            <Button title="Back" onPress={() => setScreen('home')} />
            <NavView />
            <CameraPanel />
            <Translation />
          </>
        );
      case 'textToIs':
        return (
          <>
            <Button title="Back" onPress={() => setScreen('home')} />
            <View style={styles.centeredView}>
              <TextToISL />
            </View>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {screen === 'home' ? (
        <View style={styles.buttonContainer}>
          <Button title="Text to ISL" onPress={() => setScreen('textToIs')} />
          <Button title="ISL to Text" onPress={() => setScreen('islToText')} />
        </View>
      ) : (
        renderContent()
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    maxWidth: '100%',
    maxHeight: '100%',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
