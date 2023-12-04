"use client"
import React from 'react'
import LoginButton from "./button/loginButton";
import RegisterButton from "./button/registerButton";
import { useRouter } from "next/navigation";
import LogoutButton from "./button/logoutButton";
import { jwtDecode } from 'jwt-decode'
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter()
  const [login, setLogin] = useState(false)
  const [username, setUsername] = useState('')

  useEffect(() => {
    const jwtToken = sessionStorage.getItem('jwt')
    setLogin(checkToken(jwtToken))
    setUsername(getUsername(jwtToken))
  },[login])

  function checkToken(jwtToken: string) {
    if(jwtToken != null) {
      if(jwtDecode(jwtToken).exp as any > Math.floor(Date.now()/1000)) {
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

  function getUsername(jwtToken: string) {
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
            <img src="./shopping-cart.png" alt="shopping-cart" className='w-8 h-8 cursor-pointer' onClick={()=>{router.push("./shoppingCart")}}/>
            <img src="./user.png" alt="shopping-cart" className='w-7 h-7 cursor-pointer ml-4' onClick={()=>{router.push("./userData")}}/>
            <img src="./user.png" alt="shopping-cart" className='w-7 h-7 cursor-pointer ml-4' onClick={()=>{router.push("./Userhistory")}}/>
            <img src="./store.png" alt="shopping-cart" className='w-7 h-7 cursor-pointer ml-4' onClick={()=>{router.push("./store")}}/>
            <span className="cursor-pointer text-black ml-4" onClick={()=>{router.push("./orderManagement")}}>接單</span>
          </>
          :
          <>
            <p className="px-5 text-black">{username} 您好</p>
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
