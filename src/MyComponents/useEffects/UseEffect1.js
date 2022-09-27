import React, { useState, useEffect } from 'react';

const UseEffect1 = () => {
  const [count, setCount] = useState(0);
  useEffect(() =>{
    if(count>=1)

    document.title = `Count ${count}`;
  }, [count]);
  return (
    <>
      <div className='container'>
        <h3 className='my-3'>{count}</h3>
        <button type="button" className="btn btn-primary text-center my-3" onClick={()=>{ setCount(count+1) }}>CLick Me</button>
      </div>
    </>
  )
}

export default UseEffect1;