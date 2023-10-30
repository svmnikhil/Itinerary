import { Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function TravelStyleScreen() {
  const navigator = useNavigation();

  const handlePress = (value: String) => {
    console.log(value);
    
  }


  return (
    <View className="justify-center items-center flex flex-col">
      <View className=" basis-2/12 p-5 mt-20">
        <Text className="text-2xl font-semibold">Are you an experienced traveller?</Text>
      </View>
      <View className="px-10">
      <TouchableOpacity 
        className="px-16 py-4 border rounded-md justify-center items-center my-4" 
        activeOpacity={0.6} 
        onPress={() => handlePress("0")}>
        <Text>never travelled before</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        className="py-4 border rounded-md justify-center items-center my-4" 
        activeOpacity={0.6}
        onPress={() => handlePress("1-2")}>
        <Text>travelled once or twice</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        className="py-4 border rounded-md justify-center items-center my-4"
        activeOpacity={0.6}
        onPress={() => handlePress("on occasion")}>
        <Text>on occasion</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        className="py-4 border rounded-md justify-center items-center my-4" 
        activeOpacity={0.6}
        onPress={() => handlePress("frequently")}>
        <Text>travel frequently</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  )
}
