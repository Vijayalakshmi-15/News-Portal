import React ,{useContext} from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'

const Nav = () => {
  let ct=useContext(Ct)
  return (
    <div className='nav'>
    {ct.data.token!="" &&<Link to="/" >Home</Link>}
    {/* {ct.data.token=="" &&<Link to="/login">Login</Link>} */}
    {/* {ct.data.token=="" &&<Link to="/reg">Register</Link>} */}
    {ct.data.token!="" && <Link to="/logout">Logout</Link>}
    {ct.data.token!="" && <Link to="/addPost">AddPost</Link>}
    {ct.data.token!="" && <div className='profile'>
      <Link to="/profile"><i class="fa-regular fa-user"></i>{ct.data.name}</Link>
      </div>}
    </div>
  )
}
export default Nav