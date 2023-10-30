import { Animated, Text, View, Image, TouchableOpacity} from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import * as AppleAuthentication from 'expo-apple-authentication';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import '../assets/logo.png';
import AboutScreen from './onboarding/PrivacyScreen';
import { Auth } from '../components/Auth.native';

export default function SplashScreen() {
  const navigator = useNavigation();
  const moveUp = new Animated.Value(0); // starting position; you can adjust as needed

  useEffect(() => {
    const timer = setTimeout(() => {
      navigator.navigate('Privacy')
    }, 800);

    return () => clearTimeout(timer); // Cleanup timer to prevent memory leaks
  },[]);



  return (
    <View className="flex-1 bg-white items-center">
      <View className="flex-1 justify-center">
        <Image source={require("../assets/logo.png")} />
      </View>
      {/* <TouchableOpacity className="mb-4" onPress={() => navigator.navigate('Privacy')}>
        <ArrowRightIcon size={28}/>
      </TouchableOpacity> */}
      {/* { 
        signUp ? 
          <Animated.View style={{ marginBottom: 20, padding: 5, transform: [{ translateY: moveUp }] }}>
            <Auth />
          </Animated.View>
        : null
      } */}
    </View>
  )
}