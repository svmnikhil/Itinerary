import { Text, View, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import Carousel from 'react-native-reanimated-carousel';


export default function EventDetailsScreen({route}) {
    const {eventTitle, eventContact, eventDescription, eventLocation, eventPrice, eventRatings} = route.params.eventDetails;
    const navigator = useNavigation();

    const screenWidth = Dimensions.get('window').width;

    const detailWidget = () => {
        <View className="bg-white">

        </View>
    }


  return (
    <ScrollView className="flex-1 flex-col mx-2 mt-14">  
        <TouchableOpacity 
        className="bg-orange-300 rounded-full w-10 h-10 items-center justify-center" 
        onPress={navigator.goBack}
        >
            <ArrowLeftIcon size={28} color={"white"}/>
        </TouchableOpacity>

        <View className="mt-12 rounded-3xl bg-orange-300">
            <View className="items-center -top-6 rounded-3xl overflow-hidden mx-4 bg-white shadow">
                <Carousel
                    loop
                    width={screenWidth}
                    height={screenWidth/1.2}
                    autoPlay={false}
                    data={[...new Array(6).keys()]}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => console.log('current index:', index)}
                    renderItem={({ index }) => (
                    <View className="flex-1 justify-center">
                        <Text className="text-xl text-center">{index}</Text>
                    </View>
                    )
                }
                />
            </View>
            <View className="bg-white border-0.5 rounded-2xl p-5 h-auto mx-3">
                    <Text className="flex-wrap">{eventDescription}</Text>
            </View>
            {/* <View className="flex flex-row justify-between mt-2 mx-3">
                <View className="bg-white border-0.5 rounded-2xl p-5 items-center">
                    <Text className="flex-wrap">{eventDescription}</Text>
                </View>
            </View> */}
            <View className="flex flex-row justify-between mt-2 mx-3">
                <View className="bg-white border-0.5 px-2 py-4 rounded-2xl items-start justify-center w-auto h-auto flex-col">
                    <Text className="my-1">Contact number: {eventContact}</Text>
                    <Text className="my-1">Price: {eventPrice}</Text>
                    <Text className="my-1">Ratings: {eventRatings}</Text>

                </View>
                <View className="bg-white border-0.5 p-2 rounded-2xl w-40 h-40 items-center">
                <MapView style={{
                            width: '100%', 
                            height: '100%',  
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
                </View>
            </View>   
        </View>
    </ScrollView>
  )
}