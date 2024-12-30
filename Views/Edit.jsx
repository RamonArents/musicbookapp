import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import styles from "../styles/Style";
import { openDatabase, updateBook } from "../controllers/db";
import { useEffect, useState } from "react";
import Toast from "react-native-root-toast";

export default function Edit({ route }) {
  //Route variables
  const { id, title, book, blz } = route.params;
  //State variables
  const [updateTitle, setTitle] = useState(title);
  const [updateTheBook, setBook] = useState(book);
  const [updateBlz, setBlz] = useState(blz);

  //Function to update a record from the database
  const handleOnPress = async () => {
    try {
      //Call openDatabase from db.js
      const db = await openDatabase();

      //Call update book from db.js
      await updateBook(db, id, updateTitle, updateTheBook, updateBlz);

      //Show success message
      Toast.show("Boek succesvol bijgewerkt", {
        duration: Toast.durations.LONG,
        backgroundColor: "#047838",
      });
    } catch (error) {
      //Show error
      Toast.show("Er ging iets mis. Foutmelding: " + error, {
        duration: Toast.durations.LONG,
        backgroundColor: "#d10202",
      });
      console.error("Error updating book: ", error);
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
              value={updateTitle}
              onChangeText={setTitle}
            />
            <Text style={[styles.labels, styles.colorWhite]}>Boek:</Text>
            <TextInput
              style={styles.input}
              placeholder="Boek"
              value={updateTheBook}
              onChangeText={setBook}
            />
            <Text style={[styles.labels, styles.colorWhite]}>Bladzijde:</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              placeholder="Blz"
              value={`${updateBlz}`}
              onChangeText={setBlz}
            />
            <TouchableOpacity style={styles.button} onPress={handleOnPress}>
              <Text style={styles.colorWhite}>Bewerken</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
