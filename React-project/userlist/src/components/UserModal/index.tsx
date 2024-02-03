import {
  UserModalContainer, 
  UserModalTransparantContainer,
  UserModalViewContainer,
  UserModalViewProfile,
  UserModalViewProfileHeader,
  UserModalViewCloseIcon,
  UserModalViewProfileView,
  UserModalViewProfileImage,
  UserModalViewProfileActiveButton,
} from './style';
import {CloseIcon} from '../../externalsource';
import UserDtailBasicInfo from '../UserDtailBasicInfo';
import {UserModalProps} from './types';

export default function UserModal({setOpenModal, modalData}: UserModalProps){
  return (
    <UserModalContainer>
      <UserModalTransparantContainer onClick={()=>{setOpenModal(false)}}/>
      <UserModalViewContainer>
        {modalData ?
          <>
            <UserModalViewProfile>
              <UserModalViewProfileHeader>
                <h2>User Details</h2>
                <UserModalViewCloseIcon 
                  onClick={()=>{setOpenModal(false)}}
                  src={CloseIcon} 
                  alt="close button"
                />
              </UserModalViewProfileHeader>
              <UserModalViewProfileView>
                <UserModalViewProfileImage 
                  width={120}
                  src={modalData.image} 
                  alt='profile'
                />
                <div>
                  <h3>{modalData.firstName + ' ' + 
                  modalData.lastName}</h3>
                  <p>User Id: {modalData.id}</p>
                  <UserModalViewProfileActiveButton>
                    Active
                  </UserModalViewProfileActiveButton>
                </div>
              </UserModalViewProfileView>
            </UserModalViewProfile>
            <hr />
            <>
              <UserDtailBasicInfo modalData={modalData}/>
            </> 
          </>
          : 
          null
        }
      </UserModalViewContainer>
    </UserModalContainer>
  );
}