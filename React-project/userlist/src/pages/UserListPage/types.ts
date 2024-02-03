/* eslint-disable no-unused-vars */
import {UserInfo} from '../../components/UserTable/types';
export interface UserListProps {
    setShowUseList: (value: boolean)=> void; 
    setOpenModal:(value: boolean)=> void;
    setModalData: (value: UserInfo)=> void;
}