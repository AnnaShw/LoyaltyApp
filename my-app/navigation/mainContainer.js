import * as React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
// Screens
import ConvertPoints from "../Screens/ConvertPoints";
import HomeScreen from "../Screens/Home";
import SignInUpForm from "../Screens/SignInUpForm";
import QrScanner from "../Screens/QrScaner";
import SignUpScreen from "../Screens/SignUpScreen";
import LogInScreen from "../Screens/LogInScreen";
import { auth } from "../firebase/firebaseMain";
//Screen names
const convertPointsName = "Convert points";
const homeScreen = "home";
const signInUpName = "Connect";
const signUpScreen = "RegisterScreen";
const logInScreen = "LogIn";
const QR = "QR";

const Tab = createBottomTabNavigator();

export default function MainContainer() {

  const [userLogIn, setUserLogIn] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUserLogIn(true)
        // ...
      } else {
        // User is signed out
        // ...   
        setUserLogIn(false)
      }
    });
  
  }, [])
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
              } else if (rn === signInUpName) {
                iconName = focused ? "ios-person" : "ios-person-outline";
              } else if (rn === QR) {
                iconName = focused
                  ? "ios-camera-outline"
                  : "ios-camera-outline";
              } else if (rn === signUpScreen) {
                iconName = focused
                  ? "ios-create-outline"
                  : "ios-create-outline";
              } else if (rn === logInScreen) {
                iconName = focused
                  ? "md-log-in"
                  : "md-log-in";
              }
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
          {userLogIn && (
            <React.Fragment>
              <Tab.Screen
                name={homeScreen}
                component={()=> <HomeScreen userLogIn={userLogIn}> </HomeScreen>  }
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name={convertPointsName}
                component={ConvertPoints}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name={QR}
                component={QrScanner}
                options={{ headerShown: false }}
              />
            </React.Fragment>
          )}
          {!userLogIn && (
            <React.Fragment>
              <Tab.Screen
                name={signInUpName}
                component={SignInUpForm}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name={signUpScreen}
                component={SignUpScreen}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name={logInScreen}
                component={LogInScreen}
                options={{ headerShown: false }}
              />
            </React.Fragment>
          )}
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
