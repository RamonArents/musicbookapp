import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import styles from "../styles/AddAndEdit";

export default function Edit({ route }) {
  const { title, book, blz } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <View style={styles.form}>
            <Text style={[styles.labels, styles.colorWhite]}>Titel:</Text>
            <TextInput style={styles.input} placeholder="Titel" value={title} />
            <Text style={[styles.labels, styles.colorWhite]}>Boek:</Text>
            <TextInput style={styles.input} placeholder="Boek" value={book} />
            <Text style={[styles.labels, styles.colorWhite]}>Bladzijde:</Text>
            <TextInput style={styles.input} placeholder="Blz" value={blz} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.colorWhite}>Bewerken</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
