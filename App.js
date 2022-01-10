import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Constants from "expo-constants";

import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
