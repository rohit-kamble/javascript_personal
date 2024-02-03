//In below snippet write the code needed for the Loading component.

//If status is true, it will simply render text " Loading.. ".

//If status is false, it will render the inner content as seen in below snippet.

// Please do not modify below snippet.


const App = () => {

   let status=false
  const date = new Date();
  const d = date.getMonth() === 10 ? 'nov' : null;
  const g = date.getDay();

  return (

    <Loading color={'red'} status={status}>

      <div>hello, {d + "/" + g}</div>

    </Loading>

  )}

  function Loading({status, color, children}){ 

    if(status) {
      return <p style={{color: color}}>Loading..</p>
    }
    return children;
  }

  export default App;