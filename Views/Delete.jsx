import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import mainStyle from "../styles/Style";

export default function Delete({ route }) {
  const { title, description, blz } = route.params;

  return (
    <View style={mainStyle.flex1}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={styles.background}
      >
        <View style={[mainStyle.overlay, mainStyle.overlayPosition]}>
          <View style={mainStyle.form}>
            <Text style={[mainStyle.labels, mainStyle.colorWhite]}>
              Weet je zeker dat je dit liedje wil verwijderen?
            </Text>
            <View style={styles.deleteTextContainer}>
              <Text style={[styles.deleteText, mainStyle.colorWhite]}>Titel: {title}</Text>
              <Text style={[styles.deleteText, mainStyle.colorWhite]}>{description}</Text>
              <Text style={[styles.deleteText, mainStyle.colorWhite]}>Bladzijde: {blz}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={mainStyle.colorWhite}>Verwijderen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
});
