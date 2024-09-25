import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignContent: "flex-end",
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "37%",
    paddingHorizontal: 20,
    backgroundColor: "#344558",
    paddingTop: 45,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  search: {
    width: 20,
    height: 20,
  },
  title: {
    color: "#fff",
    fontSize: 15,
  },
  dots: {
    borderRadius: 50,
    backgroundColor: "rgba(217, 217, 217, 1)",
    width: 7,
    height: 7,
  },
});
