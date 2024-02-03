import styled from 'styled-components';
const src = 'https://www.shipcom.io/_next/image?url=%2Fimages'+
'%2Fcasestudy-resources%2Fhisd_resource.jpeg&w=1920&q=75';

export const LoginPageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  background: '#f9f9f9',
});

export const LoginPageBackgroundImage = styled('div')({
  flex: '50%',
  backgroundImage: `url('${src}')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height:'100vh',
  backgroundPosition: 'center',
});

export const LoginPageFormContainer = styled('div')({
  flex: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});