"use client";
import { RxCross2 } from "react-icons/rx";
import React from "react";
import { AddDrinkButtonType } from "../../type";

function AddDrinkButton(props: AddDrinkButtonType) {
  const handleButtonClick = async () => {
    if (document) {
      (
        document.getElementById(props.name) as HTMLFormElement
      ).showModal();
    }
  };
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
          <h3 className="ml-6 text-base">．甜度冰塊可調整</h3>
          <h3 className="ml-6 mt-6 font-bold text-xl">$ 75</h3>
          <div className="divider mx-6 text-[#808080]"></div>
          <div className="p-4 m-6 bg-[#00C0FF] rounded bg-opacity-40">
            <p className="font-bold text-lg">冰熱選擇</p>
            <p className="text-sm">選擇1個</p>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="ice"
                  className="radio radio-primary block "
                />
                <p className="text-sm">正常冰(100%)</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="ice"
                  className="radio radio-primary block "
                />
                <p className="text-sm">少冰(70%)</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="ice"
                  className="radio radio-primary block "
                />
                <p className="text-sm">微冰(30%)</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="ice"
                  className="radio radio-primary block "
                />
                <p className="text-sm">去冰(0%)</p>
              </div>
            </div>
          </div>
          <div className="p-4 m-6 bg-[#00C0FF] rounded bg-opacity-40">
            <p className="font-bold text-lg">甜度選擇</p>
            <p className="text-sm">選擇1個</p>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="sugar"
                  className="radio radio-primary block "
                />
                <p className="text-sm">全糖【10分糖】</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="sugar"
                  className="radio radio-primary block "
                />
                <p className="text-sm">少糖【8分糖】</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="sugar"
                  className="radio radio-primary block "
                />
                <p className="text-sm">半糖【5分糖】</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="sugar"
                  className="radio radio-primary block "
                />
                <p className="text-sm">微糖【2分糖】</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <input
                  type="radio"
                  name="sugar"
                  className="radio radio-primary block "
                />
                <p className="text-sm">去糖【0分糖】</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <button className="bg-[#00C0FF] text-white text-lg w-full h-16">
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
