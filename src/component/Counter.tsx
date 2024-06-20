import React, { useState } from 'react'


 const Counter:React.FC = () => {
    interface inistate{
        count:number,
    }
    interface show{
        name:string,
        age:number,
    }
    const[ show, setshow] =useState <show>({
        name:"moha",
        age:24,
    })

    

   
    const[stat,setstate]= useState<inistate> ({count : 0})

    
    const handelinc = ()=>{
        setstate({count : stat.count + 1})
    }
    const handeldec = ()=>{
        if(stat.count > 0) {

            setstate({count : stat.count - 1})
        }
        else{return}
       
    }
  return (
    <>
    <h1>{stat.count}</h1>
    <button onClick={handelinc}> inc</button>
    <button onClick={handeldec}>dec</button>

    <h2>{show.name}</h2>
    <h3>{show.age}</h3>
    </>
  )
}
export default Counter;
