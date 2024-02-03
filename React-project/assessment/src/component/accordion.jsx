import React, { useState } from "react";
import avatar from '../asset/avatar.png';
import dropdown from '../asset/dropdown.png';
import deleteIcon from '../asset/delete-icon.svg';
import editIcon from '../asset/edit-icon.svg';

export default function Accordion() {
  const [state, setState] = useState(false);
  const [edit, setEdit] = useState(false);

  const editFu = () => {
    setState(true);
    setEdit(!edit);
  }
  console.log('state==', state);
  return (
    <div   style={{border: '1px solid lightgray',position: 'relative', borderRadius: '10px', marginTop: 16, height: state?  'auto': '60px', transform: `screenY(${state ? 1: 0})`, transition: 'all .7s'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: 10}}  onClick={()=>{setState(!state)}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img src={avatar} alt="avatar" width={30} style={{ borderRadius: '50px', border: '1px solid lightgray', padding: 4}}/>
          {/* <span style={{paddingLeft: 10, fontWeight: 600}}>john Doe</span> */}
          {edit ? <input defaultValue={'sdsd'} onChange={()=> console.log('hi')} style={{ width: 'jjohn Doe'.length + 50 }}/>: <span style={{paddingLeft: 10, fontWeight: 600}}>john Doe</span>}
        </div>
        <img src={dropdown} alt="dropdown" width={14} height={10} style={{transform: `rotate(${state? 180: 0}deg)`, transition: 'transform .1s'}}/>
      </div>
      <div  style={{display: state ? 'block' : 'none', padding: '0 10px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <div>Age</div>
            <div>19 Years</div>
          </div>
          <div>
            <div>Gender</div>
            <div>Rather not Say</div>
          </div>
          <div>
            <div>Country</div>
            <div>India</div>
          </div>
        </div>
        <div>
          <div>discription</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quaerat fuga ab rem facilis officiis. Suscipit tempore dolorem eum laboriosam. Doloremque eligendi consequatur molestias unde, expedita inventore vel officia provident.</p>
        </div>
      </div>
      <div style={{textAlign: 'end', display: state ? 'block' : 'none'}}>
        <img src={deleteIcon} alt="delete icon" height={30} width={30}/>
        <img src={editIcon} alt="edit icon" height={30} width={30} onClick={()=> editFu()}/>
      </div>
      {/* <Header/> */}
    </div>
  );
}
