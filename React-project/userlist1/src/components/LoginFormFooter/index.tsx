import {LoginFormFooterContainer, LoginFormFooterLink} from './style';
import { LoginFormFooterProps } from './types';

export default function LoginFormFooter(
  {setRegister, isRegister}: LoginFormFooterProps
){
  return (
    <LoginFormFooterContainer>
      <LoginFormFooterLink 
        onClick={()=>setRegister(!isRegister)}
      >
        {isRegister ? 'Login' : 'Signup'}
      </LoginFormFooterLink>
      <LoginFormFooterLink>Forgot password?</LoginFormFooterLink>
    </LoginFormFooterContainer>
  );
}