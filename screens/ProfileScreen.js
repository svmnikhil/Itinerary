import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {ChevronRightIcon} from 'react-native-heroicons/solid';
import {Cog6ToothIcon, AdjustmentsHorizontalIcon, QuestionMarkCircleIcon} from 'react-native-heroicons/outline';
import ModalContext from '../Modals/ModalContext';
import RegisterScreen from './RegisterScreen';



export default function ProfileScreen() {
  const navigation = useNavigation();
  const {showModal} = useContext(ModalContext);

  const RegisterContent = (
    <RegisterScreen />
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="mx-7 mt-10">
            <Text className="font-semibold text-4xl">
                Profile
            </Text>
        </View>
        <View className="mx-7 mb-4">
            <Text className="font-extralight text-xl">
                Log in to start planning your next trip.
            </Text>
        </View>
        <View className="my-5">
            <TouchableOpacity className="py-3 bg-orange-500 mx-7 rounded-xl" onPress={() => showModal(RegisterContent)}>
                <Text className="text-xl font-semibold text-center text-white">
                Log in
                </Text>
            </TouchableOpacity>
        </View>
        <View className="flex-row mx-7 justify-left mb-10">
            <Text className= "font-light">Don't have an account? </Text>
            <TouchableOpacity onPress={() => showModal(RegisterContent)}>
                <Text className="underline">
                Sign up
                </Text>
            </TouchableOpacity>
        </View>

        {/* bottom half of the screen */}
        <View className="flex flex-col justify-end mt-auto mb-auto">
            <View className="mx-7 border-b border-slate-400">
                <TouchableOpacity 
                className="py-3.5 justify-between items-center flex-row"
                onPress={() => navigation.navigate('Explore')}
                >
                    <View className="flex-row items-center">
                        <Cog6ToothIcon size={28} color="black" />
                        <Text className="text-xl ml-2">Settings</Text> 
                    </View>
                    <ChevronRightIcon size={22} color="black"/>
                </TouchableOpacity> 
            </View>
            <View className="mx-7 border-b border-slate-400">
                <TouchableOpacity 
                className="py-3.5 justify-between items-center flex-row"
                onPress={() => navigation.navigate('Login')}
                >
                    <View className="flex-row items-center">
                        <AdjustmentsHorizontalIcon size={28} color="black" />
                        <Text className="text-xl ml-2">Accessibility</Text> 
                    </View>
                    <ChevronRightIcon size={22} color="black"/>
                </TouchableOpacity> 
            </View>
            <View className="mx-7">
                <TouchableOpacity 
                className="py-3.5 justify-between items-center flex-row"
                onPress={() => navigation.navigate('Explore')}
                >
                    <View className="flex-row items-center">
                        <QuestionMarkCircleIcon size={28} color="black" />
                        <Text className="text-xl ml-2">Get help</Text> 
                    </View>
                    <ChevronRightIcon size={22} color="black"/>
                </TouchableOpacity>
            </View>    
        </View>
    </SafeAreaView>
  )
}
