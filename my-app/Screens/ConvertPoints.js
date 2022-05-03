import React from "react";
import { StyleSheet, View, Text, Picker } from "react-native";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import { LinearGradient } from "expo-linear-gradient";
import MyPicker from "../components/MyPicker";
import Button from "../components/Button";

export default function ConvertPoints() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#1a1941", "#26246e", "#372f9d", "#4d37ce", "#693dff"]}
      style={styles.container}
    >
      <Header>Convert your Points</Header>
      <View>
        <Text style={styles.textbig}>
          How many points do you want to convert?
        </Text>
        <TextInput
          label="Points"
          returnKeyType="next"
          autoCapitalize="none"
          keyboardType="number"
        />
      </View>
      <View>
        <Text style={styles.textbig}>Choose the brands : </Text>
        <View style={styles.row}>
          <Text style={styles.textdef}>From</Text>{" "}
          <Text style={styles.textdef}>To</Text>
        </View>
        <View style={styles.row}>
          <MyPicker></MyPicker>
          <MyPicker></MyPicker>
        </View>

        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => {
            setSignUpModelOpen(true);
            setGeneralFormOpen(false);
          }}
        >
          Convert
        </Button>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  myview: {
    bottom: 70,
    color: "white",
  },
  textdef: {
    flex: 1,
    color: "#fff",
    alignSelf: "center",
    fontSize: 17,
    paddingLeft: "5%",
    color: "orange",
  },
  textbig: {
    flex: 1,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
    paddingLeft: "5%",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  button: { alignSelf: "center", paddingtop: 30 },
});
