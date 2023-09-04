import React, { createContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const showModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ isModalVisible, modalContent, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
