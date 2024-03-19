import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Card from "./components/Card";
import SearchComponent from "./components/Search";
import { Icon } from "@rneui/themed";

export default function App() {
  
  const [searchQuery, setSearchQuery] = useState("");

  //TODO: Voorbeeld data voor de style. Uiteindelijk moet dit met een API gaan werken.
  const [data, setData] = useState([
    { id: "1", title: "Wisen Rosen", book: "Keyboard speel je zo", blz: "10" },
    { id: "2", title: "Apache", book: "New West", blz: "20" },
    { id: "3", title: "Sweet Caroline", book: "Neil Diamond", blz: "130" },
    { id: "4", title: "Wisen Rosen", book: "Keyboard speel je zo", blz: "10" },
    { id: "5", title: "Apache", book: "New West", blz: "20" },
    { id: "6", title: "Sweet Caroline", book: "Neil Diamond", blz: "130" },
    { id: "7", title: "Apache", book: "New West", blz: "20" },
  ]);

  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (searchText) => {
    console.log("Search Text:", searchText);
    // TODO: Moet de cards gaan zoeken
    if(searchText === ""){
      setFilteredData(data);
    } else {
      const newData = data.filter(item => {
        const itemName = item.title.toLowerCase();
        const text = searchText.toLowerCase();
        return itemName.indexOf(text) > -1;
      });
      setFilteredData(newData);
    }
  };

  const handleOnPress = () => {
    //TODO: Link maken naar add page
    console.log("Pressed");
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
        {/* TODO: Uitzoeken hoe we gelijk kunnen zoeken als we de tekst intikken. */}
          <SearchComponent onSearch={handleSearch} value={searchQuery} />
            <FlatList
              data={filteredData}
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
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleOnPress}>
                <Icon name="add" size={24} color="white" />
              </TouchableOpacity>
            </View>
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
  buttonContainer:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end', 
    marginBottom: 25, 
    marginRight: 16,
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
    paddingTop: 20, 
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
  },
  button: {
    backgroundColor: '#1d3275', 
    width: 65,
    height: 65,
    borderRadius: 37, 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.4, 
    shadowRadius: 3, 
  },
});
