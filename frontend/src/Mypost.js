import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Mypost = () => {
  let [post,setPost]=useState([])
  let ct=useContext(Ct)
  let navigate=useNavigate()
  let [f,setF]=useState(true)
  useEffect(()=>{
    axios.get(`http://localhost:5000/getby/uid/${ct.data._id}`).then((res)=>{
      setPost(res.data)
      console.log(res.data)
    })
  },[f])
  let edit=(item)=>{
    ct.setLogin({"item":item})
    navigate("/edit")
  }
  let del=(id)=>{
    axios.delete(`http://localhost:5000/del/${id}`).then((res)=>{
      setF(f=>!f)
    })
  }
  return (
    <div  className='p1'>
      {
        post.map((item)=>{
          return(<div className='post'>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <p className='a'>{item.date}</p>
          <p className='a'>{item.name}</p>
          <button onClick={()=>edit(item)}>edit</button>
          <button onClick={()=>del(item._id)}>delete</button>
          </div>)
        })
      }
    </div>
  )
}

export default Mypost
