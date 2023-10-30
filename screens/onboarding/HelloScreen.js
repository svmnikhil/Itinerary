import { Text, View , Image} from 'react-native';
import React , { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import '../../assets/logo.png';

export default function HelloScreen() {
  const navigator = useNavigation();

  useEffect(() => {
      const timer = setTimeout(() => {
        navigator.navigate('TravelStyle');
      }, 1100);
    return () => clearTimeout(timer);
  }
);

  return (
    <View className="justify-center items-center flex-1">
      <Image source={require("../../assets/logo.png")} />
      <Text className="text-lg mt-3">Nice to meet you!</Text>
    </View>
);

}
