import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'


const Movies = () => {
  let [posts,setPosts]=useState([])
  let ct=useContext(Ct)
  
  useEffect(()=>{
    axios.get("http://localhost:5000/getby/cat/movies").then((res)=>{
      setPosts(res.data)
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
    posts.map((item)=>{
      return(<div className='posts'>
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

export default Movies
