import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Card({ title, description, blz, navigation }) {
  const handleEdit = () => {
    navigation.navigate("Edit", { title, description, blz });
  };

  const handleDelete = () => {
    navigation.navigate("Delete", { title, description, blz });
  };

  return (
    <View style={styles.card}>
      <View style={[styles.iconContainer, styles.flex1]}>
        <Icon
          style={styles.icons}
          name="edit"
          size={30}
          color="white"
          onPress={handleEdit}
        />
        <Icon
          style={styles.icons}
          name="trash"
          size={30}
          color="white"
          onPress={handleDelete}
        />
      </View>
      <View style={[styles.textContainer, styles.flex1]}>
        <Text style={[styles.title, styles.colorWhite]}>{title}</Text>
        <Text style={[styles.description, styles.colorWhite]}>{description}</Text>
        <Text style={[styles.description, styles.colorWhite]}>{blz}</Text>
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
  },
  description: {
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 10,
    paddingRight: 10,
  },
  icons: {
    paddingLeft: 10,
  },
  textContainer: {
    padding: 16,
    marginTop: -30,
  },
  flex1: {
    flex: 1,
  },
  colorWhite:{
    color: "#fff",
  }
});
