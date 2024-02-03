/* eslint-disable no-unused-vars */
import {UserInfo} from '../UserTable/types';
export interface UserModalProps {
    setOpenModal: (value: boolean) => void; 
    modalData: UserInfo;
}