import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {XCircleIcon, ArrowLeftCircleIcon} from 'react-native-heroicons/outline';
import React, { useState } from 'react';
import DecideWhat from './DecideWhat';
import DecideWhen from './DecideWhen';
import DecideWhere from './DecideWhere';
import DecideWho from './DecideWho';

export default function ExpandedSearchBar({ onClose }) {
  const [expandedComponent, setExpandedComponent] = useState("where");
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
      <TouchableOpacity className="m-5" onPress={onClose}>
              <XCircleIcon size={30} color="black" />
      </TouchableOpacity>
      <DecideWhere isExpanded={expandedComponent === "where"} onToggle={() => handleToggleExpand("where")}/>
      <DecideWhen isExpanded={expandedComponent === "when"} onToggle={() => handleToggleExpand("when")}/>
      <DecideWho isExpanded={expandedComponent === "who"} onToggle={() => handleToggleExpand("who")}/>
      <DecideWhat isExpanded={expandedComponent === "what"} onToggle={() => handleToggleExpand("what")}/>
    </View>
  )
}
