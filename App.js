import { StatusBar } from 'expo-status-bar';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MagnifyingGlassIcon, UserCircleIcon, MapIcon} from 'react-native-heroicons/outline';
import { Provider, useDispatch, ReactReduxContext } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { store, persistor } from './redux/store';
import SplashScreen from './screens/SplashScreen';
import { ModalProvider } from './Modals/ModalContext';
import ModalComponent from './Modals/ModalComponent';
import TripScreen from './screens/TripScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExploreScreen from './screens/ExploreScreen';
import TripDetailsScreen from './screens/TripDetailsScreen';
import { setTrips } from './redux/slices/tripSlice/tripReducer';
import EventDetailsScreen from './screens/EventDetailsScreen';
import { Auth } from './components/Auth.native';
import PrivacyScreen from './screens/onboarding/PrivacyScreen';
import NameScreen from './screens/onboarding/NameScreen';
import HelloScreen from './screens/onboarding/HelloScreen';
import TravelStyleScreen from './screens/onboarding/TravelStyleScreen';


// export default function App() {
//   return (
//     <AppProvider id={APP_ID}>
//       {/* If there is no authenticated user,
//           the app mounts the `fallback` component.
//           Once the user successfully authenticates,
//           the app unmounts the component in the
//           `UserProvider.fallback` prop
//           (the `LogIn` component in this example). */}
//       <UserProvider fallback={LogIn}>
//         {/* Components with access to the user.
//             These components only mount
//             if there's an authenticated user.*/}
//         <MainComponent />
//       </UserProvider>
//     </AppProvider>
//   );
// }

function LogIn() {
  const app = useApp();
  console.log("here")

  async function logInUser() {
    await app.logIn(credentials).then(user => {
        console.log(`Logged in with id: ${user.id}`);
     });
     
  }

  return (
    <Auth />
  );
}


export default function App() {

  const [isFirstLaunch, setIsFirstLaunch] = useState(true);  
  const Tab = createBottomTabNavigator();
  const TripStack = createNativeStackNavigator();
  const OnBoardingStack = createNativeStackNavigator();

  //PRE-LOAD STATIC IMAGES, {TODO: TRIP DATA, PROFILE DATA}
  let cacheResources = async() => {
    const images = [require('./assets/logo.png')]; //this is getting static information

    const cacheImages = images.map(image => {     //this is caching this static information by downloading async-ly
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }

  //CHECK IF FIRST LAUNCH
  useEffect(() => {
    // Reset AsyncStorage for testing purposes
    AsyncStorage.setItem('alreadyLaunched', 'null');
    
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, since we rely on it on the next app initialization
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(true);
      }
    });
  }, []);

  //ONBOARDING FLOW
  function OnBoardingNavigator() {
    return(
      <OnBoardingStack.Navigator
        screenOptions={{
          animation: 'fade'
        }}
      >
        <OnBoardingStack.Screen name="Splash" options={{ headerShown: false }} component={SplashScreen}/>
        <OnBoardingStack.Screen name="Privacy" options={{headerShown: false}} component={PrivacyScreen}/>
        <OnBoardingStack.Screen name="Name" options={{headerShown: false}} component={NameScreen}/>
        <OnBoardingStack.Screen name="Hello" options={{headerShown: false}} component={HelloScreen}/>
        <OnBoardingStack.Screen name="TravelStyle" options={{headerShown: false}} component={TravelStyleScreen}/>

      </OnBoardingStack.Navigator>
    )
  }

  //TRIP DETAILS FLOW
  function TripNavigator() {
    return (
      <TripStack.Navigator>
        <TripStack.Screen name="Trip" options={{headerShown: false}} component={TripScreen} />
        <TripStack.Screen name="TripDetailsScreen" options={{headerShown: false}} component={TripDetailsScreen} />
        <TripStack.Screen name="EventDetailsScreen" options={{headerShown: false}} component={EventDetailsScreen} />
      </TripStack.Navigator>
    )
  }

  if (isFirstLaunch === null) {
    return null; // Render nothing while waiting for 'alreadyLaunched' value to be fetched
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <OnBoardingNavigator/>
      </NavigationContainer>
    );
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
      </Provider>
    );
  }
}
