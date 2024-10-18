import { openDatabase, deleteBook } from "../controllers/db";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Alert,
} from "react-native";
import mainStyle from "../styles/Style";
import Toast from "react-native-root-toast";
import { useNavigation } from "@react-navigation/native";

export default function Delete({ route }) {
  const navigation = useNavigation();
  const { id, title, book, blz } = route.params;

  const handleOnPress = async () => {
    try {
      const db = await openDatabase();

      await deleteBook(db, id);

      console.log("Book deleted succesfully");
      Toast.show("Boek succesvol verwijderd.", {
        duration: Toast.durations.LONG,
        backgroundColor: "#047838",
      });

      navigation.navigate("Home");
    } catch (error) {
      Toast.show("Er ging iets mis. Foutmelding: " + error, {
        duration: Toast.durations.LONG,
        backgroundColor: "#d10202",
      });
      console.error("Error deleting book: ", error);
    }
  };

  const confirmDelete = () => {
    Alert.alert(
      "Verwijder boek",
      `Weet je zeker dat je dit boek wilt verwijderen?\n\n${title} \n ${book} \n ${blz}`,
      [
        {
          text: "Nee",
          onPress: () => console.log("Cancel pressed"),
          style: "cancel",
        },
        { text: "Ja", onPress: () => handleOnPress() },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={mainStyle.flex1}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={mainStyle.background}
      >
        <View
          style={[
            mainStyle.overlay,
            styles.overlayDelete,
            styles.overlayPosition,
          ]}
        >
          <View style={mainStyle.form}>
            <Text style={[mainStyle.labels, mainStyle.colorWhite]}>
              Weet je zeker dat je dit liedje wil verwijderen?
            </Text>
            <View style={styles.deleteTextContainer}>
              <Text style={[styles.deleteText, mainStyle.colorWhite]}>
                Titel: {title}
              </Text>
              <Text style={[styles.deleteText, mainStyle.colorWhite]}>
                Boek: {book}
              </Text>
              <Text style={[styles.deleteText, mainStyle.colorWhite]}>
                Bladzijde: {blz}
              </Text>
            </View>
            <TouchableOpacity style={mainStyle.button} onPress={confirmDelete}>
              <Text style={mainStyle.colorWhite}>Verwijderen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  overlayDelete: {
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  deleteTextContainer: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    padding: 10,
    margin: 10,
    backgroundColor: "#000",
  },
  deleteText: {
    lineHeight: 45,
    fontSize: 25,
    color: "#fff",
  },
});
