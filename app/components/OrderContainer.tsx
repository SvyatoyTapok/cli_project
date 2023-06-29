import icons from "../assets/icons/icons";
import styles from "./styles/OrderContainerStyle";
import ADDRESSES from "../assets/constants/Addresses";
import {
  View,
  FlatList,
  Image,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import LastOrderItem from "./LastOrderItem";
import COFFIES from "../assets/constants/Coffies";
import Product from "./Product";
export default function OrderContainer() {
  return (
    <View style={[styles.orderContainer]}>
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <View style={[styles.searchContainer]}>
              <View style={[styles.searchItem]}>
                <Image
                  style={[styles.searchIcon]}
                  source={icons.search}
                ></Image>
                <TextInput placeholder="Ищу то самое"></TextInput>
              </View>
            </View>
            <View style={[styles.lastOrderContainer]}>
              <View>
                <Text style={[styles.titleLastOrder]}>Прошлый заказ</Text>
                <Text style={[styles.subTitleLastOrder]}>
                  {ADDRESSES[1].address}
                </Text>
              </View>
              <Pressable style={[styles.repeatOrderButton]}>
                <Image
                  style={[styles.repeactIcon]}
                  source={require("../assets/icons/Repeat.png")}
                ></Image>
                <Text style={[styles.repeatTextButton]}>1750 ₽</Text>
              </Pressable>
            </View>
            <LastOrderItem
              itemName={"Американо"}
              ammountItem={"200 мл"}
              itemPrice={"250 ₽"}
            />
            <LastOrderItem
              itemName={"Лимонный чай без сахара"}
              ammountItem={"110 г"}
              itemPrice={"250 ₽"}
            />
            <View style={[styles.newOrderContainer]}>
              <View style={[styles.titlesNewOrder]}>
                <Text style={[styles.typesOfProducts]}>Напитки</Text>
                <Text style={[styles.typesOfProducts]}>Десерты</Text>
              </View>
            </View>
          </View>
        )}
        StickyHeaderComponent={() => (
          <View style={[styles.StickyHeaderComponent]} />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={COFFIES}
        renderItem={({ item }) => (
          <Product
            image={item.image}
            price={item.price}
            sizes={item.sizes}
            title={item.title}
          />
        )}
      />
    </View>
  );
}
