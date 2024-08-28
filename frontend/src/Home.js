import React, { useContext, useEffect } from 'react'
import Ct from './Ct'
import { Link, Outlet, useNavigate } from 'react-router-dom'
const Home = () => {
  let ct=useContext(Ct)
  let navigate=useNavigate()
  useEffect(()=>{
    console.log("home")
    if(ct.data.token==""){
      navigate("/login")
    }
  })
  return (<div className='home'>
    <div className='left'>
      <Link to="/">Allposts</Link>
      <Link to="/mov">Movies</Link>
      <Link to="/edu">Education</Link>
      <Link to="/sports">Sports</Link>
      <Link to="/news">News</Link>
      <Link to="/mypost">Mypost</Link>
      <Link to="/wishList">WishList</Link>
    </div>
    <div className='main'>
      <Outlet/>
    </div>
    </div>
  )
}

export default Home