import React, { useState } from "react";
import { Useri } from "../models/Liist";






 const UserDetailes:React.FC = () => {
    interface isuser{
        users:Useri[]
    }
   

   const[userdetail,setuserdetail] = useState<isuser>({
    users:[
        {firstname:"mo",lastname:"jkl",age:24},
        {firstname:"mo",lastname:"jkl",age:24},
        {firstname:"mo",lastname:"jkl",age:24},
    ]
   }

   )
//    const show:React.JSX=()=>{
    

//    }
    


  return (
    <div>{userdetail.users.map((el)=>(
        <>
        <h1>{el.firstname}</h1>
        <h2>{el.lastname}</h2>
        <h3>{el.age}</h3>
        </>
    ))
}</div>
  )
}
export default UserDetailes;
