import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import ModalContext from './ModalContext';

const ModalComponent = () => {
  const { isModalVisible, modalContent, hideModal } = useContext(ModalContext);

  return (
    <View>
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={hideModal}
            style={{ justifyContent: 'flex-end', margin: 0 }}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            swipeDirection="down"
            onSwipeComplete={hideModal}
            >
            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50, borderRadius: 12 }}>
                {modalContent}
            </View>
        </Modal>
    </View>
    
  );
};

export default ModalComponent;
