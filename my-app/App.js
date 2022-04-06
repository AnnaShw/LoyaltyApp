import { StatusBar } from "expo-status-bar";
import { StyleSheet ,View,Text} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MainContainer from './navigation/mainContainerNav';

export default function App() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#1a1941", "#26246e", "#372f9d", "#4d37ce", "#693dff"]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <MainContainer style={styles.navContainer}/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
