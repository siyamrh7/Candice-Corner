

import React from 'react';
import {
  SafeAreaView
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const App: () => Node = () => {
const Stack = createStackNavigator()
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen>
          
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
