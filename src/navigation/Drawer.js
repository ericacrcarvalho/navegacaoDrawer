import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Info from '../pages/Info';
import Settings from '../pages/Settings';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={CustomDrawer}
    >
        <Drawer.Screen
            name="Home"
            component={Home}
        />
         <Drawer.Screen
            name="Info"
            component={Info}
        />
         <Drawer.Screen
            name="Settings"
            component={Settings}
        />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;