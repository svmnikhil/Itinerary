import { Text, TouchableOpacity, View, Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Cog8ToothIcon } from 'react-native-heroicons/outline';
import React, { useState } from 'react';

export default function PrivacyScreen() {
  const navigator = useNavigation();
  const orange_color = '#f97316';
  const [accepted, setAccepted] = useState(false);

  const handleAccepted = () => {
    setAccepted(prevAccept => !prevAccept);
  }

  return (
    <View className="justify-center items-center absolute mt-44">
      <Cog8ToothIcon size={216} color={orange_color}/>
      <View className="mt-8 items-center">
        <Text className="text-2xl font-bold">Your personality. Your data.</Text>
        <Text className="mt-8 mx-5 text-lg text-center">Your trip preferences will never be shared with any company but Joi, and you can 
        delete it at any time.</Text>
        <TouchableOpacity className="mt-10 mx-4 flex-row" activeOpacity={0.6} onPress={handleAccepted}>
          
          <View className="w-4 h-4 mt-6 mr-4 border-slate-400 rounded-full border-2 items-center justify-center">
            { accepted ? <>
              <View className="bg-slate-400 w-2.5 h-2.5 rounded-full"></View>
              </> : null
            }
          </View>
          <Text className="font-light text-start mr-7 text-lg">I agree to processing of my personal travel preference data for providing me 
          Joi app functions. See more in <Text className="text-orange-500 underline" onPress={() => Linking.openURL('https://google.com')}>Privacy Policy.</Text>
          </Text>
        </TouchableOpacity>
      </View>
      {accepted ? 
      <>
        <TouchableOpacity className="mt-36 w-1/2 items-center rounded-full p-3 bg-orange-500" activeOpacity={0.6} onPress={() => navigator.navigate('Name')}>
          <Text className="text-white font-semibold text-lg">Next</Text>
        </TouchableOpacity>
      </> 
      : 
      <>
        <View className="mt-36 w-1/2 items-center rounded-full p-3 bg-orange-500 opacity-50">
          <Text className="text-white font-semibold text-lg">Next</Text>
        </View>
      </>
      }
     
    </View>
  )
}
