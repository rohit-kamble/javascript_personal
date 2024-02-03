import {UserDetailBasicInfoListProps} from './types';

export default function UserDetailBasiInfoLists (
  {value, label}:UserDetailBasicInfoListProps){
  return (
    <>
      <h5
        style={{
          color: 'black'
        }}
      >{value}</h5>
      <h4>{label}</h4>
    </>
  );
}