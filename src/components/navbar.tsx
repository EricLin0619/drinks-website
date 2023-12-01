"use client"
import LoginButton from "./button/loginButton";
import RegisterButton from "./button/registerButton";
import { useRouter } from "next/navigation";
import LogoutButton from "./button/logoutButton";
import { jwtDecode } from 'jwt-decode'
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter()
  const jwtToken = sessionStorage.getItem('jwt')
  const [login, setLogin] = useState(false)

  useEffect(() => {
    setLogin(checkToken())
  },[login])

  function checkToken() {
    if(jwtToken != null) {
      if(jwtDecode(jwtToken).exp > Math.floor(Date.now()/1000)) {
        return true
      }
      else {
        return false
      }
    }
    else{
      return false
    }
  }

  function getUsername() {
    if(jwtToken != null) {
      return jwtDecode(jwtToken).sub
    }
  }
  return (
    <div className="navbar bg-[#1FA6E0] shadow-xl">
      <div className="flex-1" onClick={()=>{router.push("/")}}>
        <img src="https://cdn-icons-png.flaticon.com/512/5821/5821159.png" alt="bubble-tea" className="ml-8 w-12 h-12 cursor-pointer"/>
        <a className="btn btn-ghost text-2xl text-black">下次一訂</a>
      </div>
      <div className="mr-32">
      { !(login) ? 
          <>
            <LoginButton/>
            <RegisterButton/>
          </>
          :
          <>
            <p className="px-5 text-black">{getUsername()} 您好</p>
            <LogoutButton/>
          </>
        }
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
