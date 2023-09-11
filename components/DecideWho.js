import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function DecideWho({ isExpanded, onToggle }) {

  const MinimizedContent = (
    <TouchableOpacity
    className="my-2 mx-5 p-5 flex-row justify-between w-11/12 rounded-3xl bg-white drop-shadow-2xl border-black"
    activeOpacity={0.5} 
    onPress={onToggle}
    >
      <Text>Who</Text>
      <Text>Add guests</Text>
    </TouchableOpacity>
  )

  const ExpandedContent = (
    <TouchableOpacity
      className="mx-5 my-2 p-5 justify-center w-11/12 rounded-3xl bg-white drop-shadow-2xl border-black"
      onPress={onToggle}
    >
      <View className="w-full ml-5 justify-center">
        <Text className="font-medium text-2xl mb-5">Who's coming?</Text>
        <View className="justify-between flex-row">
          <Text>Seniors</Text>
          
        </View>
        <View><Text>Adults</Text></View>
        <View><Text>Children</Text></View>
        <View><Text>Pets</Text></View>

      </View>
    </TouchableOpacity>
  )

  return isExpanded ? ExpandedContent : MinimizedContent;
}