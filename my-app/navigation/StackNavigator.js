import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import useAuth from "./hooks/useAuth";
import AddApartment from "./screens/AddApartment";
import Home from "../Screens/Home";
import LoginScreen from "../Screens/LoginScreen";
import SignInUpForm from "../Screens/SignInUpForm";
import LogInScreen from "../Screens/LogInScreen";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignInUpForm" component={SignInUpForm} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
