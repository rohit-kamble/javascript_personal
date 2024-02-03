import styled from 'styled-components/native';
import {Text} from 'react-native';

export const TextStyle = styled(Text)<{isUnderLine?: boolean}>(
  ({isUnderLine}) => ({
    color: isUnderLine ? 'gray' : 'black',
    fontWeight: isUnderLine ? 'bold' : 'normal',
    fontSize: 12,
    textDecorationLine: isUnderLine ? 'underline' : 'none',
    textAlign: 'left',
  }),
);
