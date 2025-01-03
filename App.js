/**
 * To run to test app: npm run android
 * To run on real device as apk:
 * 1. cd in android folder
 * 2. run ./gradlew clean (optional, run only when version updates are needed)
 * 3. run ./gradlew assembleRelease
 * 4. go to android->app->build->outputs->apk
 * 5. copy the release APK to the downloads folder on the android device
 * 6. Install the APK on device by tapping on it on the device.
 * 
 * To modify the app icon:
 * 1. Update the icon.pdn in the pdn folder (not on Git)
 * 2. Replace the icon.png with the created icon (save as a png in paint.net)
 * 3. run the command: npx icon-set-creator create ./path/to/icon.png (ignore the error about IOS)
 */
import { enableScreens } from "react-native-screens";
import Home from "./Views/Home";
import Add from "./Views/Add";
import Edit from "./Views/Edit";
import Delete from "./Views/Delete";
import Header from "./components/Header";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { openDatabase, createTable } from "./controllers/db";
import { StatusBar } from "expo-status-bar";

enableScreens();

export default function App() {
  //Create db on startup of the app
  useEffect(() => {
    const setupDatabase = async () => {
      try {
        //Open database from db.js and create table if it does not exist
        const db = await openDatabase();
        createTable(db);
      } catch (error) {
        //Error message
        console.error("Failed to open database: ", error);
      }
    };
    //Function call
    setupDatabase();
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1d3275" barStyle="light-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            header: () => (
              <View style={styles.header}>
                <Text style={styles.headerText}>Muziek Boeken</Text>
              </View>
            ),
          }}
          component={Home}
        />
        <Stack.Screen
          name="Add"
          options={({ navigation }) => ({
            header: () => <Header navigation={navigation} title="Toevoegen" />,
          })}
          component={Add}
        />
        <Stack.Screen
          name="Edit"
          options={({ navigation }) => ({
            header: () => <Header navigation={navigation} title="Bewerken" />,
          })}
          component={Edit}
        />
        <Stack.Screen
          name="Delete"
          options={({ navigation }) => ({
            header: () => (
              <Header navigation={navigation} title="Verwijderen" />
            ),
          })}
          component={Delete}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: "#1d3275",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Roboto",
  },
});
