import {Text, View, TouchableOpacity, TextInput } from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import React, {useEffect, useState} from 'react';

export default function DecideWhere({ isExpanded, onToggle, onDataRecieved}) {
    const [searchText, setSearchText] = useState("Nearby"); 
    const orange_color = '#f97316';

    useEffect(() => {
        onDataRecieved(searchText);
    }, [searchText]);
    
    const MinimizedContent = (
        <TouchableOpacity
        className="my-2 mx-5 p-5 flex-row justify-center w-11/12 rounded-3xl bg-white drop-shadow-2xl border-black"
        activeOpacity={0.5} 
        onPress={onToggle}
        >
          <Text className="font-medium">Where is your adventure?</Text>
        </TouchableOpacity>
    )

    const ExpandedContent = (
        <View
            className="mx-5 my-2 p-5 items-center justify-center w-11/12 rounded-3xl bg-white drop-shadow-2xl border-black"
        >
            <TouchableOpacity
                onPress={onToggle}
                hitSlop={{ top: 20, bottom: 20, left: 60, right: 140 }} 
            >
                <Text className="font-medium text-2xl mb-5">Select your destination</Text>
            </TouchableOpacity>
            <View className="w-full items-center justify-center">
                <View className="p-4 w-11/12 h-15 rounded-xl drop-shadow-2xl border-gray-400 border-2 flex-row">
                    <MagnifyingGlassIcon size={18} color="black" strokeWidth={1.5}/>
                        <TextInput className="pl-2" onChangeText={setSearchText} value={searchText}/>             
                    <TextInput/>
                </View>
            </View>
        </View>
            
    )

    
        
    return isExpanded ? ExpandedContent : MinimizedContent;
}
