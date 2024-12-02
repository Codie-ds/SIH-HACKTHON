import {Platform, StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import NavView from './component/NavView';
import CameraPanel from './component/CameraPanel';
import Translation from './component/Translation';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <NavView />
      <CameraPanel />
      <Translation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "space-between"
  }
});
