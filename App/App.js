import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import StartScreen from "./components/StartScreen";
import HomeScreen from "./components/HomeScreen";
import PersonalInfoEditScreen from "./components/PersonalInfoEditScreen.js";
import PersonalInfoViewScreen from "./components/PersonalInfoViewScreen.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Informacion Personal (Vista)"
          component={PersonalInfoViewScreen}
        />
        <Stack.Screen
          name="Informacion Personal (Editar)"
          component={PersonalInfoEditScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
