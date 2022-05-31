import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button";
import { db } from "../firebase/firebaseMain";
import RNPickerSelect from "react-native-picker-select";

export default function ConvertPoints() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [points, setPoints] = useState(0);
  const [shopsData, setShopsData] = useState([]);

  useEffect(() => {
    db.collection("Shops").onSnapshot((snapshot) => {
      let docs = snapshot.docs;
      let temp1 = docs.map((doc) => [helpFunc(doc)]);
      setShopsData(...shopsData, temp1[0][0]);
    });
  }, []);

  const helpFunc = (data) => {
    let t = data.data();
    let shops = [];
    for (let k in t) {
      shops.push({
        shopName: t[k][0],
        pointUpdate: t[k][1],
      });
    }
    return shops;
  };

  const convert = () => {
    //AmericanEagle, HM,200
    let fromShop = {};
    let toShop = {};

    shopsData.forEach((shop) => {
      shop.shopName === from
        ? (fromShop = shop)
        : shop.shopName === to
        ? (toShop = shop)
        : {};
    });

    if (fromShop.pointUpdate >= points) {
      toShop.pointUpdate += points;

      fromShop.pointUpdate -= points;
    } else {
      prompt.alert("ERROR", "no enought points");
    }
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#1a1941", "#26246e", "#372f9d", "#4d37ce", "#693dff"]}
      style={styles.container}
    >
      <Header>Convert your Points</Header>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View>
          <TextInput
            label="Enter number of points for convertion"
            keyboardType="numeric"
            value={points}
            onChangeText={setPoints}
          ></TextInput>
        </View>
      </TouchableWithoutFeedback>

      <View>
        <Text style={styles.textbig}>Choose the brands : </Text>
      </View>
      {shopsData && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
            marginHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.textdef}>From : </Text>
            <View style={styles.containerPicker}>
              <RNPickerSelect
                placeholder={{
                  label: "Select shop",
                  value: null,
                }}
                items={shopsData.map((val) => {
                  return { label: val.shopName, value: val.shopName };
                })}
                onValueChange={(value) => setFrom(value)}
                style={pickerSelectStyles}
              />
            </View>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.textdef}>To : </Text>
            <View style={styles.containerPicker}>
              <RNPickerSelect
                placeholder={{
                  label: "Select shop",
                  value: null,
                }}
                items={shopsData.map((val) => {
                  return { label: val.shopName, value: val.shopName };
                })}
                onValueChange={(value) => setTo(value)}
                style={pickerSelectStyles}
              />
            </View>
          </View>
        </View>
      )}
      <Button
        style={styles.button}
        mode="outlined"
        onPress={() =>
          convert()
            .then(
              Alert.alert(
                "Successful Transfer",
                "The transaction completed successfully",
                [{ text: "OK" }]
              )
            )
            .catch((error) => {
              // An error happened.
            })
        }
      >
        <Text>Convert</Text>
      </Button>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerPicker: {
    paddingTop: 20,
    paddingBottom: 5,
    alignSelf: "center",
    flexDirection: "row",
  },
  myview: {
    bottom: 70,
    color: "white",
  },
  textdef: {
    flex: 1,
    alignSelf: "center",
    fontSize: 17,
    paddingBottom: 20,
    color: "orange",
  },
  textbig: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 25,
  },
  button: { alignSelf: "center" },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
