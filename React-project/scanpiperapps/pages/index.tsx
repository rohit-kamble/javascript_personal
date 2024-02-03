import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import AnimatedSplash from 'react-native-animated-splash-screen';
import CardShortDetails from './CardShortDetails';
import Toast from 'react-native-toast-message';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function Pages() {
  const [isLoad, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <AnimatedSplash
      translucent={false}
      isLoaded={isLoad}
      logoImage={require('../assets/flashImage.png')}
      logoHeight={screenHeight}
      logoWidth={screenWidth}
      showStatusBar={true}>
      <CardShortDetails />
      <Toast />
    </AnimatedSplash>
  );
}
