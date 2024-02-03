import {useEffect, useState} from 'react';
import {
  Th, 
  Td, 
  Tr, 
  UserTableProfile, 
  UserTableDeparmentColor,
  Table,
  Tbody,
} from './style';
import Loadder from '../Loadder';
import {showUserList, selectDepartmentColor} from './action';
import {UserTableProps, UserInfo} from './types';

export default function UserTable({setOpenModal, setModalData}: UserTableProps){
  const [userData, setUserData] = useState([]);
  useEffect(()=>{
    showUserList({setUserData});
  },[]);

  return(
    <Table>
      <thead>
        <Tr ishading={true}>
          <Th>Profile Picture</Th>
          <Th>Name</Th>
          <Th>Gender</Th>
          <Th>Email</Th>
        </Tr>
      </thead>
      <Tbody>
        {userData && userData.length > 0 ?  
          userData.map((item: UserInfo)=>{
            const stripColor = selectDepartmentColor(item.company.department);
            return(
              <Tr ishading={false} onClick={()=> {
                setOpenModal(true);
                setModalData(item);
              }}>
                <Td> 
                  <UserTableProfile src={item.image} alt={item.username}/>
                </Td>
                <Td>{item.firstName + ' ' + item.lastName}</Td>
                <Td>{item.gender}</Td>
                <Td>{item.email}</Td>
                <UserTableDeparmentColor color={stripColor} />
              </Tr>
            );
          }):
          <Loadder/>
        }
      </Tbody>
    </Table>
  );
}