import React from 'react';
import {Pressable, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStack} from '../screens/Navigation/NavigationStack';
export default function FavouriteLanguages() {
  const navigation = useNavigation<StackNavigationProp<MainStack>>();
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
