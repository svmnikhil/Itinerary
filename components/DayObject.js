import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import EventObject from './EventObject';
import { ChevronDownIcon, PencilSquareIcon, ChevronRightIcon} from 'react-native-heroicons/outline';

export default function DayObject({description, events}) {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
    <View className="p-3">
        <TouchableOpacity 
            className="flex flex-row justify-between p-3 h-12 items-center bg-orange-300 shadow rounded-full"
            onPress={handleToggle}
            activeOpacity={0.7}
            >
            <View className="">

            </View>
            <Text className="text-white font-semibold text-lg">{description}</Text>
            <View>
                {isOpen ? <ChevronDownIcon color={"white"} strokeWidth={2}/> : <ChevronRightIcon color={"white"} strokeWidth={2}/>}
            </View>
        </TouchableOpacity>
        {isOpen && <View>
            {events.map((event, eventIndex) => (
            <EventObject key={eventIndex} eventData={event} />
          ))}
        </View>}
    </View>
    )
}
