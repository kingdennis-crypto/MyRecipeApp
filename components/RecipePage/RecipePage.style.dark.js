import { StyleSheet } from "react-native";

export default StyleSheet.create({
  recipeBody: {
    flex: 1,
    backgroundColor: "#3c2f2f",
  },

  recipeImage: {
    alignSelf: "stretch",
    height: 250,
  },

  titleContainer: {
    padding: 10,
    marginBottom: 20,
  },

  titleText: {
    fontSize: 48,
    fontWeight: "500",
    color: "#fff4e6",
  },

  container: {
    backgroundColor: "#3c2f2f",
    height: "100%",
    width: "100%",
  },

  textContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: -50,
  },

  textContainer2: {
    marginBottom: 10,
    borderRadius: 7,

    backgroundColor: "#4b3832",
    width: "95%",
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  titleText: {
    fontSize: 22,
    fontWeight: "500",
  },

  ingredientsContainer: {
    marginVertical: 10,

    backgroundColor: "#FFF",
    width: "90%",
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  ingredientsTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
});
