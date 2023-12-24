"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function RegisterButton() {
  const [createBy, setCreateBy] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleButtonClick = async () => {
    if (document) {
      (
        document.getElementById("register_modal") as HTMLFormElement
      ).showModal();
    }
  };

  function register() {
    if (!name) {
      return alert("name is empty");
    }
    if (!password) {
      return alert("password is empty");
    }
    if (!email) {
      return alert("email is empty");
    }
    if (!phoneNumber) {
      return alert("phoneNumber is empty");
    }
    if (!login) {
      return alert("login is empty");
    }

    setCreateBy(name);

    axios
      .post(process.env.api + "/register", {
        createBy: createBy,
        email: email,
        login: login,
        name: name,
        password: password,
        phoneNumber: phoneNumber,
      })
      .then((response) => {
        console.log(response);
        (document.getElementById("register_modal") as HTMLFormElement).close();
        setPassword("");
        setCreateBy("");
        setEmail("");
        setLogin("");
        setName("");
        setPhoneNumber("");
        alert("註冊成功")
        location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.title)
      });
  }

  return (
    <>
      <button
        className="btn btn-warning mr-4"
        onClick={() => {
          handleButtonClick();
        }}
      >
        註冊
      </button>
      <dialog id="register_modal" className="modal">
        <div className="modal-box bg-white text-black p-10">
          <h3 className="font-bold text-xl text-center">
            請輸入您的個人資料及密碼
          </h3>
          <input
            type="text"
            placeholder="姓名"
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
            onChange = {(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="電話"
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
            onChange = {(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="帳號名稱"
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
            onChange = {(e) => setLogin(e.target.value)}
          />
          <input
            type="text"
            placeholder="電子郵件"
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
            onChange = {(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="密碼"
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
            onChange = {(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-warning mt-4 w-full" onClick={() => register()}>註冊</button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
