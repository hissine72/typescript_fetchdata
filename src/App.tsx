import './App.css'
// import Counter from './component/Counter'
import Fom from './component/Fom'
import Form from './component/Form'
import He from './component/He'
import Navbar from './component/Navbar'
// import { Sayhellow } from './component/Sayhellow'
import User from './component/User'
// import UserDetailes from './component/UserDetailes'
// import Yotube from './component/Yotube'
import { Routes, Route,  } from 'react-router-dom'

function App() {
//  const opjdata = {
//     firstname :"hissine",
//     lastname:"quid",
//   }
//   const arrdata = [
//     {
//       firstname :"hissine",
//       lastname:"quid",
//     },
//     {
//       firstname :"hissine",
//       lastname:"quid",
//     },
//     {
//       firstname :"hissine",
//       lastname:"quid",
//     },

//   ]

  return (
    <>
      <Navbar />
      {/* <Sayhellow name = "hissine" age = {24} isloggedin= {true} opjdata= {opjdata} arrdata= {arrdata} /> */}
      {/* <Fom name="mohmamed" titel="quid"  /> */}
      {/* <Counter /> */}
      {/* <Yotube /> */}
      {/* <Form/> */}
    <Fom />
      <Routes>
         < Route path='/usee/:id' element= {<He />}/>
         < Route path='/' element= {<User />}/>
         <Route path='/login' element={<Form />} />
           
      </Routes>
    </>
  )
}

export default App
