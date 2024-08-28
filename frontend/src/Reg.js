import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const Reg = () => {
    let [data,setData]=useState({"_id":"","name":"","pwd":"","gen":"","phno":"","dob":"","state":""})
    let [msg,setMsg]=useState("")
    let navigate=useNavigate()
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let add=()=>{
        axios.post("http://localhost:5000/reg",data).then((res)=>{
            setMsg(res.data.msg)
            setData({"_id":"","name":"","pwd":"","gen":"","phno":"","dob":"","state":""})
            navigate("/login")
        })

    }
    return (
    <div className='formcon'>
        <div className='form'>
            <h3>Register</h3>
            <input type="text" placeholder='Enter email' onChange={fun} value={data._id} name="_id"/>
            <input type="password" placeholder='Enter password' onChange={fun} value={data.pwd} name="pwd"/>
            <input type="text" placeholder='Enter name' onChange={fun} value={data.name} name="name"/>
            <input type="text" placeholder='Enter phno' onChange={fun} value={data.phno} name="phno"/>
            <div>Gender:<input type="radio" name="gen" onChange={fun} value="female" checked={data.gen=="female"}/>Male
            <input type="radio" name="gen" onChange={fun} value="Male" checked={data.gen=="Male"}/>Female</div>
            <input type="date" name="dob" onChange={fun} value={data.dob}/>
            <select name="state" onChange={fun} value={data.state}>
                <option selected disabled value="">select state</option>
                <option value="ap">Andhra</option>
                <option value="ts">Telagana</option>
                <option value="mh">Maharshtra</option>
            </select>
            <div><button onClick={add}>Register</button>
                </div>
            
            <div style={{color:'greenyellow'}}>{msg}</div>
            
        </div>
    </div>
  )
}
export default Reg