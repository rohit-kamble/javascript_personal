import React, {useEffect, useState} from 'react';

function Child({show}){
  return (<div>click row{show}</div>)
}
function Child1({data, setShow}){
  // console.log('data=', data);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((item)=>{
            return (
              <tr key={item.id} onClick={()=> setShow(item.id)}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
              </tr>
            )
            })
        }
        
        </tbody>
      </table>  
    </div>)
}
export default function App(props) {
  const [data, setData]= useState([]);
  const [show, setShow] = useState('');
  var arr = [2,4,5,2,5,2,6,7,81,1,7]
  const store = [];
  let obj={}
  for(let i = 0; i< arr.length; i++){
     if(obj[arr[i]]){
       obj[arr[i]] += 1;
       if(obj[arr[i]] > 1 && obj[arr[i]] != arr[i] ){
        store.push(arr[i]);
      }
     }
     else {
      obj[arr[i]] = 1;
     }
     
  } 
  
  // console.log(obj);
  console.log('store', store);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(response => setData(response))
    .catch(err=> console.log('err'))
  }, [])
  return (
    <div className='App'>
      <Child show={show}/>
      <Child1 data={data} setShow={setShow}/>
    </div>
  );
}

// Log to console
console.log('Hello console')