
// interface initprop{
//     name:string,
//     titel:string,
//     age?:number,
// }
// interface stateprpo{
//     nameee:string,
//     titelll:string,
// }

import { useForm, SubmitHandler } from "react-hook-form"


const Fom:React.FC = () => {
//     const handelclic= ()=>{
//         console.log("hkjsladkj")
//     }
//     const [nameeee,setname] =useState<stateprpo>({nameee:"mohamed",titelll:"cairo"})
//     console.log(nameeee)
type Tforminput = {
    firstName: string;
    password:string;
    userId :string;
}


const {register,handleSubmit} = useForm<Tforminput>()
const handel:SubmitHandler<Tforminput> = (data)=>{
    
const {firstName,lastname,userId} = data;

}
  return (
    <div>
       {/* <form onSubmit={handleSubmit(handel)}>

            <input type="text" {...register("firstName")} />
            <input type="password"  {...register("password")}/>  
            <button type="submit"></button>

       </form> */}
    </div>
  )
}

export default Fom