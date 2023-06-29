import React from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import styles from "./styles/DropDownMenuStyle";
import ADDRESSES from "../assets/constants/Addresses";

function DropdownMenu({ setAddress, setactiveDropdownMenu, activeDropMenu }) {
  return (
    <View style={[styles.dropdownContainer]}>
      <FlatList
        ItemSeparatorComponent={<View style={[styles.separatorItem]} />}
        data={ADDRESSES}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              setAddress(item.address), setactiveDropdownMenu(!activeDropMenu);
            }}
            style={[styles.dropdownOption]}
          >
            <Text>{item.address}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

export default DropdownMenu;
