import {
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ImageBackground,
  } from "react-native";
  
  export default function Edit({route}) {

    const { title, book, blz} = route.params;

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/background.jpg")}
          style={styles.background}
        >
          <View style={styles.overlay}>
            <View style={styles.form}>
              <Text style={styles.labels}>Titel:</Text>
              <TextInput style={styles.input} placeholder="Titel" value={title} />
              <Text style={styles.labels}>Boek:</Text>
              <TextInput style={styles.input} placeholder="Boek" value={book} />
              <Text style={styles.labels}>Bladzijde:</Text>
              <TextInput style={styles.input} placeholder="Blz" value={blz} />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Bewerken</Text>
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
  