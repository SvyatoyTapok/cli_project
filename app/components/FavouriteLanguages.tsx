import React from 'react';
import {Pressable, Text, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';
export default function FavouriteLanguages() {
  const navigation = useNavigation()
  return (
    <Pressable style={{}}>
      <Text style={{}}>Избранные языки</Text>
      <Button
          title="Go to Layout"
          onPress={() => navigation.navigate('Layout')}
        />
    </Pressable>
  );
}
