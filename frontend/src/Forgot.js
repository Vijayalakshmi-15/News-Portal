import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Forgot = () => {
    let [data,setData]=useState({"_id":"","pwd":""})
    let ct=useContext(Ct)
    let navigate=useNavigate()
    let [msg,setMsg]=useState("")
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let change=()=>{
        axios.put("http://localhost:5000/updpwd",data).then((res)=>{
            if(res.data.msg=="password changed"){
            navigate("/login")
            }
            else{
                setMsg(res.data.msg)
            }
        })
    }
  return (
    <div className='formcon'>
    <div className='form'>
        <div style={{color:"blue"}}>Enter mail and Change Your password</div>
        <input type="text" name="_id" value={data._id} onChange={fun}/>
        <input type="password" name="pwd" value={data.pwd} onChange={fun}/>
        <button onClick={change}>Change password</button>
        <div style={{color:"red"}}>{msg}</div>
    </div>
    </div>
  )
}

export default Forgot