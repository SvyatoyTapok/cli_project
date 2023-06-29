import { View, Text } from "react-native";
import styles from "./styles/LastOrderItemStyle";

type LastOrderItemType = {
  itemName:string
  itemPrice:string
  ammountItem:string
}

function LastOrderItem({ itemName, itemPrice, ammountItem }:LastOrderItemType) {
  return (
    <View style={[styles.lastOrderItemContainer]}>
      <View style={[styles.leftContainer]}>
        <Text style={[styles.nameLastOrderItem]}>{itemName}</Text>
        <Text style={[styles.ammountLastOrderItem]}>{ammountItem}</Text>
      </View>
      <View style={[styles.rightContainer]}>
        <Text style={[styles.valueOfLastItem]}>{itemPrice}</Text>
      </View>
    </View>
  );
}

export default LastOrderItem;
