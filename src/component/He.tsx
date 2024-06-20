import React, { useEffect, useState } from 'react'

import { iUser } from '../models/iUser'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import useAbortedEffect from '../hocks/useAbortedEffect'

const He:React.FC = () => {
  interface istate{
    users:iUser,
}
interface ipram{
  id : number ;
}

const[state,setstate] = useState<istate>({
    users:{} as iUser,
 })
 const {id}= useParams <ipram | any> ()

//  useEffect(()=>{
  
  
//   if(id){
//     setstate({...state})
//     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`,)
// //   .then((response) => response.json())
//   .then((json) =>{
//     setstate({...state,users:json.data})
  

//   })
  
//   }

//  },[id])

 useAbortedEffect(
    (signal) => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`, {
          signal
        })
        .then((json) => {
            setstate({...state,users:json.data});
        })
        .catch((e: any) => {
          if (e.name === 'CanceledError') {
            console.log('First API aborted');
          }
        });
    },
    []
  );
//   window.onclick = () => console.clear();

 
 console.log(state.users)
 const {users} = state;
//  console.log(state.users.values)

  return (
    <div>
     

      {/* {
        // state.users.length > 0 &&
        
            state.users.map((el)=>(

              
                
                   
                   
                    <>
                   <h2>{el.name}</h2>
                   <h3>{el.company.name}</h3>
                   <h3>{el.email}</h3>
                   </>

                 
                
                
            ))
            
        } */}
        {
          Object.keys(users).length > 0 &&(
            <>
            <div className='container'>
            <h1> Singl user details page </h1>
            <div className='row'>
              <ul className='list-group'>
                <li className='list-group-item'>
                  Name : <b>{users.name}</b>
                </li>
                <li className='list-group-item'>
                  UserName : <b>{users.username}</b>
                </li>
                <li className='list-group-item'>
                  Phone : <b>{users.phone}</b>
                </li>
                <li className='list-group-item'>
                  City : <b>{users.address.city}</b>
                </li>
                <li className='list-group-item'>
                  Website : <b>{users.website}</b>
                </li>
                <li className='list-group-item'>
                  Company : <b>{users.company.name}</b>
                </li>

              </ul>

            </div>
            </div>
         
            </>
          )
        }
    </div>
  )
}

export default He