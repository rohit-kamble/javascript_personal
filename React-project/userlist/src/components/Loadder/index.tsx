import {LoadderIcon} from '../../externalsource';
import {LoadderContainer} from './style';

export default function Loadder() {
  return(
    <LoadderContainer>
      <img 
        height={100}
        width={100}
        src={LoadderIcon}
        alt='loading'
      />
      <p>Loading....</p>
    </LoadderContainer>
  );
}