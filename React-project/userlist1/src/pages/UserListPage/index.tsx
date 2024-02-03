import UserCard from '../../components/UserDetail';
import UserTable from '../../components/UserTable';
import {UserListProps} from './types';

export default function UserLiastPage({
  setShowUseList, 
  setOpenModal, 
  setModalData
}: UserListProps){
  return(
    <div style={{padding: '40px', width: '100%'}}>
      <UserCard setShowUseList={setShowUseList}/>
      <UserTable setOpenModal={setOpenModal} setModalData={setModalData}/>
    </div>
  );
}