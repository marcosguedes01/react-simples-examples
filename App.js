import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { navigationMain } from "./data/navigation-items";

const MainNavigator = createStackNavigator(navigationMain);

const App = createAppContainer(MainNavigator);

export default App;