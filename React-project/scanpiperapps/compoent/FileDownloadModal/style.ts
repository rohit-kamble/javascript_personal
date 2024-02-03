import {Image, View} from 'react-native';
import styled from 'styled-components/native';

export const FileDownloadContainer = styled(View)({
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  marginTop: 70,
  marginRight: 5,
});

export const FileDownloadModalView = styled(View)({
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 10,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  height: 140,
});

export const FileDownloadImageStyle = styled(Image)({
  width: 30,
  height: 30,
});

export const FileDownloadCloseButtonStyle = styled(Image)({
  width: 30,
  height: 30,
  tintColor: 'black',
});
