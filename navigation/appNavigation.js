import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TripScreen from '../screens/TripScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Explore'>
            <Stack.Screen name="Explore" options={{headerShown: false}} component={ExploreScreen} />
            <Stack.Screen name="Trip" options={{headerShown: false}} component={TripScreen} />
            <Stack.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
