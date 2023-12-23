"use client";
import { CurrentCouponType } from "@/type";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function AlterCouponDataButton(props: CurrentCouponType) {
  const jwtToken = sessionStorage.getItem('jwt')
  const expirationDate = new Date(props.expireDatetime*1000);
  const [code, setcouponCode] = useState("");
  const [expireDatetime, setcouponExpireDatetime] = useState(0);
  const [usetimes, setcouponUseTimes] = useState("");
  const [discount, setcouponValue] = useState("");
  
  const handleButtonClick = async () => {
    if (document) {
      (
        document.getElementById(`AlterCoupon${props.code}`) as HTMLFormElement
      ).showModal();
    }
  };

  function updateCoupon() {
    if (!code || !expireDatetime || !usetimes || !discount) {
      alert("請填入所有優惠卷資訊!");
      return;
    }
    if (Number(usetimes) <= 0 || Number(discount) <= 0) {
      alert("請填入正確優惠卷資訊!");
      return;
    }
    axios.defaults.headers.common["Authorization"] = "Bearer " + jwtToken;
    axios
      .put(process.env.api + "/coupons/"+props.id, {
        couponId: props.uuid,
        couponCode: code,
        couponExpireDatetime: expireDatetime,
        couponUseTimes: usetimes,
        couponValue: discount,
        id:props.id
      })
      .then((response) => {
        console.log(response);
        setcouponCode("");
        setcouponExpireDatetime(0);
        setcouponUseTimes("");
        setcouponValue("");
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <span
        className="text-red-400 mr-4 font-bold cursor-pointer"
        onClick={handleButtonClick}
      >
        更改資料
      </span>
      <dialog id={`AlterCoupon${props.code}`} className="modal">
        <div className="modal-box bg-white text-black p-10">
        <p className="text-2xl font-bold text-black mt-10">新增優惠卷</p>
        <div className="label">
          <span className="label-text mt-4">優惠卷代碼</span>
        </div>
        <input
          type="text"
          placeholder={props.code}
          className="bg-white p-2 border-2 rounded-md block w-full text-black"
          onChange={(e) => setcouponCode(e.target.value)}
        />
        <div className="label">
          <span className="label-text mt-4">優惠卷折扣</span>
        </div>
        <input
          type="number"
          placeholder={props.discount.toString()}
          className="bg-white p-2 border-2 rounded-md block w-full text-black"
          onChange={(e) => setcouponValue(e.target.value)}
        />
        <div className="label">
          <span className="label-text mt-4">優惠卷使用次數</span>
        </div>
        <input
          type="number"
          placeholder={props.usetimes.toString()}
          className="bg-white p-2 border-2 rounded-md block w-full text-black"
          onChange={(e) => setcouponUseTimes(e.target.value)}
        />
        <div className="label">
          <span className="label-text mt-4">優惠卷到期日</span>
        </div>
        <input
          type="datetime-local"
          step="1"
          placeholder=""
          className="bg-white p-2 border-2 rounded-md block w-full text-black"
          onChange={(e) =>
            setcouponExpireDatetime(e.target.valueAsNumber / 1000)
          }
        />
        <button
          className="text-black rounded-md btn mt-4 bg-red-400 border-none"
          onClick={() => {
            updateCoupon();
          }}
        >
          修改
        </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default AlterCouponDataButton;
