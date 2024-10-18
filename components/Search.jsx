import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Card from "./Card";
import { Ionicons } from "@expo/vector-icons";
import mainStyle from "../styles/Style";
import { useFocusEffect } from "@react-navigation/native";

export default function SearchComponent({ data, navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [refreshing, setRefreshing] = useState(false);

  const handleSearch = (text) => {
    if (typeof text !== "string") return;

    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.book.toLowerCase().includes(text.toLowerCase()) ||
        item.blz.toString().toLowerCase().includes(text.toLowerCase())
    );
    setSearchQuery(text);
    setFilteredData(filtered);
  };

  const onRefresh = () => {
    setRefreshing(true);

    //Do an empty search to reload the data
    setSearchQuery("");
    setFilteredData(data);
    setRefreshing(false);
  };

  useFocusEffect(
    useCallback(() => { 
      onRefresh();
    }, [data])
  )

  return (
    <View style={[styles.container, mainStyle.flex1]}>
      <View style={styles.searchBox}>
        <TextInput
          style={[styles.input, mainStyle.flex1]}
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
              id={item.id}
              title={item.title}
              book={item.book}
              blz={item.blz}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatlist}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
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
