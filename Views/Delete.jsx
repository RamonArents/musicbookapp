import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";

export default function Delete({ route }) {
  const { title, description, blz } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <View style={styles.form}>
            <Text style={styles.labels}>
              Weet je zeker dat je dit liedje wil verwijderen?
            </Text>
            <View style={styles.deleteTextContainer}>
              <Text style={styles.deleteText}>Titel: {title}</Text>
              <Text style={styles.deleteText}>{description}</Text>
              <Text style={styles.deleteText}>Bladzijde: {blz}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Verwijderen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  form: {
    backgroundColor: "#1d3275",
    padding: 10,
    borderRadius: 10,
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
  labels: {
    color: "#fff",
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 20,
    marginTop: 20,
    height: 50,
    backgroundColor: "#fff",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#0ec7e8",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});
