
import React, { createContext, useReducer, useState, FC } from 'react';
import { useDispatch } from 'react-redux';

export const AppContext = createContext({});

export const AppContextProvider = ({children}: any) => {

  const onAction = () => {}
  return (
    <AppContext.Provider
      value={{onAction}}
    >
    {children}
    </AppContext.Provider>
  )
  
}

export type ModalState = {
    visible: Boolean,
    setModalVisible: (value: Boolean) => void;
}

const modalDefaultState: ModalState = {
    visible: false,
    setModalVisible: () => console.warn("setting")
}

export const ModalContext = createContext<ModalState>(modalDefaultState);

// const ModalProvider: FC = ({ children }: any) => {
//     const [modalVisible, setModalVisible] = useState<Boolean>(modalDefaultState.visible)

//     return (
//         <ModalContext.Provider
//             value={{
//                 modalVisible
//             }}
//         >
//         {children}
//         </ModalContext.Provider>
//     )
// }