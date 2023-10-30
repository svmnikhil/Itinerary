import { Text, View, TouchableOpacity, TextInput} from 'react-native';
import {XCircleIcon, ArrowLeftCircleIcon} from 'react-native-heroicons/outline';
import React, { useState } from 'react';
import DecideWhat from './DecideWhat';
import DecideWhen from './DecideWhen';
import DecideWhere from './DecideWhere';
import DecideWho from './DecideWho';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';
import { addTrip } from '../redux/slices/tripSlice/tripReducer';

export default function ExpandedSearchBar({ onClose }) {
  const dispatch = useDispatch();
  //const trips = useSelector((state) => state.trip.trips); // adjust the state path based on your store configuration

  const [expandedComponent, setExpandedComponent] = useState("where");
  const [whereData, setWhereData] = useState("Nearby");
  const [whenData, setWhenData] = useState({"startDate": new Date(), "endDate": new Date(), "days": 1});
  const [whoData, setWhoData] = useState({});
  const [whatData, setWhatData] = useState({});

  const handleWhereData = (data) => {
    setWhereData(data);
    //console.log(whereData);
  }

  const handleWhenData = (data) => {
    setWhenData(data);
    //console.log(whenData);
  }

  const handleWhoData = (data) => {
    setWhoData(data);
    //console.log(whoData);
  }
  
  const handleWhatData = (data) => {
    setWhatData(data);
    //console.log(whatData);
  }
  
  const onConfirm = (data) => {
    const queryData = {
        whereData, 
        whenData, 
        whoData, 
        whatData
    };
    
    console.log(queryData);

    try {
      axios.post('http://10.0.0.8:8080/trips/generate', queryData)
      .then(response => {
        console.log(response.data.trip.cityPictures);
        console.log(response.data.trip.events);
        const locationPictures = response.data.trip.cityPictures;
        const events = response.data.trip.events;
        dispatch(addTrip({cityPictures, events, whereData}));
    })
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
        onDataRecieved={handleWhatData}
        onCancel={onClose}
        onConfirm={onConfirm}/>
    </View>
  )
}
