import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  ingredientContainer: {
    marginHorizontal: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
    paddingVertical: 10,
  },

  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  detailContainer: {
    padding: 10,
    width: 90,
    alignItems: "center",
  },

  detailImage: {
    width: 32,
    height: 32,
  },

  detailText: {
    paddingVertical: 7,
  },

  textContainer: {
    marginTop: -20,
    padding: 20,
    backgroundColor: "#FFF",
    height: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    zIndex: 10,

    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -20,
    },
    shadowColor: "#000",
    elevation: 4,
    shadowOpacity: 0.5,
  },

  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    paddingHorizontal: 5,
  },

  linkContainer: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    marginBottom: 7,
  },

  linkName: {
    fontSize: 16,
    paddingRight: 5,
    color: "rgb(168, 168, 168)",
    fontWeight: "500",
  },

  linkBringMeThere: {
    fontSize: 16,
    paddingHorizontal: 5,
    color: "rgb(106, 76, 199)",
    fontWeight: "bold",
  },

  itemList: {
    flexDirection: "row",
    borderWidth: 1,
    margin: 3,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#FFF",

    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#000",
    elevation: 4,
    shadowOpacity: 0.2,
  },

  ingredientText: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "500",
  },

  topTextContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 5,
  },

  courseText: {
    borderRadius: 5,
    padding: 5,
    alignSelf: "flex-start",
    backgroundColor: "rgb(231,246,237)",
    color: "rgb(54,159,108)",
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: 5,
  },

  mealTypeText: {
    borderRadius: 5,
    padding: 5,
    alignSelf: "flex-start",
    backgroundColor: "rgb(231,238,246)",
    color: "rgb(54,107,159)",
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: 5,
  },

  cuisineTypeText: {
    borderRadius: 5,
    padding: 5,
    alignSelf: "flex-start",
    backgroundColor: "rgb(246,231,231)",
    color: "rgb(159,54,54)",
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: 5,
  },

  totalTimeText: {
    borderRadius: 5,
    padding: 5,
    alignSelf: "flex-start",
    backgroundColor: "rgb(239,231,246)",
    color: "rgb(103,54,159)",
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: 5,
  },
});
