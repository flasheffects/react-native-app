import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Details from "../screens/Details";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          headerTitle: route.params.name,
          headerShown: true,
        })}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
