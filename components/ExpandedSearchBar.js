import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {XMarkIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';

import React from 'react';

export default function ExpandedSearchBar({ onClose }) {
  const orange_color = '#f97316'

  return (
    <View>
      <TouchableOpacity className="m-5" onPress={onClose}>
              <XMarkIcon size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
            activeOpacity={1}
            className="flex m-auto p-5 justify-center w-11/12 rounded-3xl bg-white drop-shadow-2xl border-black"
        >
            <View className="w-full ml-5 justify-center">
              <Text className="font-medium text-2xl mb-2">Where to?</Text>
              <View className="flex items-center p-4 w-11/12 h-12 rounded-3xl drop-shadow-2xl border-gray-400 border-2 flex-row">
                <MagnifyingGlassIcon size={18} color="black" strokeWidth={1.5}/>
                <TextInput/>

              </View>
            </View>
        </TouchableOpacity>
    </View>
  )
}
