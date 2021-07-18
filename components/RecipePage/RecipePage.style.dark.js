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
    flexWrap: "wrap",
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

  sourceLink: {
    fontSize: 18,
    color: "#fff4e6",
    fontWeight: "500",
    marginBottom: 20,
  },

  goBackContainer: {
    position: "absolute",
    top: 55,
    left: 15,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 7,
  },

  ingredientsTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "#fff4e6",
  },

  ingredientsList: {
    flexDirection: "row",
    margin: 5,
    alignItems: "center",
    borderRadius: 7,
    backgroundColor: "#be9b7b",
    overflow: "hidden",
  },

  ingredientsItem: {
    flexDirection: "column",
    marginHorizontal: 10,
  },

  ingredientsText: {
    fontWeight: "500",
    color: "#fff4e6",
  },

  ingredienstCategoryText: {
    fontWeight: "500",
    textTransform: "uppercase",
    color: "rgba(255, 244, 229, 0.6)",
    fontStyle: "italic",
  },
});
