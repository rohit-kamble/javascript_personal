import React from 'react';
// import {IconButton} from '@react-native-material/core';
import {FloatingButtonProps} from './types';
import {
  FloatingButtonContainer,
  FloatingButtonPositionStyle,
  ImageStyle,
} from './style';
import {TouchableOpacity} from 'react-native';

export default function FloatingButton({
  openCam,
  isScanr,
}: FloatingButtonProps) {
  const src = isScanr
    ? require('../../assets/cameraIcon.png')
    : require('../../assets/scanIcon.png');
  return (
    <FloatingButtonContainer>
      <FloatingButtonPositionStyle isScanr={isScanr}>
        {/* <IconButton
          onPress={openCam}
          // eslint-disable-next-line react/no-unstable-nested-components
          icon={() => <ImageStyle source={src} />}
        /> */}
        <TouchableOpacity onPress={openCam}>
          <ImageStyle source={src} />
        </TouchableOpacity>
      </FloatingButtonPositionStyle>
    </FloatingButtonContainer>
  );
}
