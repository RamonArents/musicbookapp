import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import SearchComponent from "../components/Search";
import { Icon } from "@rneui/themed";
import mainStyle from "../styles/Style";
import {
  openDatabase,
  selectMusicBooks,
} from "../controllers/db";

export default function Home({ navigation }) {

  const musicBooks = async () => {
    try {
      const db = await openDatabase();
      let books = await selectMusicBooks(db);

      //console.log("Books loaded: " + books);

      //TODO: Put book in an array and load into the cards
      for(const book of books){
        console.log(book);
      }

    } catch (error) {
      console.error("Error loading books: ", error);
    }
  };

  // for(const row of allRows){
  //   console.log(row.id, row.title, row.book, row.blz);
  //   console.log("test");
  // }

  musicBooks();

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
    <View style={mainStyle.flex1}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={mainStyle.background}
      >
        <View style={mainStyle.overlay}>
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
  buttonContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 25,
    marginRight: 16,
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
