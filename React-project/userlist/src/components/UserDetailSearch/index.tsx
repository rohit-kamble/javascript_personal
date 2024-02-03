import {SearchIcon} from '../../externalsource';
import {
  UserDetailSearchContainer, 
  UserDetailSearchImage, 
  UserDetailSearchInput
} from './style';

export default function UserDetailSearch(){
  return(
    <UserDetailSearchContainer>
      <UserDetailSearchImage src={SearchIcon} alt="search icon"/>
      <UserDetailSearchInput type="text" placeholder="serach"/>
    </UserDetailSearchContainer>
  );
}