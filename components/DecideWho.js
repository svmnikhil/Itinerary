import { Text, View, TouchableOpacity } from 'react-native';
import {PlusCircleIcon, MinusCircleIcon} from 'react-native-heroicons/outline';
import React, {useEffect, useState} from 'react';

export default function DecideWho({ isExpanded, onToggle, onDataRecieved }) {
  const [seniors, setSeniors] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);

  useEffect(() => {
    onDataRecieved({
      "seniors":seniors,
      "adults": adults,
      "children": children,
      "pets": pets});
  },[seniors,adults,children,pets]);

  const changeCount = (isIncrement, ref) => {
    let setter;
    let currentValue;

    switch (ref) {
      case 'Seniors':
        setter = setSeniors;
        currentValue = seniors;
        break;
      case 'Adults':
        setter = setAdults;
        currentValue = adults;
        break;
      case 'Children':
        setter = setChildren;
        currentValue = children;
        break;
      case 'Pets':
        setter = setPets;
        currentValue = pets;
        break;
      default:
        throw new Error(`Unknown ref: ${ref}`);
    }

    if (isIncrement) {
      setter(currentValue + 1);
    } else {
      if(currentValue != 0){
        setter(currentValue - 1);
      }
    }
  }

  const PeopleButton = ({peopleType, count}) => {
    return ( 
      <View className="items-center justify-between flex-row mr-2">
        <Text>{peopleType}</Text>
        <View className="flex-row items-center justify-between w-16 h-10 ">
          <MinusCircleIcon opac onPress={() => changeCount(false, peopleType)} color="black"/>
          <Text>{count}</Text>
          <PlusCircleIcon onPress={() => changeCount(true, peopleType)} color="black"/>
        </View>
      </View>
    );
  }
  

  const MinimizedContent = (
    <TouchableOpacity
    className="my-2 mx-5 p-5 flex-row justify-center w-11/12 rounded-3xl bg-white drop-shadow-2xl border-black"
    activeOpacity={0.5} 
    onPress={onToggle}
    >
      <Text className="font-medium">How many are going?</Text>
    </TouchableOpacity>
  )

  const ExpandedContent = (
    <TouchableOpacity
      className="mx-5 my-2 p-5 items-center w-11/12 rounded-3xl bg-white drop-shadow-2xl border-black"
      onPress={onToggle}
    >
      <Text className="font-medium text-2xl mb-5">Who's coming?</Text>
      <View className="w-full ml-2 justify-center">
        <PeopleButton peopleType="Seniors" count={seniors}/>
        <PeopleButton peopleType="Adults" count={adults}/>
        <PeopleButton peopleType="Children" count={children}/>
        <PeopleButton peopleType="Pets" count={pets}/>
      </View>
    </TouchableOpacity>
  )

  return isExpanded ? ExpandedContent : MinimizedContent;
}

//a counter requires a count state, and buttons to change the state
//it needs to show the value of the counter between the buttons
//the changeState function should update state by knowing if its + or - and knowing which variable it is changing