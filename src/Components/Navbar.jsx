import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Redux/AuthReducer/action'
import {FiShoppingCart} from 'react-icons/fi'
const style = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  border: '2px solid blue',
}
const Navbar = () => {
  const isAuth = useSelector((store) => store.authReducer.isAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleLogout=()=>{
    dispatch(logout())
    navigate("/")
  }

  const addWatchesData= useSelector((store)=>store.appReducer.addWatchesData)


  return (
    <div data-testid="navbar" style={style}>
      <div data-testid="navbar-home-link">
        <Link to="/">
          {' '}
          <img
            src="/watch.png"
            width="60px"
            alt="logo"
            style={{ display: 'block' }}
          />
        </Link>
      </div>

      <div className='flex items-center gap-x-10'>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        {isAuth ? (
          <button onClick={handleLogout}
            className="px-4 py-2 text-gray-100 rounded-lg hover:bg-green-500 bg-slate-600"
            data-testid="navbar-login-button"
          >
            LOGOUT
          </button>
        ) : (
          <Link to="/login">
            {' '}
            <button
              className="px-4 py-2 text-gray-100 rounded-lg hover:bg-green-500 bg-slate-600"
              data-testid="navbar-login-button"
            >
              LOGIN
            </button>{' '}
          </Link>
        )}

        
        <div>
        <p className='relative font-bold text-center text-white rounded-md left-1 bg-cyan-900'>{addWatchesData.length}</p>
        <FiShoppingCart size={20}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
