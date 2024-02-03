import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import CardShortDetails from '../../pages/CardShortDetails';
import {scanDocuments} from '../../utils/action';
import EditDoc from '../EditDoc';
import {LoadingContainer} from './style';

export default function CameraScan() {
  const [scannedInfo, setScannedImage] = useState({});
  const [statusText, setStatus] = useState('');

  useEffect(() => {
    scanDocuments({setStatus, setScannedImage});
  }, []);

  if (statusText === 'success') {
    if (Object.keys(scannedInfo).length > 0) {
      return <EditDoc info={scannedInfo} isNewData={true} />;
    } else {
      return (
        <LoadingContainer>
          <ActivityIndicator size="large" color="#00ff00" />
        </LoadingContainer>
      );
    }
  } else if (statusText === 'cancel') {
    return <CardShortDetails />;
  } else {
    return <CardShortDetails />;
  }
}
