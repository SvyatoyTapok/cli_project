import { createStackNavigator } from "@react-navigation/stack";
import TranslateScreen from "../TranslateScreen";
import LayoutScreen from "../LayoutScreen";

function MyStack() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen name="Translate" component={TranslateScreen} />
        <Stack.Screen name="Layout" component={LayoutScreen} />
      </Stack.Navigator>
    );
  }
  export default MyStack