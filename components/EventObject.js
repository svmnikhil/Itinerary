import { Text, View, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import { useNavigation } from '@react-navigation/native';

export default function EventObject({eventData}) {
    const {name, phone_number, gpt_description, location, price, rating} = eventData;
    const navigator = useNavigation();

    const handleEventDetails = () => {
        navigator.navigate('EventDetailsScreen', {eventDetails: eventData});
    }
  return (
    <View className="flex-row">
        <View className="flex-1">
            <Text className="my-2 text-xl font-semibold">{name}</Text>
            <View className="flex flex-row h-28 bg-white rounded-2xl shadow-md">
                <TouchableOpacity className="ml-2 mt-2 flex-col flex items-start" activeOpacity={0.7} onPress={handleEventDetails}>
                    {/* <Text className="flex w-60 text-xs">{gpt_description}</Text> */}
                    <View className="flex flex-row w-60 mt-4">
                        <View className="flex flex-col mr-7">
                            <Text>Ratings: {rating}</Text>
                            <TouchableOpacity>
                                <Text>{phone_number}</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="flex flex-col">
                        <Text>Price: {price}</Text>
                            
                            <TouchableOpacity>
                                <Text>Book for me</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 overflow-visible justify-center items-end">
                    <MapView style={{
                            width: '100%', 
                            height: '120%',  
                        }}
                        initialRegion={{
                            latitude: Number(location[0]),
                            longitude: Number(location[1]),
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        <Marker
                            coordinate={{
                            latitude: Number(location[0]),
                            longitude: Number(location[1]),
                            }}
                            title={name} // Optional title for the marker
                        />
                    </MapView>
            
                </TouchableOpacity>
            </View> 
        </View>
    </View>
    
  )
}
