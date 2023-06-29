import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  orderContainer: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
    marginTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    elevation: 10,
  },
  searchContainer: {
    backgroundColor: "#F6F6F6",
    height: 35,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 5,
    justifyContent: "center",
    width: "100%",
  },
  searchItem: {
    alignItems: "center",
    flexDirection: "row",
  },
  searchIcon: {
    marginHorizontal: 13,
  },
  lastOrderContainer: {
    marginTop: 25,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  titleLastOrder: {
    fontSize: 24,
    fontFamily: "Dosis",
    fontWeight: 700,
  },
  subTitleLastOrder: {
    color: "#989FA6",
  },
  repeatOrderButton: {
    flexDirection: "row",
    backgroundColor: "#4A4A49",
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,
  },
  repeactIcon: {
    height: 15,
    width: 15,
  },
  repeatTextButton: {
    color: "white",
  },

  repeatTextButton: {
    color: "white",
  },

  nameLastOrderItem: {
    fontWeight: 600,
    fontSize: 16,
  },

  newOrderContainer: {
    marginTop: 10,
    width: "100%",
  },
  titlesNewOrder: {
    flexDirection: "row",
  },
  typesOfProducts: {
    marginHorizontal: 10,
    fontSize: 25,
  },
  stickyHeaderComponent: {
    width: 140,
    height: 140,
    backgroundColor: "grey",
  },
});

export default styles;
