import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MagnifyingGlassIcon, UserCircleIcon, MapIcon} from 'react-native-heroicons/outline';

import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import React, { useContext, useEffect } from 'react';
import SplashScreen from './screens/SplashScreen';
import { ModalProvider } from './Modals/ModalContext';
import ModalComponent from './Modals/ModalComponent';
import TripScreen from './screens/TripScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExploreScreen from './screens/ExploreScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TripDetailsScreen from './screens/TripDetailsScreen';
import { Provider, useDispatch } from 'react-redux';
import { setTrips } from './redux/slices/tripSlice/tripReducer';
import store from './redux/store';
import { ReactReduxContext } from 'react-redux';
import EventDetailsScreen from './screens/EventDetailsScreen';


export default function App() {
  const [isLoaded, setIsLoaded] = React.useState(true);
  const Tab = createBottomTabNavigator();
  const TripStack = createNativeStackNavigator();
  // const dispatch = useDispatch();

  //PRE-LOAD STATIC IMAGES, {TODO: TRIP DATA}
  let cacheResources = async() => {
    const images = [require('./assets/logo.png')]; //this is getting static information

    const cacheImages = images.map(image => {     //this is caching this static information by downloading async-ly
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }

  
  // React.useEffect(() => {
  //   const loadResources = async() => {
  //     try {
  //       await cacheResources();
  //     } catch (error) {
  //       console.warn(error);
  //     } finally {
  //       setIsLoaded(true);
  //     }
  //   };

  //   loadResources();
  // },[])

  //SHOW THE SPLASH SCREEN IF STILL LOADING
  if(!isLoaded){
    return <SplashScreen />
  }

  //REACT NAVIGATION STUFF
  function TripNavigator() {
    return (
      <TripStack.Navigator>
        <TripStack.Screen name="Trip" options={{headerShown: false}} component={TripScreen} />
        <TripStack.Screen name="TripDetailsScreen" options={{headerShown: false}} component={TripDetailsScreen} />
        <TripStack.Screen name="EventDetailsScreen" options={{headerShown: false}} component={EventDetailsScreen} />
      </TripStack.Navigator>
    )
  }

  return (
    <Provider store={store}>
    <ModalProvider>
      <ModalComponent />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              // You can use a switch/case here if you have different icons for different screens
              switch (route.name) {
                case 'Explore':
                  return <MagnifyingGlassIcon name="explore" color={color} size={size} />;
                  break;
                case 'Trips':
                  return <MapIcon name="Trips" color={color} size={size} />;
                break;
                case 'Profile':
                  return <UserCircleIcon name="profile" color={color} size={size} />;
                  break;
                
                default:
                  return null;
                  break;
              }    
            },
            tabBarActiveTintColor:'#f97316',
            
          })}>

          <Tab.Screen 
            name="Explore" 
            component={ExploreScreen}
            options={{headerShown: false, tabBarLabel: 'Explore' }}
            
          />
          <Tab.Screen 
            name="Trips" 
            component={TripNavigator}
            options={{headerShown: false, tabBarLabel: 'Trips' }}
          />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{headerShown: false, tabBarLabel: 'Profile' }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </ModalProvider>
    </Provider>
  );
}

// const AppWrapper = () => {

//   return (
//     <Provider store={store}> // Set context
//       <App /> // Now App has access to context
//     </Provider>
//   )
// }
