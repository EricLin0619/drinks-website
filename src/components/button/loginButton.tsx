'use client';
import axios from 'axios';
export default function LoginButton() {
  const handleButtonClick = async () => {
    if (document) {
      (document.getElementById("login_modal") as HTMLFormElement).showModal();
    }
  }

  function login() {

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
          <h3 className="font-bold text-lg text-center">請輸入您註冊的電子郵件及密碼</h3>
          <input type="text" placeholder="電子郵件帳號" className="input input-bordered w-full bg-white mt-4 text-white"/>
          <input type="text" placeholder="密碼" className="input input-bordered w-full bg-white mt-4 text-white"/>
          <button className="btn btn-success mt-4 w-full" onClick={() => alert("登入")}>登入</button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
