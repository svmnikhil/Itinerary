import { Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronRightIcon} from 'react-native-heroicons/solid';
import {Cog6ToothIcon, AdjustmentsHorizontalIcon, QuestionMarkCircleIcon, HandThumbUpIcon, PlusIcon} from 'react-native-heroicons/outline';
import ModalContext from '../Modals/ModalContext';
import RegisterScreen from './RegisterScreen';

//username object contains: 
//user id
//username
//member since month/year

export default function ProfileScreen() {
  const {showModal} = useContext(ModalContext);
//   const [user, setUser] = useState({});
  
  
  const user = {
    name: 'Nikhil Sivapuram',
    member_since: '07/22',
    password: '88microsoft'
  }

//   setUser(user_nikhil);
  const RegisterContent = (
    <RegisterScreen />
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="mx-7 mt-6 mb-3 flex-row justify-between">
            <TouchableOpacity className="w-30 h-30 p-8 shadow bg-slate-200 rounded-full items-center justify-center" activeOpacity={0.8}>
                {!user?.image ?
                    <PlusIcon size={28} color={'white'} />
                : null}
            </TouchableOpacity>
            <TouchableOpacity hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                <Text>Log out</Text>
            </TouchableOpacity>
        </View>
        <View className="mx-7">
            <Text className="font-semibold text-xl">
                {user.name}
            </Text>
        </View>
        <View className="mx-7 mb-4">
            <Text className="font-light text-lg">
                Member since {user.member_since}
            </Text>
        </View>
        {!user ? <>
        (<View className="my-5">
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
        </View>) </>
        : null}

        {/* bottom half of the screen */}
        <View className="flex flex-col justify-end mt-auto mb-auto">
            <View className="mx-7 border-b border-slate-400">
                <TouchableOpacity 
                className="py-3.5 justify-between items-center flex-row"
                onPress={() => {}}
                >
                    <View className="flex-row items-center">
                        <Cog6ToothIcon size={28} color="black" />
                        <Text className="text-xl ml-2">Notification Preferences</Text> 
                    </View>
                    <ChevronRightIcon size={22} color="black"/>
                </TouchableOpacity> 
            </View>
            {/* <View className="mx-7 border-b border-orange-400">
                <TouchableOpacity 
                className="py-3.5 justify-between items-center flex-row"
                onPress={() => {}}
                >
                    <View className="flex-row items-center">
                        <AdjustmentsHorizontalIcon size={28} color="black" />
                        <Text className="text-xl ml-2">Accessibility</Text> 
                    </View>
                    <ChevronRightIcon size={22} color="black"/>
                </TouchableOpacity> 
            </View> */}
            <View className="mx-7 border-b border-slate-400">
                <TouchableOpacity 
                className="py-3.5 justify-between items-center flex-row"
                onPress={() => {}}
                >
                    <View className="flex-row items-center">
                        <HandThumbUpIcon size={28} color="black" />
                        <Text className="text-xl ml-2">Rate Us On The App Store</Text> 
                    </View>
                    <ChevronRightIcon size={22} color="black"/>
                </TouchableOpacity> 
            </View>
            <View className="mx-7">
                <TouchableOpacity 
                className="py-3.5 justify-between items-center flex-row"
                onPress={() => {}}
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
