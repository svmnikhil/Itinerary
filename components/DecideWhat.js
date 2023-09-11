import {Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function DecideWhat() {
  return (
    <TouchableOpacity
          className="flex my-2 mx-5 p-5 flex-row justify-between w-11/12 rounded-3xl bg-white drop-shadow-2xl border-black">
            <Text>What</Text>
            <Text>Add Experiences</Text>
    </TouchableOpacity>
  )
}

