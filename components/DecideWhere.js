import {Text, View, TouchableOpacity, TextInput } from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import React, {useState} from 'react';

export default function DecideWhere({ isExpanded, onToggle }) {
    const orange_color = '#f97316'

    const MinimizedContent = (
        <TouchableOpacity
        className="my-2 mx-5 p-5 flex-row justify-between w-11/12 rounded-3xl bg-white drop-shadow-2xl border-black"
        activeOpacity={0.5} 
        onPress={onToggle}
        >
          <Text>Where</Text>
          <Text>Add destination</Text>
        </TouchableOpacity>
    )

    const ExpandedContent = (
            <TouchableOpacity
                className="mx-5 my-2 p-5 justify-center w-11/12 rounded-3xl bg-white drop-shadow-2xl border-black"
                onPress={onToggle}
            >
                <View className="w-full ml-5 justify-center">
                    <Text className="font-medium text-2xl mb-5">Where to?</Text>
                    <View className="flex items-center p-4 w-11/12 h-15 rounded-xl drop-shadow-2xl border-gray-400 border-2 flex-row">
                    <MagnifyingGlassIcon size={18} color="black" strokeWidth={1.5}/>
                    <TouchableOpacity activeOpacity={0.5} 
                    hitSlop={{ top: 20, bottom: 20, left: 60, right: 140 }} 
                    onPress={onToggle} 
                    className="ml-5 flex-col items-start">
                        <Text className={'font-medium'}>Search Destinations</Text>
                    </TouchableOpacity>                
                    <TextInput/>
                    </View>
                </View>
                    
            </TouchableOpacity>
    )
        
    return isExpanded ? ExpandedContent : MinimizedContent;
}
