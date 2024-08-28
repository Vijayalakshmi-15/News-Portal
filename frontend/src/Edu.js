import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Ct from './Ct'

const Edu = () => {
  let [post,setPost]=useState([])
  let ct=useContext(Ct)
  useEffect(()=>{
    axios.get("http://localhost:5000/getby/cat/edu").then((res)=>{
      setPost(res.data)
      console.log("edu")
    })
  },[])

  let wish=(item)=>{
    axios.post("http://localhost:5000/addw",{"_id":item._id,"uid":ct.data._id}).then((res)=>{
      console.log(res.data)
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
          <button onClick={()=>wish(item)}>Save</button>
          </div>)
        })
      }
    </div>
  )
}

export default Edu