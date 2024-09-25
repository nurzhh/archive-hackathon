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
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  photoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#344558",
    paddingVertical: 36,
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  lastPhotoPreview: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#D9D9D9",
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
