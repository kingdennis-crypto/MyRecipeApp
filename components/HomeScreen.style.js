import { StyleSheet } from "react-native";

export default StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerTitleContainer: {
    height: 60,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
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

  mealTypeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },

  focusedMealType: {
    margin: 5,
    padding: 5,
    backgroundColor: "#3c2f2f",
    color: "#be9b7b",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  normalMealType: {
    margin: 5,
    padding: 5,
    backgroundColor: "#be9b7b",
    color: "#3c2f2f",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
// rgb(231, 238, 246);
