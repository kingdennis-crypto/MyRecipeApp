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

  textInput: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
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
