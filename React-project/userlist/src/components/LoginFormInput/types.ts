/* eslint-disable no-unused-vars */
export interface LoginFormInputProps {
  setShowUseList: (value:boolean)=>void;
  isRegister: boolean; 
  setRegister: (value:boolean)=>void;
}

export interface LoginFormUserInputFiledProps {
    name: string;
    type?: string;
    lable?: string;
    error?: string;
    secondaryError?: string;
  }

export interface ShowErrrorProps {
    name: string | undefined; 
    error: any;
}

export interface DataProps {
    email?: string;
    password?: string;
    username?: string;
}

export interface submitDataProps {
  isRegister: boolean; 
//   inputData: LoginFormUserInputFiledProps[]; 
  data: any;
  setRegister: (value: boolean)=>void, 
  reset: ()=>void; 
  watch: (value: string)=> void, 
  setShowUseList: (value: boolean)=> void;
}

export type isAvilableProps = boolean | undefined;