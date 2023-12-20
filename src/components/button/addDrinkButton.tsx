"use client";
import { RxCross2 } from "react-icons/rx";
import React from "react";
import { AddDrinkButtonType } from "../../type";
import { useEffect, useState } from "react";
import axios from "axios";

function AddDrinkButton(props: AddDrinkButtonType) {
  const jwtToken = sessionStorage.getItem('jwt')
  const [size, setSize] = useState("");
  const [ice, setIce] = useState("");
  const [sugar, setSugar] = useState("");
  const [useruuid, setUserUUId] = useState("");

  const handleButtonClick = async () => {
    if (document) {
      (
        document.getElementById(props.name) as HTMLFormElement
      ).showModal();
    }
  };
  useEffect(() => {
    if(!props.ice){
      setIce("固定");
    }
    if(!props.sugar){
      setSugar("固定");
    }
    if(!props.size){
      setSize("L");
    }
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .get(process.env.api + "/getUserInfo")
      .then((response) => {
        setUserUUId(response.data.userId);
          })
      .catch((error) => {
        console.log(error);
      });
  },[])

  function createShoppingCart() {
    if (!ice) {
      return alert("ice is empty");
    }
    if (!sugar) {
      return alert("sugar is empty");
    }
    if (!size) {
      return alert("size is empty");
    }
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .post(process.env.api + "/shopping-carts", {
        drinkId: props.uuid,
        drinkSize: size,
        sugar: sugar,
        ice: ice,
        toppings: props.description,
        userId: useruuid
      })
      .then((response) => {
        console.log(response);
        setIce("");
        setSugar("");
        setSize("");
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <RxCross2
        className={`text-[#1FA6E0] m-auto w-6 h-6 rotate-45 font-bold cursor-pointer`}
        onClick={() => {
          handleButtonClick();
        }}
      />
      <dialog id={props.name} className="modal">
        <div className="modal-box bg-white text-black p-0 rounded-lg">
          <img
            src={props.imageUrl}
            alt="drink_photo"
            className="w-full h-80"
          />
          <h3 className="font-bold text-2xl ml-6 mt-4">{props.name}</h3>
          <h3 className="ml-6 text-base">．{props.description}</h3>
          <h3 className="ml-6 mt-6 font-bold text-xl">$ {props.price}</h3>
          <div className="divider mx-6 text-[#808080]"></div>
          {props.size?<div className="p-4 m-6 bg-[#00C0FF] rounded bg-opacity-40">
            <p className="font-bold text-lg">飲料大小</p>
            <p className="text-sm">選擇1個</p>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="size"
                  value="L"
                  className="radio radio-primary block "
                  onChange = {(e) => setSize(e.target.value)}
                />
                <p className="text-sm">L</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="size"
                  value="M"
                  className="radio radio-primary block "
                  onChange = {(e) => setSize(e.target.value)}
                />
                <p className="text-sm">M</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="size"
                  value="S"
                  className="radio radio-primary block "
                  onChange = {(e) => setSize(e.target.value)}
                />
                <p className="text-sm">S</p>
              </div>
            </div>
          </div>
          :<div className="p-4 m-6 bg-[#00C0FF] rounded bg-opacity-40">
            <p className="font-bold text-lg">大小固定</p>
          </div>
          }
          {props.ice?<div className="p-4 m-6 bg-[#00C0FF] rounded bg-opacity-40">
            <p className="font-bold text-lg">冰熱選擇</p>
            <p className="text-sm">選擇1個</p>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="ice"
                  value="正常冰"
                  className="radio radio-primary block "
                  onChange = {(e) => setIce(e.target.value)}
                />
                <p className="text-sm">正常冰(100%)</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="ice"
                  value="少冰"
                  className="radio radio-primary block "
                  onChange = {(e) => setIce(e.target.value)}
                />
                <p className="text-sm">少冰(70%)</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="ice"
                  value="微冰"
                  className="radio radio-primary block "
                  onChange = {(e) => setIce(e.target.value)}
                />
                <p className="text-sm">微冰(30%)</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="ice"
                  value="去冰"
                  className="radio radio-primary block "
                  onChange = {(e) => setIce(e.target.value)}
                />
                <p className="text-sm">去冰(0%)</p>
              </div>
              {props.hot?<div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="ice"
                  value="熱"
                  className="radio radio-primary block "
                  onChange = {(e) => setIce(e.target.value)}
                />
                <p className="text-sm">熱</p>
              </div>:false}
            </div>
          </div>
          :<div className="p-4 m-6 bg-[#00C0FF] rounded bg-opacity-40">
            <p className="font-bold text-lg">冰熱固定</p>
          </div>
          }
          {props.sugar?<div className="p-4 m-6 bg-[#00C0FF] rounded bg-opacity-40">
            <p className="font-bold text-lg">甜度選擇</p>
            <p className="text-sm">選擇1個</p>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="sugar"
                  value="全糖"
                  className="radio radio-primary block "
                  onChange = {(e) => setSugar(e.target.value)}
                />
                <p className="text-sm">全糖【10分糖】</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="sugar"
                  value="少糖"
                  className="radio radio-primary block "
                  onChange = {(e) => setSugar(e.target.value)}
                />
                <p className="text-sm">少糖【8分糖】</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="sugar"
                  value="半糖"
                  className="radio radio-primary block "
                  onChange = {(e) => setSugar(e.target.value)}
                />
                <p className="text-sm">半糖【5分糖】</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="sugar"
                  value="微糖"
                  className="radio radio-primary block "
                  onChange = {(e) => setSugar(e.target.value)}
                />
                <p className="text-sm">微糖【2分糖】</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="sugar"
                  value="去糖"
                  className="radio radio-primary block "
                  onChange = {(e) => setSugar(e.target.value)}
                />
                <p className="text-sm">去糖【0分糖】</p>
              </div>
            </div>
          </div>
          :<div className="p-4 m-6 bg-[#00C0FF] rounded bg-opacity-40">
            <p className="font-bold text-lg">甜度固定</p>
          </div>
          }
          <div className="flex">
            <button 
              className="bg-[#00C0FF] text-white text-lg w-full h-16"
              onClick={() => createShoppingCart()}
            >
              加入購物車
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default AddDrinkButton;
