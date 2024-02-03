import {Logo} from '../../externalsource';
import {LoginFormHeaderContainer} from './style';

export default function LoginFromHeader(){
  return(
    <LoginFormHeaderContainer>
      <img width={100} src={Logo} alt="logo"/>
      <h2>Welcome</h2>
      <p>login to labs Monitoring System</p>
    </LoginFormHeaderContainer>
  );
}