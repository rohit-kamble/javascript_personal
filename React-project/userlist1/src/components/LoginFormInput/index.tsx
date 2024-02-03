import {useForm} from 'react-hook-form';
import {    
  InputType,
  SubmitButton, 
  InputTypeContainer, 
  InputTypeLabel,
  InputTypeError
} from './style';
import {rgx} from '../../externalsource';
import {submitData, showErrror} from './action';
import inputFiled from './inputData.json';
import { DataProps, LoginFormUserInputFiledProps } from './types';

export default function LoginFormInput({
  setShowUseList, 
  isRegister, 
  setRegister
}: any){

  const {
    register,
    reset, 
    handleSubmit, 
    watch, 
    formState: {errors},
  } = useForm();

  const onSubmit = (data: DataProps)=> {
    submitData({isRegister, 
      data, 
      setRegister, 
      reset, 
      watch, 
      setShowUseList});
  };

  const disabledButton = isRegister ? 
    watch('email') && !errors.email && watch('password') 
      && !errors.password && watch('username') && !errors.username
    : watch('email') && !errors.email && 
      watch('password') && !errors.password;
  const inputData = 
    inputFiled.filter((item: LoginFormUserInputFiledProps) =>
      isRegister ? item : item.name === 'username' ? false : true );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputData.map((item: LoginFormUserInputFiledProps)=>{
        const error = showErrror({name:item.name, error:errors});
        const isEmail = item.name === 'email';
        const isPattern = isEmail ? {pattern: rgx} : {};
        return(
          <InputTypeContainer>
            <InputTypeLabel>{item.lable}</InputTypeLabel>
            <InputType 
              type='text'
              isValid = { error?.type === 'pattern' ||
                  error?.type === 'required'}
              aria-invalid={error ? 'true' : 'false'} 
              {...register(item.name, { required: true, ...isPattern })}
            />
            {error && !isEmail && error?.type === 'required' && 
            <InputTypeError role="alert">{item.error}</InputTypeError>
            }
            {error && isEmail && 
                <InputTypeError role="alert">{error?.type === 'pattern' ? 
                  item.secondaryError : item.error}</InputTypeError>}
          </InputTypeContainer>
        );
      })}
      <SubmitButton 
        type="submit" 
        disabled={!disabledButton}
        value={isRegister ? 'Register': 'Login'} 
      />
    </form>
  );
}