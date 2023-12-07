"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginButton() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleButtonClick = async () => {
    if (document) {
      (document.getElementById("login_modal") as HTMLFormElement).showModal();
    }
  };

  function login() {
    if (!username) {
      return alert("username is empty");
    }

    if (!password) {
      return alert("password is empty");
    }

    axios
      .post(process.env.api + "/authenticate", {
        username: username,
        password: password,
        rememberMe: true,
      })
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("jwt", response.data.id_token);
        (document.getElementById("login_modal") as HTMLFormElement).close();
        setUsername("");
        setPassword("");
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <button
        className="btn btn-success mr-4"
        onClick={() => {
          handleButtonClick();
        }}
      >
        登入
      </button>
      <dialog id="login_modal" className="modal">
        <div className="modal-box bg-white text-black p-10">
          <h3 className="font-bold text-lg text-center">
            請輸入您註冊的電子郵件及密碼
          </h3>
          <input
            type="text"
            placeholder="電子郵件"
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
            onChange = {(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="密碼"
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
            onChange = {(e) => setPassword(e.target.value)}
          />
          <button
            className="btn btn-success mt-4 w-full"
            onClick={() => login()}
          >
            登入
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
