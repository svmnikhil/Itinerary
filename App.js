import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/appNavigation';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import React from 'react';
import SplashScreen from './screens/SplashScreen';
import { ModalProvider } from './Modals/ModalContext';
import ModalComponent from './Modals/ModalComponent';

export default function App() {
  let [isLoaded, setIsLoaded] = React.useState(false);

  let cacheResources = async() => {
    const images = [require('./assets/logo.png')]; //this is getting static information

    const cacheImages = images.map(image => {     //this is caching this static information by downloading async-ly
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }

  React.useEffect(() => {
    const loadResources = async() => {
      try {
        await cacheResources();
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadResources();
  },[])

 
  if(!isLoaded){
    return <SplashScreen />
  }
  
  return (
    <ModalProvider>
      <ModalComponent />
      <AppNavigation />
    </ModalProvider>   
  );

}
