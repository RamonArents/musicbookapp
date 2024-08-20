import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import mainStyle from "../styles/Style";

export default function Header({ navigation, title }) {
  return (
    <View style={styles.header}>
      <View style={[mainStyle.flex1, styles.flexStart]}>
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={styles.centerContainer}>
        <Text style={[styles.headerText, mainStyle.colorWhite, styles.flexStart]}>{title}</Text>
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
  centerContainer: {
    flex: 1.6,
  },
  headerText: {
    fontSize: 18,
  },
  flexStart:{
    alignItems: "flex-start",
  }
});
