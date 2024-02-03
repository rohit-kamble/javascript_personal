import {LoginFormContainer} from './style';
import { useState} from 'react';
import LoginFromHeader from '../LoginFromHeader';
import LoginFormFooter from '../LoginFormFooter';
import LoginFormInput from '../LoginFormInput';
import {LoginFormProps} from './types';

export default function LoginForm({setShowUseList}: LoginFormProps){
  const [isRegister, setRegister] = useState(false);

  return (
    <LoginFormContainer>
      <LoginFromHeader/>
      <LoginFormInput {...{setShowUseList, isRegister, setRegister}}/>
      <LoginFormFooter {...{setRegister, isRegister}}/>
    </LoginFormContainer>
  );
}