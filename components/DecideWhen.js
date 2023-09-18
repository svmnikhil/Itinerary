import {Text, View, TouchableOpacity, Dimensions } from 'react-native';
import {Calendar} from 'react-native-calendars';
import React, {useEffect, useState} from 'react';

export default function DecideWhen({ isExpanded, onToggle, onDataRecieved}) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [range, setRange] = useState(null)
  
  useEffect(() => {
    onDataRecieved({
      "startDate": selectedStartDate,
      "endDate": selectedEndDate});
  },[selectedEndDate, selectedStartDate]);
  
  const screenWidth = Dimensions.get('window').width;

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
      className="flex-1 items-center rounded-3xl overflow-hidden mx-5 my-2 w-11/12 bg-white"
      >
      <TouchableOpacity 
        activeOpacity={0.5} 
        hitSlop={{ top: 20, bottom: 20, left: 60, right: 140 }} 
        onPress={onToggle} 
      >
        <Text className="m-6 font-medium text-2xl">Choose your dates</Text>
      </TouchableOpacity>  
        <Calendar
          // Note: No need for pastScrollRange and futureScrollRange since it's not a list
          hideExtraDays={false} // hide extra days outside of the current month
          markingType={'period'}
          markedDates={getMarkedDates()}
          onDayPress={handleDayPress}
          style={{ width: screenWidth * 0.9167}}
        />
    </View>

  )

  const MinimizedContent = (
    <TouchableOpacity
      className="flex my-2 mx-5 p-5 flex-row justify-center w-11/12 rounded-3xl bg-white drop-shadow-2xl border-black"
      activeOpacity={0.5} 
      onPress={onToggle}
      >
        <Text className="font-medium">When are you going?</Text>
      </TouchableOpacity>
  )
  
  return isExpanded ? ExpandedContent : MinimizedContent;

}
