import { openDatabase, insertBook } from "../controllers/db";
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import styles from "../styles/Style";
import { useState } from "react";
import Toast from "react-native-root-toast";

export default function Add() {
  //State variables
  const [title, setTitle] = useState("");
  const [book, setBook] = useState("");
  const [blz, setBlz] = useState("");

  //Function to insert data into the database
  const handleOnPress = async () => {
    try {
      //Call openDatabase from db.js
      const db = await openDatabase();
      //Call insertBook from db.js
      await insertBook(db, title, book, blz);
      //Clear fields
      setTitle("");
      setBook("");
      setBlz("");

      //Show success message
      Toast.show("Boek succesvol toegevoegd", {
        duration: Toast.durations.LONG,
        backgroundColor: "#047838",
      });
    } catch (error) {
      //Show error
      Toast.show("Er ging iets mis. Foutmelding: " + error, {
        duration: Toast.durations.LONG,
        backgroundColor: "#d10202",
      });
      console.error("Error saving book: ", error);
    }
  };

  return (
    <View style={styles.flex1}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={styles.background}
      >
        <View style={[styles.overlay, styles.overlayPosition]}>
          <View style={styles.form}>
            <Text style={[styles.labels, styles.colorWhite]}>Titel:</Text>
            <TextInput
              style={styles.input}
              placeholder="Titel"
              value={title}
              onChangeText={setTitle}
            />
            <Text style={[styles.labels, styles.colorWhite]}>Boek:</Text>
            <TextInput
              style={styles.input}
              placeholder="Boek"
              value={book}
              onChangeText={setBook}
            />
            <Text style={[styles.labels, styles.colorWhite]}>Bladzijde:</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              placeholder="Blz"
              value={blz}
              onChangeText={setBlz}
            />
            <TouchableOpacity style={styles.button} onPress={handleOnPress}>
              <Text style={styles.colorWhite}>Toevoegen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
