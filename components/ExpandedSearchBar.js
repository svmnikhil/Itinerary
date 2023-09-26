import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {XCircleIcon, ArrowLeftCircleIcon} from 'react-native-heroicons/outline';
import React, { useState } from 'react';
import DecideWhat from './DecideWhat';
import DecideWhen from './DecideWhen';
import DecideWhere from './DecideWhere';
import DecideWho from './DecideWho';
import axios from 'axios';

export default function ExpandedSearchBar({ onClose }) {
  const [expandedComponent, setExpandedComponent] = useState("where");
  const [whereData, setWhereData] = useState("Nearby");
  const [whenData, setWhenData] = useState({"startDate": new Date(), "endDate": new Date(), "days": 1});
  const [whoData, setWhoData] = useState({});
  const [whatData, setWhatData] = useState(null);
  // I have 2 children and 2 adults, they are travelling to hyderabad for 10 days, these are their interests, these are their favourite places nearby,
  // give me an 10 day itinerary
  const handleWhereData = (data) => {
    setWhereData(data);
    console.log(whereData);
  }

  const handleWhenData = (data) => {
    setWhenData(data);
    console.log(whenData);
  }

  const handleWhoData = (data) => {
    setWhoData(data);
    console.log(whoData);
  }
  
  const onConfirm = (data) => {
    setWhatData(data);
    const queryData = {
        whereData, 
        whenData, 
        whoData, 
        whatData
    };
    
    console.log(queryData);

    try {
      axios.post('http://10.0.0.8:8080/trips/generate', queryData);
    } catch (error) {
      console.log(error);
    }
  }

  const orange_color = '#f97316'

  const handleToggleExpand = (component) => {
    if (expandedComponent === component) {
      setExpandedComponent(null); // collapse if clicked component is already expanded
    } else {
      setExpandedComponent(component); // expand clicked component
    }
  };

  return (
    <View className="flex-1 items-start">
      <TouchableOpacity 
        className="m-5" 
        hitSlop={{ top: 580, bottom: 20, left: 60, right: 380}} 
        onPress={onClose}>
      </TouchableOpacity>
      {expandedComponent !== "what" && (
      <>
        <DecideWhere 
          isExpanded={expandedComponent === "where"} 
          onToggle={() => handleToggleExpand("where")} 
          onDataRecieved={handleWhereData}
          />
        <DecideWhen 
          isExpanded={expandedComponent === "when"} 
          onToggle={() => handleToggleExpand("when")} 
          onDataRecieved={handleWhenData}
          />
      </>
    )}

      <DecideWho 
        isExpanded={expandedComponent === "who"} 
        onToggle={() => handleToggleExpand("who")}
        onDataRecieved={handleWhoData}/>   
      <DecideWhat 
        isExpanded={expandedComponent === "what"} 
        onToggle={() => handleToggleExpand("what")} 
        onCancel={onClose}
        onConfirm={onConfirm}/>
    </View>
  )
}
