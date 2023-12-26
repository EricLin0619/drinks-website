"use client";
import React from "react";
import LoginButton from "./button/loginButton";
import RegisterButton from "./button/registerButton";
import { useRouter } from "next/navigation";
import LogoutButton from "./button/logoutButton";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import AdminDropDown from "./adminDropDown"
import UserDropDown from "./userDropDown";

export default function Navbar() {
  const router = useRouter();
  const [accountAuth, setAccountAuth] = useState(false);
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("jwt");
    setLogin(checkToken(jwtToken));
    setUsername(getUsername(jwtToken));
  }, [login]);

  function checkToken(jwtToken: string) {
    if (jwtToken != null) {
      if (jwtDecode(jwtToken).auth.includes("ADMIN")) {
        setAccountAuth(true);
      }
      if ((jwtDecode(jwtToken).exp as any) > Math.floor(Date.now() / 1000)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  function getUsername(jwtToken: string) {
    if (jwtToken != null) {
      return jwtDecode(jwtToken).sub;
    }
  }
  return (
    <div className="navbar bg-[#1FA6E0] shadow-xl">
      <div
        className="flex-1"
        onClick={() => {
          router.push("/");
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/5821/5821159.png"
          alt="bubble-tea"
          className="ml-8 w-12 h-12 cursor-pointer"
        />
        <a className="btn btn-ghost text-2xl text-black">下次一訂</a>
      </div>

      <div className="mr-32">
        {!login ? (
          <>
            <LoginButton />
            <RegisterButton />
          </>
        ) : (
          <>
            <p className="px-5 text-black">{username=="admin" ? "管理員": username} </p>
          </>
        )}
        {accountAuth && login ? (
          <>
            <AdminDropDown changeLoginState={setLogin}/>
          </>
        ) : (
          <></>
        )}
        {!accountAuth && login ? (
          <>
            <UserDropDown changeLoginState={setLogin}/>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
