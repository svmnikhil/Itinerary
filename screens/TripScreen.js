import { Text, View, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import TripObject from '../components/TripObject';
import { useSelector, ReactReduxContext, connect } from 'react-redux';


export default function TripScreen() {
  const trips = useSelector((state) => state.trip.trips);
  console.log(trips);
    return (
    <ScrollView className="flex-grow">
      <View className="flex-1 mx-2 mt-14">
        <Text className="ml-2 text-2xl">Your trips</Text>
        {/* <View className="flex-1">
          {trips.map((trip, index) => (
            <TripObject key={index} tripObject={trip} whereData={trip.where}/>
          ))}
        </View> */}
      </View>
    </ScrollView>
  )
}
