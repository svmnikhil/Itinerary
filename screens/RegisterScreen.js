import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {XMarkIcon} from 'react-native-heroicons/outline';
import Modal from 'react-native-modal';

export default function RegisterScreen() {
  const [isModalVisible, setModalVisible] = useState(true);

  const orange_color = '#f97316'
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View className="flex-1 justify-center items-center ">
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={{ justifyContent: 'flex-end', margin: 0 }}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        swipeDirection="down"
        onSwipeComplete={toggleModal}
      >
      <SafeAreaView className="flex flex-1 bg-white mt-11 rounded-t-3xl">
        <View className="flex-row mx-7 mt-7">
          <TouchableOpacity>
              <XMarkIcon size={24} color={orange_color}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      </Modal>
    </View>
  )
}
