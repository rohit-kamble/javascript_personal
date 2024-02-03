import React from 'react';
import {Modal, TouchableOpacity, PermissionsAndroid} from 'react-native';
import {DeleteIcon} from '../../pages/CardShortDetails/style';
import {
  FileDownloadCloseButtonStyle,
  FileDownloadContainer,
  FileDownloadImageStyle,
  FileDownloadModalView,
} from './style';
import RNFS from 'react-native-fs';
import XLSX from 'xlsx';
import {DataProps} from '../EditDoc/types';
import Toast from 'react-native-toast-message';

export default function FileDownloadModal({
  OpenDownloadModal,
  setOpenDownloadModal,
  cardData,
}: any) {
  const exportDataToFile = ({isCsv}: any) => {
    const formatedData = cardData.map((item: DataProps) => {
      return {
        ...item,
        img: item.img?.uri,
      };
    });
    const bookType = isCsv ? 'csv' : 'xlsx';
    const neWNum = Math.round(Math.random() * 100);
    const fileExtention = isCsv
      ? `scanpiper_file_CSV${neWNum}.csv`
      : `scanpiper_file_XLSX${neWNum}.xlsx`;
    let sample_data_to_export = formatedData;

    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(sample_data_to_export);
    XLSX.utils.book_append_sheet(wb, ws, 'Users');
    const wbout = XLSX.write(wb, {type: 'binary', bookType: bookType});
    RNFS.writeFile(
      RNFS.DownloadDirectoryPath + `/${fileExtention}`,
      wbout,
      'ascii',
    )
      .then(() => {
        Toast.show({
          type: 'success',
          text1: 'File Download...',
          text2: fileExtention,
        });
      })
      .catch(e => {
        console.log('Error show', e);
      });
  };

  const handleClick = async ({isCsv}: any) => {
    try {
      // Check for Permission (check if permission is already given or not)
      let isPermitedExternalStorage = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );

      if (!isPermitedExternalStorage) {
        // Ask for permission
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage permission needed',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
            message: 'ok message',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Permission Granted (calling our exportDataToExcel function)
          exportDataToFile({isCsv});
          console.log('Permission granted');
        } else {
          // Permission denied
          console.log('Permission denied');
        }
      } else {
        // Already have Permission (calling our exportDataToExcel function)
        exportDataToFile({isCsv});
      }
    } catch (e) {
      return;
    }
  };
  return (
    <Modal animationType="slide" transparent={true} visible={OpenDownloadModal}>
      <FileDownloadContainer>
        <FileDownloadModalView>
          <DeleteIcon>
            <TouchableOpacity
              onPress={async () => {
                await handleClick({isCsv: false});
                await setOpenDownloadModal(false);
              }}>
              <FileDownloadImageStyle
                source={require('../../assets/excelIcon.png')}
              />
            </TouchableOpacity>
          </DeleteIcon>
          <DeleteIcon>
            <TouchableOpacity
              onPress={async () => {
                await handleClick({isCsv: true});
                await setOpenDownloadModal(false);
              }}>
              <FileDownloadImageStyle
                source={require('../../assets/csvIcon.png')}
              />
            </TouchableOpacity>
          </DeleteIcon>
          <DeleteIcon>
            <TouchableOpacity
              onPress={() => {
                setOpenDownloadModal(false);
              }}>
              <FileDownloadCloseButtonStyle
                source={require('../../assets/closeIcon.png')}
              />
            </TouchableOpacity>
          </DeleteIcon>
        </FileDownloadModalView>
      </FileDownloadContainer>
    </Modal>
  );
}
function scheduleLocalNotification(
  details: any,
  ScheduleLocalNotificationDetails: any,
) {
  throw new Error('Function not implemented.');
}
