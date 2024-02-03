// import {HStack} from '@react-native-material/core';
import React from 'react';
import {Modal} from 'react-native';
// import {ButtonContainer} from '../EditDoc/style'
import {
  CenteredView,
  ModalView,
  TextStyle,
  ActionButton,
  ButtonContainerStyle,
} from './style';
import {DeleteModalProps} from './type';

export default function DeleteModal({
  modalVisible,
  setModalVisible,
  deleteData,
}: DeleteModalProps) {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <CenteredView>
        <ModalView>
          <TextStyle>Are you sure want to delete</TextStyle>
          <ButtonContainerStyle>
            {/* <ButtonContainer colors={['white', 'gray']}> */}
            <ActionButton onPress={deleteData}>
              <TextStyle>Sure</TextStyle>
            </ActionButton>
            {/* </ButtonContainer> */}
            {/* <ButtonContainer colors={['#33ccff', '#ff99cc']}> */}
            <ActionButton onPress={setModalVisible}>
              <TextStyle>Cancel</TextStyle>
            </ActionButton>
            {/* </ButtonContainer> */}
          </ButtonContainerStyle>
        </ModalView>
      </CenteredView>
    </Modal>
  );
}
