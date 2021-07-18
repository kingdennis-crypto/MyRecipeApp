import { StyleSheet } from "react-native";

export default StyleSheet.create({
  recipeBody: {
    flex: 1,
  },

  container: {
    marginTop: -25,
    backgroundColor: "#fff4e6",
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
    backgroundColor: "#be9b7b",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  descriptionText: {
    color: "#854442",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  sourceLink: {
    fontSize: 22,
    color: "#3c2f2f",
    fontWeight: "500",
  },
});
