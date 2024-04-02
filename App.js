import Home  from "./Views/Home";
import Add  from "./Views/Add";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Add" component={Add} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
