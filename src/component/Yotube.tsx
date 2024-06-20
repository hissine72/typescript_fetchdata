import { useState } from "react"

const Yotube:React.FC = () => {

  interface mm{
    masage:string,
  }
  const  [st,setstate] = useState<mm>({masage : "yotupe"})
  const show = (great:string)=>{
    setstate({masage : great})
  }

  
  return (
   
    
    <>
    <div>{st.masage}</div>
    <button onClick={()=>show("yot")}>yot</button>
    <button onClick ={()=>show("twiter")}>twiter</button>
    <button onClick ={()=>show("sky")}>sky</button>
    </>
  )
}

export default Yotube