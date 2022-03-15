//---------- imports 

// react
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// components
import Home from './src/Componets/Home'

// global veriable
const Stack = createNativeStackNavigator();

//---------- Component

const App = () => {

  //---------- Main View

  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

//---------- export component

export default App;
