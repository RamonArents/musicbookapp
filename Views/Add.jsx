import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import styles from "../styles/Style";

export default function Add() {
  return (
    <View style={styles.flex1}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={styles.background}
      >
        <View style={[styles.overlay, styles.overlayPosition]}>
          <View style={styles.form}>
            <Text style={[styles.labels, styles.colorWhite]}>Titel:</Text>
            <TextInput style={styles.input} placeholder="Titel" />
            <Text style={[styles.labels, styles.colorWhite]}>Boek:</Text>
            <TextInput style={styles.input} placeholder="Boek" />
            <Text style={[styles.labels, styles.colorWhite]}>Bladzijde:</Text>
            <TextInput style={styles.input} placeholder="Blz" />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.colorWhite}>Toevoegen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
