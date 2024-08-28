import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Ct from './Ct'

const Wishlist = () => {
    let [post,setPost]=useState([])
    let [id,setId]=useState([])
    let ct=useContext(Ct)
    
    useEffect(()=>{  
      axios.get("http://localhost:5000/getPost").then((res)=>{
        setPost(res.data)
        console.log(res.data)
      })
      axios.get(`http://localhost:5000/getw/${ct.data._id}`).then((res)=>{
        setId(res.data)
        console.log(res.data)
      })
    },[])
    return (
      <div  className='p1'>
        {
          id.map((x)=>{
            return(<div>
              {
                post.map((item)=>
                {
                  return(<div>
                    {
                    (item._id==x._id)?<div className='post'>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                      <p className='a'>{item.date}</p>
                      <p className='a'>{item.name}</p>
                    </div>:null
                }
                    </div>)
                }
            )
          }
            </div>)
          })
        }
      </div>
    )
}

export default Wishlist
