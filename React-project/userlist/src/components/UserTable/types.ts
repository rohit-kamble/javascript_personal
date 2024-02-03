/* eslint-disable no-unused-vars */
export interface UserTableProps {
    setOpenModal: (value: boolean)=> void;
    setModalData: (value:UserInfo)=> void;
}
interface companyProps {
    address: object;
    department: string;
    name: string;
    title: string;
}

export interface UserInfo {
    address: object;
    age: number;
    bank: object;
    birthDate: string;
    bloodGroup: string;
    company: companyProps;
    domain: string;
    ein: string;
    email: string;
    eyeColor: string;
    firstName: string;
    gender: string;
    hair: object;
    height: number;
    id: number;
    image: string;
    ip: string;
    lastName: string;
    macAddress: string;    
    maidenName: string;
    password: string;
    phone: string;
    ssn: string;
    university: string;
    userAgent: string;
    username: string;
    weight: number;
  }