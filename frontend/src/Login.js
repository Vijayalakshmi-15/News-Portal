import React, { useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Ct from './Ct'


const Login = () => {
  let [data,setData]= useState({"token":"","_id":"","pwd":""})
  let [m,setM]= useState("")
  let navigate=useNavigate()
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  let ct=useContext(Ct)
  let login=()=>{
    axios.post("http://localhost:5000/login",data).then((res)=>{
      
      if(res.data.token!=undefined){
        ct.setLogin(res.data)
        navigate("/")
      }
      else{
        setM(res.data.msg)
      }
    })
  }
  return (
    <div className='formcon'>
      <div className='form'>
      <div>Sign in</div>
        <input type="text" name="_id" value={data._id} onChange={fun} />
        <input type="password" name="pwd" value={data.pwd} onChange={fun}/>
        <Link to="/forgot" id="forgot">forgot password</Link>
        <button onClick={login}>Login</button>
        <Link to="/reg">Create an account</Link>
        <div style={{color:'red'}}>{m}</div>
      </div>
      
    
    </div>
  )
}
export default Login