import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  overlayPosition: {
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  form: {
    backgroundColor: "#1d3275",
    padding: 10,
    borderRadius: 10,
  },
  labels: {
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
  colorWhite: {
    color: "#fff",
  },
  flex1: {
    flex:1,
  }
});

export default styles;
