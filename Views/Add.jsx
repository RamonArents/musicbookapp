import {
  openDatabase,
  insertBook,
} from "../controllers/db";
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import styles from "../styles/Style";
import { useState } from "react";


export default function Add() {
  const [title, setTitle] = useState("");
  const [book, setBook] = useState("");
  const [blz, setBlz] = useState("");

  const handleOnPress = async () => {
    try {
      const db = await openDatabase();
      await insertBook(db, title, book, blz);
      setTitle("");
      setBook("");
      setBlz("");

      /* TODO: Give user feedback (snackbar) that the data was saved */
      console.log("Book saved succesfully");
    } catch (error) {
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
