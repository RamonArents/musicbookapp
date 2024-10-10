import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import styles from "../styles/Style";
import { openDatabase, updateBook } from "../controllers/db";
import { useState } from "react";

export default function Edit({ route }) {
  const { id, title, book, blz } = route.params;

  const [updateTitle, setTitle] = useState(title);
  const [updateTheBook, setBook] = useState(book);
  const [updateBlz, setBlz] = useState(blz);

  const handleOnPress = async () => {
    try {
      const db = await openDatabase();

      //Check if blz is numeric and replace non-numeric characters with an empty string
      const blzInNumbers = updateBlz.replace(/[^0-9]/g,"");

      await updateBook(db, id, updateTitle, updateTheBook, blzInNumbers);

      console.log("Book updated succesfully");
      /* TODO: Give user feedback (snackbar) that the data was saved */
    } catch (error) {
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
            <TextInput style={styles.input} placeholder="Titel" value={updateTitle} onChangeText={setTitle} />
            <Text style={[styles.labels, styles.colorWhite]}>Boek:</Text>
            <TextInput style={styles.input} placeholder="Boek" value={updateTheBook} onChangeText={setBook} />
            <Text style={[styles.labels, styles.colorWhite]}>Bladzijde:</Text>
            <TextInput keyboardType="numeric" style={styles.input} placeholder="Blz" value={updateBlz} onChangeText={setBlz} />
            <TouchableOpacity style={styles.button} onPress={handleOnPress}>
              <Text style={styles.colorWhite}>Bewerken</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
