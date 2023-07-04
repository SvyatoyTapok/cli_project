import {createStackNavigator} from '@react-navigation/stack';
import TranslateScreen from '../TranslateScreen';
import LayoutScreen from '../LayoutScreen';
import FavouriteScreen from '../FavouriteScreen';

export type MainStack = {
  Translate?: {};
  Layout?: {};
  Favourite?: {};
};

function MyStack() {
  const Stack = createStackNavigator<MainStack>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Translate" component={TranslateScreen} />
      <Stack.Screen name="Layout" component={LayoutScreen} />
      <Stack.Screen name="Favourite" component={FavouriteScreen} />
    </Stack.Navigator>
  );
}
export default MyStack;
