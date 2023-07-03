import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './screens/Navigation/NavigationStack';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <MyStack />
      </NavigationContainer>
    </Provider>
  );
}
