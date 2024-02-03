import React, { memo } from 'react';
function AapMemo ({called, second}) {
    console.log("test");
    
    return <div>Rohit<button onClick={called}>{second}</button></div>
  }
  
export default memo(AapMemo);