import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    orderItemContainer: {
        marginHorizontal: 4,
        marginVertical: 4,
      },
      orderItem: {
        height: 250,
        justifyContent: "space-around",
        elevation: 10,
      },

  coffeeIcon: {
    width: 164,
    height: 112,
    borderRadius: 15,
  },
  titleItem: {
    fontWeight: 500,
    fontSize: 18,
  },
  confirmButton: {
    width: 100,
    height: 35,
    backgroundColor: "#4A4A49",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  confirmIcon: {
    width: 15,
    height: 15,
  },
  sizesItem: {
    fontSize: 11,
  },
  priceItem: {
    fontSize: 20,
    fontWeight: 900,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ammountLastOrderItem: {
    fontSize: 14,
    fontWeight: 300,
  },
})

export default styles