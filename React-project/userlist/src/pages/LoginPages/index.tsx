import { useState, useLayoutEffect } from 'react';
import LoginForm from '../../components/LoginForm';
import {
  LoginPageContainer, 
  LoginPageBackgroundImage, 
  LoginPageFormContainer
} from './style';
import UserLiastPage from '../UserListPage';
import UserDetailModalPage from '../UserDetailModalPage';

export default function LoginPage(){
  const [isShowUserList, setShowUseList] = useState(false);
  const [open, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const isLoging = localStorage.getItem('isLoggin');
  
  useLayoutEffect(() => {
    if(isLoging === 'true'){
      setShowUseList(true);
    }
  }, [isLoging]);

  return (
    <LoginPageContainer>
      {isShowUserList ?
        <>
          <UserLiastPage {...{setShowUseList, setOpenModal, setModalData}}/>
          {open && <UserDetailModalPage {...{setOpenModal, modalData}} /> }
        </>
        :
        <>
          <LoginPageBackgroundImage />
          <LoginPageFormContainer>
            <LoginForm setShowUseList={setShowUseList}/>
          </LoginPageFormContainer>
        </>
      }
    </LoginPageContainer>
  );
}