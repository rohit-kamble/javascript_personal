import {View, TextInput, Image} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)(({focusable}) => ({
  marginBottom: 0,
  position: 'relative',
  borderColor: 'black',
  borderWidth: focusable ? 2 : 1,
  borderRadius: 50,
  marginRight: 8,
  width: '100%',
}));

export const SearchInput = styled(TextInput)({
  borderColor: 'red',
  paddingLeft: 14,
  paddingRight: 40,
  color: 'black',
  fontSize: 16,
});

export const SerachIcon = styled(Image)({
  width: 21,
  height: 20,
  position: 'absolute',
  right: 10,
  top: 15,
  tintColor: 'black',
});
