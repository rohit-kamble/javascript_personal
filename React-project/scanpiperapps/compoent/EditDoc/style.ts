import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const BoxShadowContainer = styled(View)<{isEditPage: boolean}>(
  ({isEditPage}) => ({
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    marginBottom: 6,
    height: isEditPage ? 180 : 80,
  }),
);

export const ImageStyle = styled(Image)({
  width: '100%',
  height: '100%',
  borderRadius: 10,
});

export const ButtonContainer = styled(LinearGradient)({
  flex: 1,
  backgroundColor: 'white',
  borderRadius: 10,
  width: '100%',
  marginVertical: 5,
  elevation: 5,
  shadowColor: 'black',
  shadowOffset: {width: 10, height: 10},
  shadowOpacity: 0.8,
  shadowRadius: 10,
  marginTop: 30,
});

export const SubmitButton = styled(TouchableOpacity)({
  backgroundColor: '#d3d3d3',
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 8,
});

export const SubmitButtonText = styled(Text)({
  padding: 10,
  textAlign: 'center',
  color: 'black',
});

export const EditContiner = styled(View)({
  marginBottom: 10,
});
