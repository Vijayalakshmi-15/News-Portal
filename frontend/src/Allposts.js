import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Allposts = () => {
  let[post,setPost]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/getpost").then((res)=>{
      setPost(res.data)
    })
  },[])
  return (
    <div className='newscon'>
      {
        post.map((item)=>{
          return(<div className='postcon'>
          <p>
            <span className='hd'>{item.title}</span>
            {item.body}
            </p>
            <h3>Posted By:{item.name}</h3>
            <h3>{item.date}</h3>
            </div>)
      })
    }
      
    </div>
  )
}

export default Allposts
