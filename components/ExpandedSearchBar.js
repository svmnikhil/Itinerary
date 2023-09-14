import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {XCircleIcon, ArrowLeftCircleIcon} from 'react-native-heroicons/outline';
import React, { useState } from 'react';
import DecideWhat from './DecideWhat';
import DecideWhen from './DecideWhen';
import DecideWhere from './DecideWhere';
import DecideWho from './DecideWho';

export default function ExpandedSearchBar({ onClose }) {
  const [expandedComponent, setExpandedComponent] = useState("where");
  const [whereData, setWhereData] = useState("Nearby");
  const [whenData, setWhenData] = useState({"startDate": new Date(), "endDate": new Date()});
  const [whoData, setWhoData] = useState({});
  const [whatData, setWhatData] = useState(null);

  const handleWhereData = (data) => {
    setWhereData(data);
    console.log(data);
  }

  const handleWhenData = (data) => {
    setWhenData(data);
    console.log(data);
  }

  const handleWhoData = (data) => {
    setWhoData(data);
    console.log(data);
  }
  
  const onConfirm = (data) => {
    console.log(data);
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
        hitSlop={{ top: 580, bottom: 20, left: 60, right: 300}} 
        onPress={onClose}>
      </TouchableOpacity>
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
