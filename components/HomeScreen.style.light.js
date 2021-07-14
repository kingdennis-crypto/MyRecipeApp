import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: "#fff4e6",
    borderRadius: 7,
    height: "50%",
    padding: 10,
  },

  modalTitle: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 3,
    color: "#3c2f2f",
  },

  modalOldName: {
    textTransform: "uppercase",
    color: "#3c2f2f",
    fontWeight: "500",
  },

  submitButton: {
    padding: 5,
    marginTop: 10,
    backgroundColor: "#3c2f2f",
    borderRadius: 7,
  },

  backgroundStyle: {
    backgroundColor: "#fff4e6",
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
    color: "#3c2f2f",
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
    borderColor: "#3c2f2f",
    borderRadius: 7,
    backgroundColor: "#f2dec4",
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
    color: "#3c2f2f",
    fontWeight: "500",
    marginTop: 50,
  },

  mealTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxHeight: 45,
    alignItems: "center",
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
