import styled from 'styled-components';

export const UserModalContainer = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
});

export const UserModalTransparantContainer = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: 0,
  background: 'black',
  opacity: 0.2,
});

export const UserModalViewContainer = styled('div')({
  background: 'white',
  borderTopLeftRadius: '20px',
  boxShadow: '-6px 34px 28px 8px #aaa',
  height: '100%',
  position: 'absolute',
  right: 0,
  width: '26%',
});

export const UserModalViewProfile =  styled('div')({
  padding: '0 20px', 
  marginBottom: 30,
  marginTop: 20,
});

export const UserModalViewProfileHeader = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20,
  h2: {
    color: 'gray',
  }
});

export const UserModalViewCloseIcon = styled('img')({
  cursor: 'pointer',
  height: 20,
  width: 20,
});

export const UserModalViewProfileView = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  h3: {
    margin: 0,
  }
});

export const UserModalViewProfileImage = styled('img')({
  background: 'lightgray',
  borderRadius: '50%',
  marginRight: '10px',
});

export const UserModalViewProfileActiveButton = styled('button')({
  background: '#a6c586',
  padding: '2px 10px',
  color: 'white',
  fontSize: '14px',
  borderRadius: '30px',
  margin: '6px 0',
});