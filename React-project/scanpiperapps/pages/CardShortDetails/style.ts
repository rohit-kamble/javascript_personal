import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, View, StatusBar, Image} from 'react-native';

const space = StatusBar.currentHeight;

export const LinearGradientContainer = styled(LinearGradient)({
  flex: 1,
  paddingBottom: 20,
  padding: 10,
});

export const CardDetailContainer = styled(View)({
  height: '100%',
  marginHorizontal: 20,
});

export const SafeAreaViewContainer = styled(SafeAreaView)({
  paddingBottom: 10,
  paddingTop: 20,
  flex: 1,
});

export const ListViewContainer = styled(View)({
  alignItems: 'flex-end',
  marginBottom: 14,
});

export const ImageStyleIcon = styled(Image)({
  width: 24,
  height: 24,
  tintColor: 'black',
});

export const DeleteIcon = styled(View)({
  alignItems: 'center',
  marginBottom: 14,
});

export const ButtonContainer = styled(LinearGradient)({
  // flex: 1,
  // backgroundColor: 'white',
  borderRadius: 8,
  borderColor: 'black',
  // borderWidth: 0.5,
  width: '100%',
  marginVertical: 5,
  elevation: 4,
  shadowColor: 'black',
  shadowOffset: {width: 10, height: 10},
  shadowOpacity: 0.8,
  shadowRadius: 10,
  // marginTop: 10,
  padding: 10,
  // paddingRight: 0,
});

export const SearchContainer = styled(View)({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  marginTop: 20,
});

export const DotImageStyle = styled(Image)({
  width: 10,
  height: 20,
  tintColor: 'black',
});

export const QrAndDeleteContainer = styled(View)({
  // justifyContent: 'space-between',
  // flexDirection: 'row',
});
