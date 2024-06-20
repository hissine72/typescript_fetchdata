import Form from "./Form";

type props  = {
    name:string;
    age:number;
    isloggedin:boolean;
    opjdata:{
        firstname:"string";
        lastname:"string";

    };
    arrdata:{
        firstname:"string";
        lastname:"string";

    }[]
}


const first:string= "mohamed hissine"
  

export const Sayhellow = ({age,name,isloggedin,opjdata,arrdata}:props) => {
  return (
    <>
    <h1>{isloggedin? <> <h1>hellow {name}</h1> <p>my age is {age}</p> </>:"guest"}</h1>
    <h1> {opjdata.firstname} {opjdata.lastname}</h1>
    {arrdata.map((el) => (
        <ul key={el.firstname}>
            <li>{el.firstname}</li> <li>{el.lastname}</li>
        </ul>
        
    )

    )}
    <h1> hellow {first} </h1>
    {/* <Form  /> */}
    
  
    </>
  )
}
