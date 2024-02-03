import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  StatusBar,
  View,
  Text,
} from 'react-native';
import CameraScan from '../../compoent/CameraScan';
import EditDoc from '../../compoent/EditDoc';
import FloatingButton from '../../compoent/FloatingButton';
import Search from '../../compoent/Search';
import ShortDescription from '../../compoent/ShortDescription';
import DeleteModal from '../../compoent/DeleteModal';
// import RNFS from 'react-native-fs';
import {
  deleteCard,
  initalFetchData,
  editMode,
  onShare,
} from '../../utils/action';
import {
  CardDetailContainer,
  LinearGradientContainer,
  SafeAreaViewContainer,
  ButtonContainer,
  SearchContainer,
  DotImageStyle,
} from './style';
import FileDownloadModal from '../../compoent/FileDownloadModal';
// import QrScanModal from '../../compoent/QrScanModal';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

export default function CardShortDetails() {
  const [state, setState] = useState(false);
  const [obj, setObj] = useState({});
  const [openScan, setOpenScan] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [modalVisible, setVisible] = useState(false);
  const [deletedId, setDeleteID] = useState('');
  const [value, setValue] = useState<string>('');
  const [getQrImg, setGetQrImg] = useState('');
  const [newScan, setNewScan] = useState(false);
  const [OpenDownloadModal, setOpenDownloadModal] = useState(false);
  const [newDataFromJson, setNewDataFromJson] = useState(false);

  const setModalVisible = () => {
    setVisible(!modalVisible);
  };

  const openData = (id: string) => {
    editMode({setObj, setState, id});
  };

  useEffect(() => {
    initalFetchData({setCardData});
    setGetQrImg('');
  }, []);

  const deleteData = async () => {
    deleteCard({deletedId, setCardData, setVisible, modalVisible});
  };

  const setGetQrScanImg = ({name, company, contact, email}: any) => {
    const jsonValue = {
      name,
      company,
      contact,
      email,
      img: {
        uri: 'https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-300x225.png',
      },
    };
    setGetQrImg(JSON.stringify(jsonValue));
  };

  const openCam = () => {
    setOpenScan(true);
  };

  const onSuccess = (e: any) => {
    const objs = JSON.parse(e.data);
    setObj(objs);
    setNewDataFromJson(true);
  };

  const onChange = (searchValue: any) => {
    setValue(searchValue);
    if (searchValue) {
      const filteredData = cardData.filter(
        (item: any) =>
          item.company.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.contact.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.tag.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(cardData);
    }
  };

  const finalData = value ? filteredResults : cardData;

  if (openScan && !state && !newScan && !newDataFromJson) {
    return <CameraScan />;
  } else if (newDataFromJson) {
    return <EditDoc info={obj} isNewData={true} />;
  } else if (newScan && !openScan && !state && !newDataFromJson) {
    return (
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={<Text>Go to </Text>}
        bottomContent={
          <TouchableOpacity onPress={() => setNewScan(false)}>
            <Text>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  } else if (state && !newDataFromJson && !newScan && !openScan) {
    return <EditDoc info={obj} isNewData={false} />;
  } else if (!state && !newDataFromJson && !newScan && !openScan) {
    return (
      <LinearGradientContainer colors={['#ffff', '#ffff']}>
        <StatusBar />
        <CardDetailContainer>
          <SearchContainer>
            <Search {...{onChange, value}} />
            <TouchableOpacity
              onPress={() => {
                setOpenDownloadModal(true);
              }}>
              <DotImageStyle source={require('../../assets/threeDot.png')} />
            </TouchableOpacity>
          </SearchContainer>
          <SafeAreaViewContainer>
            <ScrollView>
              {finalData &&
                finalData.map((item: any, index: number) => {
                  return (
                    <ButtonContainer
                      colors={['#E6E6E3', '#BFBFBD']}
                      key={index}>
                      <ShortDescription
                        {...{
                          setVisible,
                          setDeleteID,
                          info: item,
                          openData,
                          setGetQrScanImg,
                        }}
                      />
                    </ButtonContainer>
                  );
                })}
            </ScrollView>
          </SafeAreaViewContainer>
        </CardDetailContainer>
        <FloatingButton isScanr={true} openCam={openCam} />
        <FloatingButton isScanr={false} openCam={() => setNewScan(true)} />
        <DeleteModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          deleteData={() => deleteData()}
        />
        {/* <QrScanModal {...{scan, setScan, scanData}} /> */}
        <FileDownloadModal
          {...{OpenDownloadModal, setOpenDownloadModal, cardData}}
        />

        {getQrImg && (
          <View style={{opacity: 0}}>
            <QRCode
              value={getQrImg}
              getRef={(ref: any) => {
                ref &&
                  ref.toDataURL((getSvg: any) => {
                    onShare({
                      message: getQrImg,
                      url: getSvg,
                      isQr: true,
                    });
                  });
              }}
              size={200}
              color="black"
              quietZone={10}
              backgroundColor="white"
            />
          </View>
        )}
      </LinearGradientContainer>
    );
  } else {
    return null;
  }
}
