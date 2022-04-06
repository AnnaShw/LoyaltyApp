import * as React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

// Screens
import ConvertPoints from "../Screens/ConvertPoints";
import HomeScreen from "../Screens/Home";

//Screen names
const convertPointsName = "Convert points";
const homeScreen = "home";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#1a1941", "#26246e", "#372f9d", "#4d37ce", "#693dff"]}
      style={styles.container}
    >
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeScreen}
          
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeScreen) {
                iconName = focused ? "home" : "home-outline";
              } else if (rn === convertPointsName) {
                iconName = focused
                  ? "git-compare-outline"
                  : "git-compare-outline";
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#f59842",
            tabBarInactiveTintColor: "black",
            tabBarLabelStyle: {
              paddingBottom: 10,
              fontSize: 10,
            },
            tabBarStyle: [
              {
                display: "flex",
                backgroundColor: "transparent",
              },
              null,
            ],
          })}
        >
          <Tab.Screen name={homeScreen} component={HomeScreen} options = {{headerShown: false}}/>
          <Tab.Screen name={convertPointsName} component={ConvertPoints} options = {{headerShown: false}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});