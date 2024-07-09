import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Card({ title, description, blz }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.description}>{blz}</Text>
      <View style={styles.iconContainer}>
        <Icon style={styles.icons} name="edit" size={30} color="black" />
        <Icon style={styles.icons} name="trash" size={30} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
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
  //TODO: Style buttons
  iconContainer:{
    flex: 1,
    justifyContent: "center", 
  },
  icons:{
    alignSelf:"flex-end",
  }
});
