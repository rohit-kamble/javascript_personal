import styled from 'styled-components/native';
import {Image, View} from 'react-native';

export const FloatingButtonContainer = styled(View)({
  flex: 1,
  position: 'relative',
});

export const FloatingButtonPositionStyle = styled(View)<{isScanr: boolean}>(
  ({isScanr}) => ({
    position: 'absolute',
    bottom: isScanr ? 130 : 50,
    left: 10,
    padding: 4,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: '#d9d9d9',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    zIndex: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  }),
);

export const ImageStyle = styled(Image)({
  width: 50,
  height: 50,
});
