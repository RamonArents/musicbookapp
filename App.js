import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from "react-native";
import Card from "./components/Card";
import SearchComponent from "./components/Search";

export default function App() {

  //TODO: Voorbeeld data voor de style. Uiteindelijk moet dit met een API gaan werken.
  const data = [
    { id: "1", title: "Wisen Rosen", book: "Keyboard speel je zo", blz: "10" },
    { id: "2", title: "Apache", book: "New West", blz: "20" },
    { id: "3", title: "Sweet Caroline", book: "Neil Diamond", blz: "130" },
    { id: "4", title: "Wisen Rosen", book: "Keyboard speel je zo", blz: "10" },
    { id: "5", title: "Apache", book: "New West", blz: "20" },
    { id: "6", title: "Sweet Caroline", book: "Neil Diamond", blz: "130" },
    { id: "7", title: "Apache", book: "New West", blz: "20" },
  ];

  const handleSearch = (searchText) => {
    console.log("Search Text:", searchText);
    // TODO: Moet de cards gaan zoeken
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Muziek boeken</Text>
      </View>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <SearchComponent onSearch={handleSearch} />
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Card
                  title={item.title}
                  description={"Boek: " + item.book}
                  blz={"blz " + item.blz}
                />
              )}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.flatlist}
            />
            {/* Trucje om het laatste item in de list zichtbaar te houden */}
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
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
  },
  header: {
    width: "100%",
    height: 100,
    backgroundColor: "#1d3275",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20, // Adjust this value if you need more space for status bar
  },
  headerText: {
    color: "white",
    fontSize: 18,
  },
  flatlist: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  hidden:{
    opacity: 0
  }
});
