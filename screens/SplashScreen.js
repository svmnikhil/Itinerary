import { Animated, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../assets/logo.png';

export default function SplashScreen() {


  return (
   <SafeAreaView className="flex-1 bg-white">
      <Animated.View className='flex-1 flex justify-around m-auto'>
            <Image source={require("../assets/logo.png")}/>
      </Animated.View>
   </SafeAreaView>
  )
};


{/*bg-orange-500 */}