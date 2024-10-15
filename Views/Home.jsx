import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";
import SearchComponent from "../components/Search";
import { Icon } from "@rneui/themed";
import mainStyle from "../styles/Style";
import { openDatabase, selectMusicBooks } from "../controllers/db";
import { useFocusEffect } from "@react-navigation/native";

export default function Home({ navigation }) {
  //State for holding book data and loading indicator
  const [bookArray, setBookArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true); // Check if component is mounted

  //Function to load the music books from the db
  const loadMusicBooks = async () => {
    try {
      //get data from db
      const db = await openDatabase();
      let books = await selectMusicBooks(db);
      //set the data into the array when component is mounted
      if (isMounted.current) {
        setBookArray(books);
      }
    } catch (error) {
      console.error("Error loading books: ", error);
    } finally {
      //No loading indicator when finished and component is mounted
      if (isMounted.current) {
        setLoading(false);
      }
    }
    //TODO: This prints correctly when returning to page, but not in the useFocusEffect callback. Have to find out to refresh data correctly
    console.log(bookArray);
  };

  //Call function loadMusicBooks in useEffect
  useFocusEffect(
    React.useCallback(() => {
      console.log("mounted");
      isMounted.current = true;
      loadMusicBooks();

      //Cleanup when component unmounts
      return () => {
        console.log("unmounted");
        isMounted.current = false;
      };
    }, [])
  );

  //Loading indicator
  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Books...</Text>
      </View>
    );
  }

  //To Add page
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
          <SearchComponent data={bookArray} navigation={navigation} />
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
