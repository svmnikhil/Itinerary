import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function TripObject ({tripObject}) {
    const [seeDetails, setSeeDetails] = useState(false);
    const navigator = useNavigation();
    const {tripId, tripPicture, location, days} = tripObject;
    console.log(tripId, tripPicture, location, days);
   
    const handleSeeTrip = () => {
        navigator.navigate('TripDetailsScreen', {days: days});
    }

    return (
    <View className="h-full w-full rounded-3xl bg-white my-4 shadow">
        {/**picture goes here */}
        <View className="inline-flex px-4 py-2 m-4">
            <Text className="text-black font-bold text-xl">Trip to {location}</Text>
        </View>
        <View className="absolute w-full flex-row -bottom-6">
            <TouchableOpacity className="w-1/2 h-12 ml-4 rounded-3xl bg-orange-300" activeOpacity={0.8}>
                <Text className="text-white m-auto">other attractions on route</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-1/3 h-12 ml-8 rounded-3xl bg-orange-300" onPress={handleSeeTrip} activeOpacity={0.8}>
                <Text className="text-white m-auto" >see trip details</Text>

            </TouchableOpacity>
        </View>
        
    </View>
    )
}