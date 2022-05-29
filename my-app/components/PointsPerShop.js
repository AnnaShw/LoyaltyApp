import React from "react";
import { SafeAreaView, StyleSheet, View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseMain";
import ShopInfo from "./ShopInfo";

export default function PointsPerShop() {
  const [shopsData, setShopsData] = useState([]);

  useEffect(() => {
    db.collection("Shops").onSnapshot((snapshot) => {
      let docs = snapshot.docs;
      let temp1 = docs.map((doc) => [helpFunc(doc)]);
      console.log(temp1[0][0]);
      setShopsData(...shopsData, temp1[0][0]);
    });
    console.log(shopsData);
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
  return (
    <SafeAreaView style={styles.view}>
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
  view:{
    alignItems: "center",
    flex:1,
    justifyContent:"space-evenly"
  }
});
