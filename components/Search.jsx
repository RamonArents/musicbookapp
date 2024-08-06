import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Card from "./Card";
import { Ionicons } from "@expo/vector-icons";

export default function SearchComponent({ data, navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (text) => {
    if (typeof text !== "string") return;

    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.book.toLowerCase().includes(text.toLowerCase()) ||
        item.blz.toLowerCase().includes(text.toLowerCase())
    );
    setSearchQuery(text);
    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder="Zoeken..."
          onChangeText={handleSearch}
          value={searchQuery}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              description={"Boek: " + item.book}
              blz={"blz " + item.blz}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatlist}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flex: 1,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 16,
    marginTop: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
  },
  button: {
    padding: 8,
  },
  flatlist: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});
