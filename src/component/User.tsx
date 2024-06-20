import React, { useEffect, useState } from 'react'
import { iUser } from '../models/iUser';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useAbortedEffect from '../hocks/useAbortedEffect'

const User:React.FC  = () => {

    interface istate{
        users:iUser[]
    }
  
    const[state,setstate] = useState<istate>({
        users:[] as iUser[],
     })
    //  useEffect(()=>{
        
    //     axios.get('https://jsonplaceholder.typicode.com/users',)
    //     .then((res)=>{
    //         setstate({...state,users:res.data})
        
    //     })

    //  },[])



     useAbortedEffect(
        (signal) => {
          axios
            .get('https://jsonplaceholder.typicode.com/users', {
              signal
            })
            .then((data) => {
                setstate({...state,users:data.data})
            })
            .catch((e: any) => {
              if (e.name === 'CanceledError') {
                console.log('First API aborted');
              }
            });
        },
        []
      );
    //  useEffect(() => {
    //     const getData = setTimeout(async () => {
    //       const api = await fetch(
    //         'https://jsonplaceholder.typicode.com/users'
    //       );
    //       const data = await api.json();
    //       console.log(data)
    //     //   setstate({...state,users:data.data})
    
    //     },)
    //     return () => clearTimeout(getData)
        
    //   }, [])
      console.log(state)

     console.log(state.users)
  return (
    <>
    <div className="container">
        <table className="table table-striped  ">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>UserName</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
            {
            state.users.map((el)=>(
                <>
                   {/* <Link to={`usee/${el.id}`}>{el.name}</Link> */}
                   <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{   <Link to={`usee/${el.id}`} className='name'>{el.name}</Link>}</td>
                    <td>{el.username}</td>
                    <td>{el.email}</td>
                    
                   </tr>
                </>
            ))
        }

            </tbody>
        </table>
        
        
         </div>
         </>
  )
}

export default User;