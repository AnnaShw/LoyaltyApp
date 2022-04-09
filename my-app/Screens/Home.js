import React from "react";
import { StyleSheet, View, Text} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TotalPoints from "../components/TotalPoints";
import PointsPerShop from "../components/PointsPerShop";
import SignInUpForm from '../Screens/SignInUpForm';
import { useState, useEffect } from "react";
import { theme } from "../assets/theme";

export default function Home() {
  const [userExist, setUserExist] = useState(false);


  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#1a1941", "#26246e", "#372f9d", "#4d37ce", "#693dff"]}
      style={styles.container}
    >
      {!userExist && (
        <View style={styles.points}>
          <Text style={styles.text}>Current total balance of points:</Text>
          <TotalPoints>{2048}</TotalPoints>
            <PointsPerShop />
        </View>
      )}
      {userExist && <SignInUpForm/>}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  points: {
    marginVertical: 100,
  },
  text:{
    fontSize:25,
    color: theme.colors.orange,
    fontWeight:'bold',
    alignSelf:'center',
  }
});
