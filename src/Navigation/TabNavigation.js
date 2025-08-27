import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native'; // Import Image component
import Home from '../screen/Home';
import Favourite from '../screen/Favourite';
import Bazarway from '../screen/Bazarway';
import Bag from '../screen/Bag';
import Account from '../screen/Account';

const TabNavigatorContent = () => {
  const TabNav = createBottomTabNavigator();
  const insets = useSafeAreaInsets();

  // Dynamic height calculation
  const TAB_BAR_BASE_HEIGHT = 57;
  const tabBarHeight = TAB_BAR_BASE_HEIGHT + insets.bottom;

  return (
    <TabNav.Navigator
      screenOptions={{
        tabBarShowLabel: false, // Remove text labels
        tabBarStyle: {
          height: tabBarHeight,
          backgroundColor: 'white',
          paddingBottom: insets.bottom > 0 ? insets.bottom / 2 : 8,
          paddingTop: 10,
          borderTopWidth: 0.5,
          borderTopColor: 'rgba(0,0,0,0.1)',
        },
        headerShown: false,
      }}>
      <TabNav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="home"
              size={26}
              color={focused ? 'blue' : 'grey'}
            />
          ),
        }}
      />
      <TabNav.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="heart"
              size={26}
              color={focused ? 'blue' : 'grey'}
            />
          ),
        }}
      />
      <TabNav.Screen
        name="Bazarway"
        component={Bazarway}
        options={{
          tabBarIcon: ({focused}) => (
            // Using local image from assets
            <Image 
              source={require('../Images/Bazzrwayicon.jpg')}
              style={{
                width: 42,
                height: 42,
                borderRadius:40
              }}
            />
          ),
        }}
      />
      <TabNav.Screen
        name="Bag"
        component={Bag}
        initialParams={{ selectedCountry: null }}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="shopping-bag"
              size={26}
              color={focused ? 'blue' : 'grey'}
            />
          ),
        }}
      />
      <TabNav.Screen
        name="Account"
        component={Account}
        initialParams={{ selectedCountry: null }}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="user"
              size={26} // Adjusted to consistent size
              color={focused ? 'blue' : 'grey'}
            />
          ),
        }}
      />
    </TabNav.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <SafeAreaProvider>
        <TabNavigatorContent />
    </SafeAreaProvider>
  );
};

export default TabNavigation;