import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TotalPoints from "../components/TotalPoints";
import PointsPerShop from "../components/PointsPerShop";
import SignInUpForm from "../Screens/SignInUpForm";
import { useState, useEffect } from "react";
import { theme } from "../assets/theme";
import { auth } from "../firebase/firebaseMain";
import { TouchableOpacity } from "react-native-web";

export default function Home({ userLogIn }) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#1a1941", "#26246e", "#372f9d", "#4d37ce", "#693dff"]}
      style={styles.container}
    >
      {userLogIn && (
        <SafeAreaView style={styles.points}>
          <Text style={styles.logOut}>LOGOUT</Text>{" "}
          <Text style={styles.text}>Current total balance of points:</Text>
          <TotalPoints>{2048}</TotalPoints>
          <TouchableOpacity
            style={{ backgroundColor: "white" }}
            onPress={() => {
              auth
                .signOut()
                .then(() => {
                  // Sign-out successful.
                })
                .catch((error) => {
                  // An error happened.
                });
            }}
          ></TouchableOpacity>
          <PointsPerShop /> 
        </SafeAreaView>
      )}
      {!userLogIn && <SignInUpForm />}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  points: {
    marginVertical: 5,
  },
  logOut: {
    color: theme.colors.gray,
    fontWeight: "bold",
    alignSelf: "center",
    backgroundColor: "#beefee9c",
    marginVertical: 30,
    textAlign: "center",
    padding: 10,
    width:'100%',
    borderRadius: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 25,
    color: theme.colors.orange,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
