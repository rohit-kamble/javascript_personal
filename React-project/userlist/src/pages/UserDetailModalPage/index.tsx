import UserModal from '../../components/UserModal';
import {UserModalProps} from './types';

export default function UserDetailModalPage({
  setOpenModal, 
  modalData
}: UserModalProps){
  return (
    <UserModal 
      setOpenModal={setOpenModal} 
      modalData={modalData}
    />
  );
}