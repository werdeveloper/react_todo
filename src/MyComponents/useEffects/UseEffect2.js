import React, {useEffect, useState} from 'react'

const UseEffect2 = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);
    const actualWidth = ()=>{
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth);
    };
    useEffect(()=>{
       window.addEventListener("resize", actualWidth); 
       return (()=>{
        window.removeEventListener("resize", actualWidth);
       });
    });
  return (
    <div className='container'>
        <p className='my-3'>The actual size of window is:</p>
        <h1>{widthCount}</h1>
    </div>
  )
}

export default UseEffect2