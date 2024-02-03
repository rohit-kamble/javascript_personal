import {
  DataProps, 
  ShowErrrorProps, 
  isAvilableProps, 
  submitDataProps,
  // LoginFormUserInputFiledProps
} from './types';

export const showErrror = ({name,  error}: ShowErrrorProps) => {
  switch(name){
  case 'username' : return error.username;
  case 'email': return error.email;
  default: return error.password;
  }
};


export const submitData =({
  isRegister, 
  data, 
  setRegister, 
  reset, 
  watch, 
  setShowUseList
}: submitDataProps) => {
  let newData: any= [];
  const getData: string | null = localStorage.getItem('data');
  if(isRegister){
    const convertData: 
      DataProps[] | [] = getData ? JSON.parse(getData) : [];
    newData = convertData;
    newData.push(data);
    localStorage.setItem('data', JSON.stringify(newData));
    setRegister(false);
    reset();
  }
  else {
    if(!getData) {
      alert(`credtional not register, please 
        signup and stored your information`);
    }
    else {
      const convertData: DataProps[] = JSON.parse(getData);
      const isAvilable: isAvilableProps = !!convertData.find(
        (item: DataProps) =>
          item.email === watch('email') && 
            item.password === watch('password')
      );
      if(isAvilable){
        alert('succesfully Login');
        setShowUseList(true);
        localStorage.setItem('isLoggin', 'true');
      }
      else {
        alert('check creditional');
      }
    }
    reset();
  }
};