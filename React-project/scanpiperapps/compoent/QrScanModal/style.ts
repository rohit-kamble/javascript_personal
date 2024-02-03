import {View} from 'react-native';
import styled from 'styled-components/native';

export const QrScanModalContainer = styled(View)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const QrScanModalView = styled(View)({
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
});
