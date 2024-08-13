import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";

export default function Header({ navigation, title }) {
  return (
    <View style={styles.header}>
      <View style={[styles.leftContainer, styles.flexStart]}>
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={styles.centerContainer}>
        <Text style={[styles.headerText, styles.flexStart]}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: "#1d3275",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 20,
  },
  leftContainer: {
    flex: 1,
  },
  centerContainer: {
    flex: 1.6,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
  },
  flexStart:{
    alignItems: "flex-start",
  }
});
