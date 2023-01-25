import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPasssword] = useState("")

  const dispatch=useDispatch()
  const navigate = useNavigate()
  const loaction = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password){
      const loginData={
        email,password
      }
      dispatch(login(loginData)).then(()=>{
        navigate( loaction.state || "/",{replace:true})
      })
    }
  }
  return (
    <div className="h-screen ">
    
      <h2 className="text-xl font-bold text-center text-gray-200">LOGIN</h2>
      <form onSubmit={handleSubmit} className="text-center   border-violet-400 shadow-green-500 shadow-inner w-[30%] m-auto my-8 py-4 rounded-lg">
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email" value={email} type="email" className="border-2 border-red-400" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password" value={password} type="password"  className="border-2 border-red-400" onChange={(e)=>setPasssword(e.target.value)}/>
        </div>
        <button  className="px-4 py-2 my-4 text-gray-100 rounded-lg hover:bg-green-500 bg-slate-600"  type="submit" data-testid="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
