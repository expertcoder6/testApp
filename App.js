//---------- imports 

// react
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// components
import Home from './src/Componets/Home'
import UserList from './src/Componets/UserList'
import UserProfile from './src/Componets/UserProfile'


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


        <Stack.Screen
          name="UserList"
          component={UserList}
        />


        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

//---------- export component

export default App;
