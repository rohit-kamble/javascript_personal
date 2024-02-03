import React from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {DeleteIcon} from '../../pages/CardShortDetails/style';
import {FileDownloadCloseButtonStyle} from '../FileDownloadModal/style';
import {QrScanModalContainer, QrScanModalView} from './style';

export default function QrScanModal({scan, setScan, scanData}: any) {
  return (
    <Modal animationType="slide" transparent={true} visible={scan}>
      <QrScanModalContainer>
        <QrScanModalView>
          <DeleteIcon>
            <TouchableOpacity
              onPress={() => {
                setScan(false);
              }}>
              <FileDownloadCloseButtonStyle
                source={require('../../assets/closeIcon.png')}
              />
            </TouchableOpacity>
          </DeleteIcon>
          <QRCode
            value={scanData}
            size={200}
            color="black"
            backgroundColor="white"
            logoSize={30}
            logoMargin={2}
            logoBorderRadius={15}
            logoBackgroundColor="yellow"
          />
        </QrScanModalView>
      </QrScanModalContainer>
    </Modal>
  );
}
