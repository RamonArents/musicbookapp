
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Card({ title, description, blz, navigation }) {

  const handleEdit = () => {
    navigation.navigate("Edit", {title, description, blz});
  };

  const handleDelete = () => {
    navigation.navigate("Delete");
  };

  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        {/* TODO: Iconen verder uit elkaar zetten */}
        <Icon style={styles.icons} name="edit" size={30} color="white" onPress={handleEdit} />
        <Icon style={styles.icons} name="trash" size={30} color="white" onPress={handleDelete} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.description}>{blz}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1d3275",
    borderRadius: 8,
    marginBottom: 16,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color:"white",
  },
  description: {
    fontSize: 16,
    color:"white",
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 10,
    paddingRight: 10,
  },
  icons: {
    paddingLeft: 10,
  },
  textContainer: {
    flex: 1,
    padding: 16,
    marginTop: -30,
  },
});
