import { StyleSheet } from "react-native";

export default StyleSheet.create({
  recipeBody: {
    flex: 1,
  },

  container: {
    marginTop: -25,
    backgroundColor: "#3c2f2f",
    borderRadius: 25,
    padding: 15,
    flex: 1,
  },

  titleStyle: {
    fontSize: 26,
    fontWeight: "500",
  },

  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  descriptionItem: {
    padding: 7,
    backgroundColor: "#854442",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  descriptionText: {
    color: "#be9b7b",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
