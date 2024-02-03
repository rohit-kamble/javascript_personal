import styled from 'styled-components';

export const Th = styled('th')({
  flex: '25%',
  textAlign: 'left',
  color: 'gray',
});

export const Tr = styled('tr')<{ishading: boolean;}>(
  ({ishading})=>({
    display: 'flex', 
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: `${ishading ? '16px 36px 16px 38px': '6px 24px'}`,
    background: ishading ?'lightgray' : 'white',
    borderRadius: '10PX',
    margin: `${ishading ? 0: '10px'} 0`,
    position: 'relative',
    cursor: 'pointer',
  }));

export const Td = styled('td')({
  flex: '25%',
  textAlign: 'left',
  paddingLeft: '10px',
  color: 'gray',
});

export const UserTableProfile = styled('img')({
  width: '50px',
  background: 'lightgray',
  borderRadius: '50%',
  margin: 'auto 0',
  display: 'flex',
});

export const UserTableDeparmentColor = styled('div')<{color: string}>(
  ({color})=>({
    position: 'absolute',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
    width: '4px',
    background: `${color}`,
    top: 0,
    left: 0,
    height: '100%',
})); 

export const Table = styled('table')({
  width: '100%', 
  display: 'flex', 
  flexDirection: 'column'
}); 

export const Tbody = styled('tbody')({
  height: '310px',
  overflowY: 'scroll'
})