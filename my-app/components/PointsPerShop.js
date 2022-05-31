import React from "react";
import { SafeAreaView, StyleSheet, View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseMain";
import ShopInfo from "./ShopInfo";
import TotalPoints from "./TotalPoints";

export default function PointsPerShop() {
  const [shopsData, setShopsData] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  let sum = 0;

  useEffect(() => {
    //Here fetch data from db and store it in shops data that is array of objects.Where each object is specific shop
    db.collection("Shops").onSnapshot((snapshot) => {
      let docs = snapshot.docs;
      let temp1 = docs.map((doc) => [helpFunc(doc)]);
      setShopsData(...shopsData, temp1[0][0]);
      setTotalPoints(sum);
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
      sum += t[k][1];
    }
    return shops;
  };
  return (
    <SafeAreaView style={styles.view}>
      <TotalPoints>{totalPoints}</TotalPoints>
      <FlatList
        data={shopsData}
        style={styles.gridView}
        numColumns={2}
        keyExtractor={(item) => Math.random()}
        spacing={10}
        renderItem={({ item }) => <ShopInfo data={item} />}
        ContentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
  },
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-evenly",
  },
});
