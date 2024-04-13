import Home from "./Views/Home";
import Add from "./Views/Add";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            header: () => (
              <View style={styles.header}>
                <Text style={styles.headerText}>Muziek Boeken</Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#1d3275",
              height: 100,
            },
            headerTitleStyle: {
              fontFamily: "Roboto",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          component={Home}
        />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: "#1d3275",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  headerText: {
    color: "white",
    fontSize: 18,
  },
});
