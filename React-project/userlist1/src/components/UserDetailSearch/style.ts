import styled from 'styled-components';

export const UserDetailSearchContainer = styled('div')({
  position: 'relative', 
  display: 'flex', 
  margin: '8px 0 20px'
});

export const UserDetailSearchImage = styled('img')({
  width: 12,
  position:'absolute',
  top: '50%',
  left: '16px',
  transform: 'translate(-50%, -50%)',
});

export const UserDetailSearchInput = styled('input')({
  borderRadius: '50px',
  border: '1px solid lightgray',
  boxShadow: '1px 1px 0px lightgray',
  padding: '6px 10px 6px 30px',
});