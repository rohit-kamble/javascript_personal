import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform, PermissionsAndroid, Alert} from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin';
import Share from 'react-native-share';
import RNFS from 'react-native-fs';
import Contacts from 'react-native-contacts';
import axios from 'axios';

export const initalFetchData = async ({setCardData}: any) => {
  try {
    // await AsyncStorage.removeItem('@scanpiperData');
    const value: any = await AsyncStorage.getItem('@scanpiperData');
    const v = JSON.parse(value);
    value && setCardData(v);
  } catch (e) {
    // error reading value
  }
};

export const createNewData = async ({getData, setOpenInial}: any) => {
  try {
    const data: any = await AsyncStorage.getItem('@scanpiperData');
    const previousData = data ? JSON.parse(data) : [];
    previousData.push(getData);
    const jsonValue = JSON.stringify(previousData);
    await AsyncStorage.setItem('@scanpiperData', jsonValue, () => {
      setOpenInial(true);
    });
  } catch (error) {
    //error
  }
};

export const updateData = async ({
  src,
  name,
  company,
  contact,
  email,
  address,
  note,
  profile,
  setOpenInial,
  tag,
  website,
}: any) => {
  try {
    const va: any = await AsyncStorage.getItem('@scanpiperData');
    const previousData: any = JSON.parse(va);
    const updatedData = previousData.map((item: any) => {
      if (src === item.id) {
        return {
          name: name,
          company: company,
          contact: contact,
          email: email,
          address: address,
          img: {uri: src},
          id: item.id,
          profile: profile,
          note: note,
          tag: tag,
          website: website,
        };
      } else {
        return item;
      }
    });
    const jsonValue = JSON.stringify(updatedData);
    await AsyncStorage.setItem('@scanpiperData', jsonValue, () => {
      setOpenInial(true);
    });
  } catch (error) {
    //error
  }
};

export const editMode = async ({setObj, setState, id}: any) => {
  try {
    const value: any = await AsyncStorage.getItem('@scanpiperData');
    const convert = JSON.parse(value);
    const isAvail: any = convert.find((item: any) => item.id === id);
    !!isAvail && setObj(isAvail);
    !!isAvail && setState(true);
  } catch (error) {
    // error reading value
  }
};

export const deleteCard = async ({
  deletedId,
  setCardData,
  setVisible,
  modalVisible,
}: any) => {
  try {
    const va: any = await AsyncStorage.getItem('@scanpiperData');
    const previousData: any = JSON.parse(va);
    const updatedData = previousData.filter(
      (item: any) => item.id !== deletedId,
    );
    const jsonValue = JSON.stringify(updatedData);
    await AsyncStorage.setItem('@scanpiperData', jsonValue, () => {
      setCardData(updatedData);
      setVisible(!modalVisible);
    });
  } catch (err) {
    //test
  }
};

export const scanDocuments = async ({setStatus, setScannedImage}: any) => {
  try {
    if (
      Platform.OS === 'android' &&
      (await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      )) !== PermissionsAndroid.RESULTS.GRANTED
    ) {
      Alert.alert(
        'Error',
        'User must grant camera permissions to use document scanner.',
      );
      return;
    }
    const {scannedImages, status}: any = await DocumentScanner.scanDocument();
    setStatus(status);
    if (scannedImages.length > 0) {
      const data1 = new FormData();
      data1.append('file', {
        name: 'test.jpg',
        type: 'image/jpg',
        uri: scannedImages[0],
      });

      const data = async () => {
        try {
          const respons = await axios({
            method: 'post',
            url: 'https://app.covve.com/api/businesscards/scan',
            data: data1,
            headers: {
              Authorization: '32c5c15b-c4fa-49ca-b44c-9a08831188cf',
              'Content-Type': 'multipart/form-data',
            },
          });
          const info =
            respons && respons.data
              ? {
                  name: respons.data.firstName + ' ' + respons.data.lastName,
                  company: respons.data.jobs.length
                    ? respons.data.jobs[0].company
                    : '',
                  contact:
                    respons.data.phones.length > 0
                      ? respons.data.phones[0].number
                      : '',
                  email:
                    respons.data.emails.length > 0
                      ? respons.data.emails[0].address
                      : '',
                  profile: respons.data.jobs.length
                    ? respons.data.jobs[0].title
                    : '',
                  address: respons.data.addresses.length
                    ? respons.data.addresses[0].fullAddress
                    : '',
                  website: respons.data.websites.length
                    ? respons.data.websites[0].url
                    : '',
                  scannedImage: scannedImages[0],
                }
              : {
                  scannedImage: scannedImages[0],
                };
          setScannedImage(info);
        } catch (error) {
          console.warn('error==', error);
        }
      };
      data();
    }
  } catch (error) {
    //error
  }
};

export const onShare = ({message, url, isQr, setGetQrImg}: any) => {
  if (isQr) {
    Share.open({
      // title: 'My Application',
      message,
      url: 'data:image/jpeg;base64,' + url,
    })
      .then(() => setGetQrImg(''))
      .catch(() => {
        // Erro
      });
  } else {
    RNFS.readFile(url, 'base64')
      .then((res: any) => res)
      .then((resd: any) => {
        Share.open({
          title: 'My Application',
          message,
          url: resd ? 'data:image/jpeg;base64,' + resd : url,
        }).catch(() => {
          // Erro
        });
      });
  }
};

export const saveContact = ({name, email, contact}: any) => {
  var newPerson = {
    emailAddresses: [
      {
        label: 'work',
        email,
      },
    ],
    phoneNumbers: [
      {
        label: 'mobile',
        number: contact,
      },
    ],
    displayName: name,
  };

  Contacts.openContactForm(newPerson)
    .then(contacts => contacts)
    .catch(() => {
      // Erro
    });
};
