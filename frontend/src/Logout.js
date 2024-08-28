import React, { useContext, useEffect } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  let ct=useContext(Ct)
  let navigate=useNavigate()
  useEffect(()=>{
    ct.setLogin({"token":"","name":"","_id":""})
    navigate("/Login")
  })
  return (
    <div>Logout</div>
  )
}

export default Logout