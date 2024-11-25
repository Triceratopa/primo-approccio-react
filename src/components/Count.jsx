import React, {useState} from 'react';
const Counter= function(){
    const[count,setCount]=useState(0);
    const increment= function(){
        setCount(count+1)}

return(
    <div><h1>Crono:{count}</h1>
    <button onClick={increment}>Click!</button></div>
)}

export default Counter