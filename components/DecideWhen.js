import {Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React, {useState} from 'react';

export default function DecideWhen({ isExpanded, onToggle }) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const handleDayPress = day => {
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(day.dateString);
      setSelectedEndDate(null);
    } else if (!selectedEndDate) {
      const startTimestamp = new Date(selectedStartDate).getTime();
      const endTimestamp = new Date(day.dateString).getTime();
  
      if (endTimestamp >= startTimestamp) {
        setSelectedEndDate(day.dateString);
      } else {
        setSelectedEndDate(selectedStartDate);
        setSelectedStartDate(day.dateString);
      }
    }
  };
  
  const getMarkedDates = () => {
    let range = {};
    if (selectedStartDate && selectedEndDate) {
      let current = new Date(selectedStartDate);
      let end = new Date(selectedEndDate);
  
      while (current <= end) {
        const dateString = current.toISOString().split('T')[0];
        range[dateString] = { selected: true, color: '#5A67D8' }; // example color
        current = new Date(current.setDate(current.getDate() + 1));
      }
    } else if (selectedStartDate) {
      range[selectedStartDate] = { selected: true, color: '#5A67D8' };
    }
  
    return range;
  };

  const ExpandedContent = (
      <View 
      className="flex-1 rounded-3xl overflow-hidden mx-5 my-2 w-11/12 bg-white"
      >
      <TouchableOpacity 
        activeOpacity={0.5} 
        hitSlop={{ top: 20, bottom: 20, left: 60, right: 140 }} 
        onPress={onToggle} 
      >
        <Text className="m-6 font-medium text-2xl">When's your trip?</Text>
      </TouchableOpacity>  
        <CalendarList
          pastScrollRange={0} //cannot go backwards in time
          futureScrollRange={12}  // allows 12 month in the future
          scrollEnabled={true}  // enable scroll
          hideExtraDays={false}   // hide extra days outside of the current month
          showScrollIndicator={false} // hide scroll indicator
          className="h-full"
          calendarWidth={400}
          markingType={'period'}
          markedDates={getMarkedDates()}
          onDayPress={handleDayPress}
        >
        </CalendarList>
    </View>

  )

  const MinimizedContent = (
    <TouchableOpacity
      className="flex my-2 mx-5 p-5 flex-row justify-between w-11/12 rounded-3xl bg-white drop-shadow-2xl border-black"
      activeOpacity={0.5} 
      onPress={onToggle}
      >
        <Text>When</Text>
        <Text>Add dates</Text>
      </TouchableOpacity>
  )
  
  return isExpanded ? ExpandedContent : MinimizedContent;

}
