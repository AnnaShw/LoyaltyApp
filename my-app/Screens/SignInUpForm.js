import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Paragraph from "../components/Paragraph";
import Header from "../components/Header";
import Button from "../components/Button";
import { View } from "react-native";
import SignUpScreen from "./SignUpScreen";
import LogInScreen from "./LogInScreen";
import { useState, useEffect } from "react";
import { theme } from "../assets/theme";

export default function SignInUpForm({ state, descriptors, navigation }) {
  const [SignInModelOpen, setSignInModelOpen] = useState(false);
  const [SignUpModelOpen, setSignUpModelOpen] = useState(false);
  const [generalFormOpen, setGeneralFormOpen] = useState(true);

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#1a1941", "#26246e", "#372f9d", "#4d37ce", "#693dff"]}
      style={styles.container}
    >
      {generalFormOpen && (
        <View>
          <Header>Login/SignUp</Header>
          <Paragraph>
            Hello! It seems your are new, please sign up for future use. If you
            already have an account-sign in.
          </Paragraph>
          <View style={styles.ButtonsContainer}>
            <Button
              mode="contained"
              onPress={() => {
                setSignInModelOpen(true);
                setGeneralFormOpen(false);
              }}
            >
              Sign In
            </Button>
            <Button
              mode="outlined"
              onPress={() => {
                setSignUpModelOpen(true);
                setGeneralFormOpen(false);
              }}
            >
              Sign Up
            </Button>
          </View>
        </View>
      )}
      {SignInModelOpen && <LogInScreen navigation={navigation} closeSignUp={SignUpModelOpen}/>}
      {SignUpModelOpen && <SignUpScreen navigation={navigation} closeSignIn={SignInModelOpen}/>}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
