import { Text, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import DayObject from '../components/DayObject';
import EventObject from '../components/EventObject';


export default function TripDetailsScreen({route}) {
  const events = route.params.tripObject.events;
  const groupedByDay = events.reduce((acc, event) => {
    // If the day doesn't exist in the accumulator, create an empty array for it.
    if (!acc[event.day]) {
      acc[event.day] = [];
    }
    // Push the event into the array for the appropriate day.
    acc[event.day].push(event);
    return acc;
  }, {});
  
  // Convert the object to an array of arrays.
  const days = Object.values(groupedByDay);
  
  const navigator = useNavigation();


  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView className="flex-1">
      <Carousel
        loop
        width={screenWidth}
        height={screenWidth/1.5}
        autoPlay={false}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
          <View className="flex-1 border-0.5 justify-center">
              <Text className="text-xl text-center">{index}</Text>
          </View>
        )}
      />
      <TouchableOpacity 
        className="absolute mx-2 mt-14 bg-orange-300 rounded-full w-10 h-10 items-center justify-center" 
        onPress={navigator.goBack}
      >
        <ArrowLeftIcon size={28} color={"white"}/>
      </TouchableOpacity>
      {days.map((day, index) => (
        <View>
          <DayObject key={index} description={day[0].day} events={day}/>
        </View>
      ))}

      
    </ScrollView>
  )
}
