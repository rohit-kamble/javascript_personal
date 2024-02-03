import {UserDtailBasicInfoContainer, UserDtailBasicInfoList} from './style';
import {ProfilePic} from '../../externalsource';
import UserDetailBasiInfoLists from '../UserDetailBasiInfoLists';
export default function UserDtailBasicInfo({modalData}: any){
  return(
    <>
      <UserDtailBasicInfoContainer>
        <img 
          height={20}
          style={{
            marginRight: 10,
            filter: 'opacity(0.5)',
          }}
          src={ProfilePic} 
          alt='ProfilePic'
        />
        <span style={{color: 'gray'}}>Basic details</span>
      </UserDtailBasicInfoContainer>
      <UserDtailBasicInfoList>
        <UserDetailBasiInfoLists
          {...{
            value: modalData.firstName + ' ' + modalData.lastName, 
            label: 'Full Name'
          }}
        />
        <UserDetailBasiInfoLists
          {...{
            value: modalData.company.department, 
            label: 'User Department'
          }}
        />
        <UserDetailBasiInfoLists
          {...{
            value: modalData.gender, 
            label: 'Gender'
          }}
        />
        <UserDetailBasiInfoLists
          {...{
            value: modalData.email, 
            label: 'Email'
          }}
        />
      </UserDtailBasicInfoList>
    </>
  );
}