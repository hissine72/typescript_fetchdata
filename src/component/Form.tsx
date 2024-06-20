import React, { useState } from 'react'

const Form:React.FC = () => {
    interface us {
      userrr:  {
      username:string;
      password:string;
      }

    }
   
  const [user,setuser] = useState<us>({
    userrr :{
    username:"",
    password:"",
    }

  })
       
  const handelchange=(e:React.ChangeEvent<HTMLInputElement>):void =>{
    setuser({
     
         userrr:{
          ...user.userrr,
          [e.target.name]:e.target.value
         }
    }
                 
        )

  }
  const handelsubmit = (e:React.FormEvent<HTMLFormElement>):void=>{
    e.preventDefault();
    console.log(user.userrr)

  }
                    
  return (
    <>
   
    <section className='w-50 container'>
   <form onSubmit={handelsubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='username' onChange={handelchange} value  = {user.userrr.username} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' onChange={handelchange} value = {user.userrr.password} className="form-control" id="exampleInputPassword1" />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    
    </section>

    </>  
  )
}

export default Form