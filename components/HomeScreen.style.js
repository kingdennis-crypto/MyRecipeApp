import { StyleSheet } from "react-native";

export default StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerTitleContainer: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 42,
    fontWeight: "bold",
  },

  textInputContainer: {
    padding: 10,
  },

  defaultTextInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.0)",
    borderRadius: 7,
    backgroundColor: "#E4E4E4",
  },

  focusedTextInput: {
    padding: 10,
    borderWidth: 1,
    // borderColor: "#0A3EED",
    borderColor: "rgb(200,170,130)",
    borderRadius: 7,
    backgroundColor: "#E4E4E4",
  },

  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  noResultsContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
  },

  noResultText: {
    fontSize: 48,
  },
});
