import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import TripObject from '../components/TripObject';
//import { useSelector, ReactReduxContext } from 'react-redux';



export default function TripScreen() {
  //debug reactreduxcontext
  //const context = useContext(ReactReduxContext);
  //console.log(context);


  // const trips = useSelector(state => state.trip.trips);
  const trips = [
    { 
      tripId: "trip0",
      location: "Toronto, Canada",
      tripPicture: null,
      days: [
        {
          description: "this is day 1",
          events: [
            {
                eventTitle: "Tandoori Flames",
                eventDescription: "popular buffet specializing in high-quality indian food",
                eventLocation: [43.612132, -79.694966],
                eventContact: +19055028555,
                eventPrice: '$',
                eventRatings: '2.0/5'
                //eventPhotos: []
            },
          ]
        },
      ],
    },
    {
      tripId: "trip1",
      location: "London, UK",
      tripPicture: null,
      days: [
        {
          events: [
            {
                eventTitle: "Madame Tussauds",
                eventDescription: "popular wax museum in london",
                eventLocation: [51.523588, -0.154801],
                eventContact: +442074870351,
                //eventPhotos: []
            },
          ]
        },
      ],
      
    }
  ]


  return (
    <ScrollView className="">
      <View className="flex-1 mx-2 mt-14">
        <Text className="ml-2 text-2xl">Your trips</Text>
        <View className="flex-1">
          {trips.map((trip, index) => (
            <TripObject key={index} tripObject={trip}/>
          ))}
        </View>
      </View>
    </ScrollView>
    
  )
}
