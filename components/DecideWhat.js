import {Text, View, TouchableOpacity, Button } from 'react-native';
import React, {useEffect, useState} from 'react';

export default function DecideWhat({isExpanded, onToggle, onDataRecieved, onCancel, onConfirm}) {

  let initalTags = {
    "Retreat": false,
    "Business": false,
    "Nightlife": false,
    "Leisure": false,
    "Explore": false,
    "Adventure": false,
    "Early Riser": false,
    "Relaxed Morning": false,
    "DayStartBoth": false,
    "Packed Days": false,
    "Moderate": false,
    "Downtime": false,
    "Strict Schedule": false,
    "Flexible": false,
    "Very Flexible": false,
    "Museums": false,
    "Outdoor Activities": false,
    "Historical Sites": false,
    "Local Markets": false,
    "Culinary Expeditions": false,
    "Local Food": false,
    "Vegan": false,
    "Vegetarian": false,
  };


  const [tags, setTags] = useState(initalTags);
  const [confirmPressed, setConfirmPressed] = useState(false);


  const handleConfirm = () => {
    onConfirm(tags);
  }

  useEffect(() => {
    onDataRecieved(tags);
  }, [tags]);

  const renderTag = (text) => {
    return (
      <TouchableOpacity 
        onPress={() => toggleTag(text)} 
        className="rounded-full py-2 px-4 my-1 mx-0.5"
        style={{backgroundColor: tags[text] ? '#f97316' : '#d1d5db', alignSelf: 'flex-start'}}
      >
        <Text className="text-white">{text}</Text>
      </TouchableOpacity>
    );
  }

  const toggleTag = (tagName) => {
    setTags((prevState) => ({
        ...prevState,
        [tagName]: !prevState[tagName]
    })
    );
    
  };
  

  const MinimizedContent = (
    <TouchableOpacity
          className="flex my-2 mx-5 p-5 flex-row justify-center w-11/12 rounded-3xl bg-white drop-shadow-2xl border-black"
          activeOpacity={0.5} 
          onPress={onToggle}
          >
            <Text className="font-medium">What kind of trip do you want?</Text>
    </TouchableOpacity>
  )

  const ExpandedContent = (
    <View
    className="relative inset-0 mx-5 p-2 w-11/12 rounded-3xl bg-white border-black shadow-xl z-20"
    > 
      <TouchableOpacity 
          
          hitSlop={{ top: 20, bottom: 20, left: 60, right: 140 }} 
          onPress={onToggle} 
          className="items-center"
        >
        <Text className="m-2 font-medium text-xl">What does your trip look like?</Text>
      </TouchableOpacity>    
        <Text className= "font-light my-2 mx-2">What is the purpose of the trip?</Text>
        <View className="mb-2 flex-row flex-wrap">
            {renderTag("Business", tags["Business"])}
            {renderTag("Leisure", tags["Leisure"])}
            {renderTag("Explore", tags["Explore"])}
            {renderTag("Adventure", tags["Adventure"])}
        </View>

        <Text className= "font-light my-2 mx-2">How do you want to start your days?</Text>
        <View className="flex-row flex-wrap">
          {renderTag("Early Riser", tags["EarlyRiser"])}
          {renderTag("Relaxed Morning", tags["RelaxedMorning"])}
          {renderTag("Both", tags["Both"])}
        </View>

        <Text className= "font-light my-2 mx-2">Time between activities?</Text>
        <View className="flex-row">
          {renderTag("Packed days", tags["PackedDays"])}
          {renderTag("Moderate", tags["Moderate"])}
          {renderTag("Lots of downtime", tags["Downtime"])}
        </View>

        <Text className= "font-light my-2 mx-2">Flexibility?</Text>
        <View className="flex-row flex-wrap">
          {renderTag("Strict Schedule", tags["StrictSchedule"])}
          {renderTag("Flexible", tags["Flexible"])}
          {renderTag("Very Flexible", tags["VeryFlexible"])}
        </View>

        <Text className= "font-light my-2 mx-2 flex-wrap">Interests and Preferences?</Text>
        <View className="flex-row flex-wrap">
          {renderTag("Retreat", tags["Retreat"])}
          {renderTag("Local Markets", tags["LocalMarkets"])}
          {renderTag("Nightlife", tags["Nightlife"])}
          {renderTag("Outdoor Activities", tags["OutdoorActivities"])}
          {renderTag("Culinary Expeditions", tags["CulinaryExpeditions"])}
          {renderTag("Historical Sites", tags["HistoricalSites"])}
          {renderTag("Museums", tags["Museums"])}
        </View>

        <Text className= "font-light my-2 mx-2">Dietary Preferences?</Text>
        <View className="flex-row flex-wrap">
          {renderTag("Local food", tags["LocalFood"])}
          {renderTag("Vegan", tags["Vegan"])}
          {renderTag("Vegetarian", tags["Vegetarian"])}
        </View>
        <View className="flex-row flex-wrap justify-between my-4 mx-3">
          <Button onPress={onCancel} title='cancel' />
          <Button onPress={handleConfirm} title='confirm'/>
        </View>
    </View>
  )

  return isExpanded ? ExpandedContent : MinimizedContent;
}

