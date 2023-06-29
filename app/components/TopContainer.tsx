import {useCallback} from 'react';
import { View, Pressable, Text, Image } from "react-native";
import DropdownMenu from "./DropdownMenu";
import styles from "./styles/TopContainerStyle";

export default function TopContainer({address,setAddress, activeDropdownMenu, setactiveDropdownMenu}) {
  const handlePressAddress = useCallback(() => {
    setactiveDropdownMenu(!activeDropdownMenu)
  }, [setactiveDropdownMenu, activeDropdownMenu])

  return (
    <View style={[styles.topContainer]}>
      {/*todo: инлайн функции*/}
      <Pressable onPress={handlePressAddress}>
        <Text style={[styles.topText]}>{address}</Text>
      </Pressable>
      {activeDropdownMenu ? (
        <DropdownMenu
          activeDropMenu={activeDropdownMenu}
          setactiveDropdownMenu={setactiveDropdownMenu}
          setAddress={setAddress}
        />
      ) : (
        <View />
      )}
      <Image
        style={[styles.topIconProfile]}
        source={{
          uri: "https://sun21-2.userapi.com/s/v1/ig2/z-N4QBr3OUbKaSxzXN1eMW82i14znqMql9WuG8gTAFCGQBPZkt9EvUrNpaRyVx0grJmtxnE6CRF0CrSWNw1C3ykM.jpg?size=50x50&quality=95&crop=0,0,900,900&ava=1",
        }}
      />
    </View>
  );
}
