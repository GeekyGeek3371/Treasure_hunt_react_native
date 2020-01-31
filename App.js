import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppContainer, createAppContainer} from "react-navigation";
import {CreateStackNavigator, createStackNavigator} from "react-navigation-stack";

import Home from './screens/Home';
import Camera from './screens/qrScan'

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Camera: {screen: Camera}
  },
  {
    defaultNavigationOptions:{
      headerTintColor:"#fff",
      headerStyle: {
        backgroundColor: "#192A56"
      },
      headerTitleStyle:{
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;