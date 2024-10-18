import { openDatabase, deleteBook } from "../controllers/db";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Modal,
  Pressable,
} from "react-native";
import mainStyle from "../styles/Style";
import Toast from "react-native-root-toast";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Delete({ route }) {
  //Route variables
  const navigation = useNavigation();
  const { id, title, book, blz } = route.params;
  //State variables
  const [modalVisible, setModalVisible] = useState(false);

  //Open and close modal
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  //Function to delete a record
  const handleOnPress = async () => {
    try {
      //Call openDatabase from db.js
      const db = await openDatabase();

      //Call deleteBook from db.js
      await deleteBook(db, id);

      //Show succes message
      Toast.show("Boek succesvol verwijderd.", {
        duration: Toast.durations.LONG,
        backgroundColor: "#047838",
      });

      //Return to homepage on succes
      navigation.navigate("Home");
    } catch (error) {
      //Show error message
      Toast.show("Er ging iets mis. Foutmelding: " + error, {
        duration: Toast.durations.LONG,
        backgroundColor: "#d10202",
      });
      console.error("Error deleting book: ", error);
    }
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
            mainStyle.flex1,
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
            <TouchableOpacity style={mainStyle.button} onPress={openModal}>
              <Text style={mainStyle.colorWhite}>Verwijderen</Text>
            </TouchableOpacity>

            {/* Extra confirmation if the user really wants to delete */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={closeModal}
            >
              <Pressable
                style={[mainStyle.flex1, styles.modalOverlay]}
                onPress={closeModal}
              >
                <View style={styles.modalContainer}>
                  <Text style={[styles.title, mainStyle.colorWhite]}>
                    Weet je echt zeker dat je dit liedje wil verwijderen?
                  </Text>
                  <Text style={[styles.message, mainStyle.colorWhite]}>
                    {"\n"}
                    Titel: {title}
                    {"\n\n"}
                    Boek: {book}
                    {"\n\n"}
                    Bladzijde: {blz}
                    {"\n"}
                  </Text>

                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={closeModal}
                      style={[mainStyle.flex1, styles.cancelButton]}
                    >
                      <Text style={mainStyle.colorWhite}>Nee</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleOnPress}
                      style={[mainStyle.flex1, styles.okButton]}
                    >
                      <Text style={mainStyle.colorWhite}>Ja</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Pressable>
            </Modal>
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
  modalOverlay: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    backgroundColor: "#1d3275",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    padding: 10,
    backgroundColor: "#ed1515",
    borderRadius: 5,
    marginRight: 10,
    alignItems: "center",
  },
  okButton: {
    padding: 10,
    backgroundColor: "#0ec7e8",
    borderRadius: 5,
    marginLeft: 10,
    alignItems: "center",
  },
});
