import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

export const CenteredView = styled(View)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
});

export const ModalView = styled(View)({
  margin: 20,
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 20,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 20,
  color: 'black',
  marginVertical: 10,
});

export const TextStyle = styled(Text)({
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'center',
});

export const ButtonContainer = styled(View)({
  width: '50%',
  alignContent: 'center',
  justifyContent: 'center',
});

export const ButtonContainerStyle = styled(View)({
  display: 'flex',
  flexDirection: 'row',
});

export const ActionButton = styled(TouchableOpacity)({
  backgroundColor: 'gray',
  padding: 8,
  margin: 8,
  borderColor: 'black',
  borderRadius: 4,
  minWidth: 60,
});
