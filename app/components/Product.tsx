import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles/ProductStyle";

type ProductType = {
  image:string
  title:string
  sizes:string
  price:number
}
function Product({ image, title, sizes, price }:ProductType) {
  return (
    <View style={[styles.orderItemContainer]}>
      <View style={[styles.orderItem]}>
        <Image style={[styles.coffeeIcon]} source={{ uri: image }}></Image>
        <Text style={[styles.titleItem]}>{title}</Text>
        <Text style={[styles.ammountLastOrderItem]}>{sizes}</Text>
        <View style={[styles.buttonContainer]}>
          <Pressable style={[styles.confirmButton]}>
            <Image
              style={[styles.confirmIcon]}
              source={require("../assets/icons/Confirm.png")}
            ></Image>
          </Pressable>
          <Text style={[styles.priceItem]}>{price}</Text>
        </View>
      </View>
    </View>
  );
}

export default Product;
