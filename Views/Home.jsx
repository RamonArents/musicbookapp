import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import SearchComponent from "../components/Search";
import { Icon } from "@rneui/themed";

export default function Home({ navigation }) {
  //TODO: Voorbeeld data voor de style. Uiteindelijk moet dit met een API gaan werken.
  const [data] = useState([
    { id: "1", title: "Wisen Rosen", book: "Keyboard speel je zo", blz: "10" },
    { id: "2", title: "Apache", book: "New West", blz: "20" },
    { id: "3", title: "Sweet Caroline", book: "Neil Diamond", blz: "130" },
    { id: "4", title: "Wisen Rosen", book: "Keyboard speel je zo", blz: "10" },
    { id: "5", title: "Apache", book: "New West", blz: "20" },
    { id: "6", title: "Sweet Caroline", book: "Neil Diamond", blz: "130" },
    { id: "7", title: "Apache", book: "New West", blz: "20" },
  ]);

  const handleOnPress = () => {
    navigation.navigate("Add");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <SearchComponent data={data} navigation={navigation} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonAdd} onPress={handleOnPress}>
              <Icon name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 25,
    marginRight: 16,
  },
  background: {
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  hidden: {
    opacity: 0,
  },
  buttonAdd: {
    backgroundColor: "#0ec7e8",
    width: 65,
    height: 65,
    borderRadius: 37,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});
