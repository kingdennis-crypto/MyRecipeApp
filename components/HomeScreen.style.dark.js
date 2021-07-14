import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: "#3c2f2f",
    borderRadius: 7,
    height: "50%",
    padding: 10,
  },

  modalTitle: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 3,
    color: "#fff4e6",
  },

  modalOldName: {
    textTransform: "uppercase",
    color: "#fff4e6",
    fontWeight: "500",
  },

  submitButton: {
    padding: 5,
    marginTop: 10,
    backgroundColor: "#fff4e6",
    borderRadius: 7,
  },

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
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },

  noResultText: {
    fontSize: 48,
    color: "#fff4e6",
    fontWeight: "500",
    marginTop: 50,
  },

  mealTypeContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 7,
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
