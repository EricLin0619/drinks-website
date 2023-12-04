"use client";
import { RxCross2 } from "react-icons/rx";
import React from 'react'

function AddDrinkButton() {
  const handleButtonClick = async () => {
    if (document) {
      (
        document.getElementById("addDrink_modal") as HTMLFormElement
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
      <dialog id="addDrink_modal" className="modal">
        <div className="modal-box bg-white text-black p-0 h-full">
          <img
            src="https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/AS/chains/dudooeatschain/7613e8785413b6690605bc2fa49202e0.png??width=800"
            alt="drink_photo"
            className="w-full h-80"
          />
          <h3 className="font-bold text-2xl ml-6 mt-4">拾JOE芝麻歐蕾</h3>
          <h3 className="ml-6 text-base">．甜度冰塊可調整</h3>
          <h3 className="ml-6 mt-6 font-bold text-xl">$ 75</h3>
          <div
            className="divider mx-6 text-[#808080]"
          ></div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default AddDrinkButton;
