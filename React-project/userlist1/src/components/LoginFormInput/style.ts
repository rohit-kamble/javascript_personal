import styled from 'styled-components';

export const SubmitButton = styled('input')({
  background: '#4d278f',
  width: '100%',
  border: 0,
  padding: '8px 0',
  borderRadius: '4px',
  color: 'white',
  '&:disabled': {
    opacity: '0.3',
    cursor: 'not-allowed',
  }
});

export const InputType = styled('input')<{isValid: boolean}>(
  ({isValid})=> ({
    background: 'white',
    display: 'block',
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '4px',
    border: `1px solid ${isValid ? 'red' : 'lightgray'}`,
    padding: '10px 15px',
    marginBottom: '24px',
    fontSize: '14px',
    color: 'black',
    '&:focus': {
      outline: 'none',
      boxShadow: `0px 0px 2px ${isValid ? 'red' : 'lightgray'}`,
    }
  }));

export const InputTypeContainer = styled('div')({
  position: 'relative'
});

export const InputTypeLabel = styled('span')({
  color: 'gray',
  fontSize: '10px',
  position: 'absolute',
  top: '-8px',
  left: '10px',
  background: 'white',
  padding: '0px 4px',
});

export const InputTypeError = styled('span')({
  position: 'absolute',
  bottom: '-18px',
  fontSize: '9px',
  color: 'red',
});

