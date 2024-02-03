import styled from 'styled-components';

export const LoginFormFooterContainer = styled('div')({
  margin: '8px 0',
  display: 'flex', 
  justifyContent: 'space-between',
  marginTop: '10px',
});

export const LoginFormFooterLink = styled('span')({
  color: 'gray',
  fontSize: '12px',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  }
});