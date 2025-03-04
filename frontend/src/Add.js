import React, { useContext, useEffect, useState} from 'react'
import axios from 'axios'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  let [data,setData]=useState({"title":"","cat":"","body":""})
  let [msg,setMsg]=useState("")
  let ct=useContext(Ct)
  let navigate=useNavigate()

  useEffect(()=>{
    if(ct.data.token==""){
      navigate("/login")
    }
  })
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let add=()=>{
    axios.post("http://localhost:5000/addpost",{...data,"date":new Date().toLocaleDateString(),"uid":ct.data._id,"name":ct.data.name}).then((res)=>{
      setMsg(res.data.msg)
      setData({"title":"","cat":"","body":""})
    })
  }
  return (
    <div className='formcon'>
    <div className='form'>
      <input type="text" name="title" value={data.title} placeholder='title' onChange={fun}/>
      <select name="cat" onChange={fun} value={data.cat}>\
        <option selected disabled value=""> select catagory</option>
        <option value="movies">Movies</option>
        <option value="news">News</option>
        <option value="sport">Sports</option>
        <option value="edu">Education</option>
      </select>
      <textarea value={data.body} onChange={fun} name='body'></textarea>
      <button onClick={add}>Add post</button>
      <div>{msg}</div>
    </div>
    </div>
  )
}

export default Add