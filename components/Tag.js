import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';


export default function Tag({text, isActive, setToggle }) {
    console.log('onToggle value: ', setToggle);
    console.log('Type of onToggle: ', typeof setToggle);
    const [isPressed,setIsPressed] = useState(false);

    const handleToggleTag = () => {
        setToggle(text);
    }

    return (
        <TouchableOpacity 
            onPress={handleToggleTag} 
            className="rounded-full py-2 px-4 my-1 mx-1"
            style={{backgroundColor: isActive ? '#f97316' : '#d1d5db', alignSelf: 'flex-start'}}
            >
            <Text className="text-white">{text}</Text>
        </TouchableOpacity>
    )
}
