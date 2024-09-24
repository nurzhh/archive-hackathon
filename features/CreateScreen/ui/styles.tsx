import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  snapContainer: {
    borderWidth: 1,
    borderColor: "#ff0000",
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  photoPreview: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
