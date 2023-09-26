import { Text, TouchableOpacity, View, Animated} from 'react-native';
import React, { useState } from 'react';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';

export default function SearchBar({ onPress }) {

    const [pressed, setPressed] = useState(false);
    const [height] = useState(new Animated.Value(48)); 

    const handlePressIn = () => {
        setPressed(true);
        setTimeout(() => setPressed(false), 200);
        Animated.timing(height, {
            toValue: 64, // final height
            duration: 200,
            useNativeDriver: false,
        }).start();
        onPress && onPress();
    };


    return (
    <View
        className="flex mx-auto p-5 justify-center w-11/12 h-12 rounded-3xl bg-white drop-shadow-2xl border-black"
    >
            <Animated.View style={{ height }}className="items-center flex-row w-full">
                <MagnifyingGlassIcon size={18} color="black" strokeWidth={1.5}/>
                    <TouchableOpacity activeOpacity={0.5} hitSlop={{ top: 10, bottom: 10, left: 50, right: 100 }} onPress={handlePressIn}>
                        <View className="ml-5 flex-col items-start">
                            <Text className={pressed ? 'font-medium text-opacity-50' : 'font-medium'}>Let's create your itinerary</Text>
                        </View>
                    </TouchableOpacity>
            </Animated.View>
    </View>
    )
}
