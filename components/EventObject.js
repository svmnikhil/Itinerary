import { Text, View, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import { useNavigation } from '@react-navigation/native';

export default function EventObject({eventData}) {
    const {eventTitle, eventContact, eventDescription, eventLocation, eventPrice, eventRatings} = eventData;
    const navigator = useNavigation();

    const handleEventDetails = () => {
        navigator.navigate('EventDetailsScreen', {eventDetails: eventData});
    }
  return (
    <View className="flex-row">
        <View className="flex-1">
            <Text className="my-2 text-xl font-semibold">{eventTitle}</Text>
            <View className="flex flex-row h-28 bg-white rounded-2xl shadow-md">
                <TouchableOpacity className="ml-2 mt-2 flex-col flex items-start" activeOpacity={0.7} onPress={handleEventDetails}>
                    <Text className="flex w-60 text-xs">{eventDescription}</Text>
                    <View className="flex flex-row w-60 mt-4">
                        <View className="flex flex-col mr-7">
                            <Text>Ratings: {eventRatings}</Text>
                            <TouchableOpacity>
                                <Text>{eventContact}</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="flex flex-col">
                        <Text>Price: {eventPrice}</Text>
                            
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
                            latitude: Number(eventLocation[0]),
                            longitude: Number(eventLocation[1]),
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        <Marker
                            coordinate={{
                            latitude: Number(eventLocation[0]),
                            longitude: Number(eventLocation[1]),
                            }}
                            title={eventTitle} // Optional title for the marker
                        />
                    </MapView>
            
                </TouchableOpacity>
            </View> 
        </View>
    </View>
    
  )
}
