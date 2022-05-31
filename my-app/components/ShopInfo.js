import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { View } from "react-native-web";
import { theme } from "../assets/theme";

export default function ShopInfo(props) {
  return (
    <Card style={styles.cardContainer}>
      <View>
        <Text style={styles.itemName}>
          {props.data.shopName + ": " + props.data.pointUpdate}
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: theme.colors.cyan,
    alignSelf: "center",
  },
  itemName: {
    fontSize: 20,
    color: theme.colors.gray,
    fontWeight: "600",
    alignSelf: "center",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 15,
    color: theme.colors.gray,
    alignSelf: "center",
  },
});
