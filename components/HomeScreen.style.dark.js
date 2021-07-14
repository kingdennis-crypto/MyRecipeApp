import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#3c2f2f",
    height: "100%",
  },

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
    color: "#fff4e6",
  },

  textInputContainer: {
    padding: 10,
  },

  defaultTextInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.0)",
    borderRadius: 7,
    backgroundColor: "#f2dec4",
  },

  focusedTextInput: {
    padding: 10,
    borderWidth: 1,
    // borderColor: "#0A3EED",
    borderColor: "#3c2f2f",
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
    flex: 1,
  },

  noResultText: {
    fontSize: 48,
    color: "#3c2f2f",
    fontWeight: "500",
  },

  mealTypeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    height: 50,
  },

  focusedMealType: {
    margin: 5,
    padding: 5,
    backgroundColor: "#fff4e6",
    color: "#854442",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  normalMealType: {
    margin: 5,
    padding: 5,
    backgroundColor: "#854442",
    color: "#fff4e6",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
// rgb(231, 238, 246);
