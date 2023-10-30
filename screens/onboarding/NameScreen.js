import { Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

export default function NameScreen() {
  const navigator = useNavigation();
  const [name, setName] = useState('');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="flex-1 flex-col justify-between bg-white">
        <View className="justify-center items-center flex-1">
          <Text className="font-light text-base">Let's get to know each other!</Text>
          <Text className="my-4 text-2xl font-semibold">What would you like Joi to call you?</Text>
          <TouchableOpacity className="mt-5 justify-start items-center w-11/12 h-12 rounded-full bg-slate-100">
            <TextInput className="font-bold h-12 text-slate-500 text-lg" hitSlop={{ top: 20, bottom: 20, left: 180, right: 180 }}  placeholder={"Name"} value={name} onChangeText={setName}/>
          </TouchableOpacity>
        </View>
        
        {name.length > 2 ? 
        <TouchableOpacity className="mb-8 w-1/2 mx-auto items-center rounded-full p-3 bg-orange-500" activeOpacity={0.6} onPress={() => navigator.navigate('Hello')}>
          <Text className="text-white font-semibold text-lg">Continue</Text>
        </TouchableOpacity>
        : 
        <View className="mb-8 w-1/2 mx-auto items-center rounded-full p-3 bg-orange-500 opacity-50">
          <Text className="text-white font-semibold text-lg">Continue</Text>
        </View>
        }
      </View>
    </TouchableWithoutFeedback>
  
)
}
