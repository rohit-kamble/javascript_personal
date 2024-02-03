import {Text, TouchableOpacity, View, Image, FlatList} from 'react-native';
import styled from 'styled-components/native';

export const DropDownContainer = styled(View)({
  display: 'flex',
  flexDirection: 'row',
  marginTop: 18,
});

export const DropDownText = styled(Text)({
  fontSize: 14,
  color: 'gray',
  width: 90,
});

export const DropDownButtonContainer = styled(View)({
  flex: 4,
});

export const DropDownButton = styled(TouchableOpacity)({
  width: '100%',
  borderColor: 'gray',
  borderRadius: 10,
  borderWidth: 1,
  padding: 4,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
});

export const DropDownSelectedText = styled(Text)({
  fontSize: 14,
  color: 'black',
  alignItems: 'center',
  justifyContent: 'center',
});

export const DropDownIcon = styled(Image)({
  width: 40,
  height: 25,
  position: 'absolute',
  right: 0,
});

export const DropDownButtonList = styled(TouchableOpacity)({
  padding: 4,
  alignItems: 'center',
});

export const DropDownList = styled(FlatList)({
  backgroundColor: 'white',
  position: 'absolute',
  bottom: 30,
  width: '100%',
  borderColor: 'gray',
  borderRadius: 10,
  borderWidth: 1,
});

export const DropDownItemList = styled(Text)({
  textAlign: 'center',
  fontSize: 14,
  color: 'gray',
});
