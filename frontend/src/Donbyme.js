import axios from 'axios'
import React, { useEffect, useState ,useContext} from 'react'

import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Donebyme = () => {
  let [posts,setPosts]=useState([])
  let [f,setF]=useState(true)
  let obj=useContext(Ct)
  let navigate=useNavigate()
    useEffect(()=>{
      axios.get(`http://localhost:5000/getpost/uid/${obj.data._id}`).then((res)=>{
        setPosts(res.data)
      })

    },[f])
    let edit=(item)=>{
      obj.setlogin({"item":item})
      navigate("/edit")

    }
    let del=(id)=>{
      axios.delete(`http://localhost:5000/del/${id}`).then((res)=>{
        setF(f=>!f)
      })


    }

  return (
    <div className='newscon'>
    {
      posts.map((item)=>{
        return(<div className='postcon'>
          <p>
            <span className='hd'>{item.title}</span>
            {item.body}
          </p>
          <h3>Posted By:{item.name}</h3>
          <h3>{new Date(item.date).toLocaleDateString()}</h3>
          <section>
            <button onClick={()=>edit(item)}>Edit</button>
            <button onClick={()=>del(item._id)}>Delete</button>
          </section>
          </div>)
      })
    }

    </div>
  )
}

export default Donebyme
