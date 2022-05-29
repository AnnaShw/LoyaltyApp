import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { theme } from "../assets/theme";

export default function ShopInfo(props) {
  return (
    <Card style={styles.cardContainer}>
      <Text style={styles.itemName}>{props.data.shopName}</Text>
      <Text style={styles.itemCode}>{props.data.pointUpdate}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal:15,
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
