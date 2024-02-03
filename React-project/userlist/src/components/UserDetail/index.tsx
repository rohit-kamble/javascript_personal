import UserDetailHeader from '../UserDetailHeader';
import UserDetailSearch from '../UserDetailSearch';
import {UserDetailProps} from './types';

export default function UserCard({setShowUseList}: UserDetailProps){
  const logOut = () => {
    localStorage.setItem('isLoggin', 'false');
    setShowUseList(false);
  };
  return(
    <div style={{
      width: '100%',
    }}>
      <UserDetailHeader logOut={logOut}/> 
      <UserDetailSearch/>
    </div>
  );
}