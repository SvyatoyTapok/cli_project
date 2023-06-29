import React, { useState } from "react";
import { View } from "react-native";
import TopContainer from "../components/TopContainer";
import StoriesBox from "../components/StoriesBox";
import OrderContainer from "../components/OrderContainer";
import ADDRESSES from "../assets/constants/Addresses";
import styles from "../components/styles/LayoutScreenStyle";

export default function LayoutScreen() {
  const [activeDropdownMenu, setactiveDropdownMenu] = useState(false);
  const [address, setAddress] = useState(ADDRESSES[0].address);
  return (
    <View style={[styles.layoutScreen]}>
      <TopContainer
        setactiveDropdownMenu={setactiveDropdownMenu}
        activeDropdownMenu={activeDropdownMenu}
        address={address}
        setAddress={setAddress}
      />
      <StoriesBox />
      <OrderContainer />
    </View>
  );
}
