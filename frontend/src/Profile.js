import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  let ct=useContext(Ct)
  let [prof,setProf]=useState({})
  let navigate=useNavigate()
  useEffect(()=>{
    if(ct.data.token==""){
      navigate("/login")
    }
    else{
      axios.get(`http://localhost:5000/getd/${ct.data._id}`).then((res)=>{
        console.log(res.data)
        setProf(res.data)
      })
    }
  })

  return (
    <div className='profcon'>
      <div className='profile'>
      <i class="fa-regular fa-user pf"></i>
      <h3><span>Name:</span>{prof.name}</h3>
      <p><span>Email:</span>{prof._id}</p>
      <p><span>Mobile:</span>{prof.phno}</p>
      <p><span>Gender:</span>{prof.gen}</p>
      <p><span>Date of birth:</span>{prof.dob}</p>
      <p><span>State:</span>{prof.state}</p>
      </div>
    </div>
  )
}

export default Profile