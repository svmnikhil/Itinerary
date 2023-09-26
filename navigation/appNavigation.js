import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TripScreen from '../screens/TripScreen';
import TripDetailsScreen from '../screens/TripDetailsScreen';

const Stack = createNativeStackNavigator();
const TripStack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Profile'>
            <Stack.Screen name="Explore" component={ExploreScreen} />
            <TripStack.Navigator>
              <TripStack.Screen name="Trip" component={TripScreen}/>
              <TripStack.Screen name="TripDetails" component={TripDetailsScreen}/>
            </TripStack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

