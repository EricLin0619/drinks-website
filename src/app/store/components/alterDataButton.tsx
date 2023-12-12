"use client";
import { AlterDrinksType } from "@/type";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function AlterDataButton(props: AlterDrinksType) {
  const jwtToken = sessionStorage.getItem('jwt')
  const [menus, setMenus] = useState([]);
  const [id, setId] = useState(0);
  const [size, setSize] = useState(props.size);
  const [ice, setIce] = useState(props.ice);
  const [hot, setHot] = useState(props.hot);
  const [sugar, setSugar] = useState(props.sugar);
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const [imageUrl, setImageUrl] = useState(props.imageUrl);
  const [description, setDescription] = useState(props.description);
  
  const handleButtonClick = async () => {
    if (document) {
      (
        document.getElementById(`AlterDrink${props.name}`) as HTMLFormElement
      ).showModal();
    }
  };

  function updateMenu(props: AlterDrinksType) {
    if (!name) {
      setName(props.name);
    }
    if (!price) {
      setPrice(props.price);
    }
    if (!imageUrl) {
      setImageUrl(props.imageUrl);
    }
    if (!description) {
      setDescription(props.description);
    }
    console.log(props.id);
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .put(process.env.api + "/menus/" + props.id, {
        drinkName: name,
        drinkId: props.uuid,
        drinkPictureURL: imageUrl,
        drinkPrice: price,
        drinkSize: size,
        hot: hot,
        sugar: sugar,
        ice: ice,
        id: props.id,
        toppings: description,
      })
      .then((response) => {
        console.log(response);
        setName("");
        setPrice(0);
        setImageUrl("");
        setDescription("");
        setIce(false);
        setHot(false);
        setSugar(false);
        setSize(false);
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
      <dialog id={`AlterDrink${props.name}`} className="modal">
        <div className="modal-box bg-white text-black p-10">
          <input
            type="text"
            placeholder={props.name}
            className="bg-white p-2 border-2 rounded-md block w-full "
            onChange = {(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder={props.price.toString()}
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
            onChange = {(e) => setPrice(parseInt(e.target.value))}
          />
          <input
            type="text"
            placeholder={props.imageUrl}
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
            onChange = {(e) => setImageUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder={props.description}
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
            onChange = {(e) => setDescription(e.target.value)}
          />
          <div className="rounded-md shadow-md p-6 mt-8">
            <p className="text-2xl font-bold text-black">冰塊</p>
            <div className="flex items-center mt-8 justify-between">
              <input
                type="radio"
                name="ice"
                className="radio radio-primary block "
                onChange = {() => setIce(true)}
              />
              <p className="text-black">可調整</p>
              <input
                type="radio"
                name="ice"
                className="radio radio-primary block "
                onChange = {() => setIce(false)}
              />
              <p className="text-black">不可調整</p>
            </div>
          </div>
          <div className="rounded-md shadow-md p-6 mt-8">
            <p className="text-2xl font-bold text-black">甜度</p>
            <div className="flex items-center mt-8 justify-between">
              <input
                type="radio"
                name="sugar"
                className="radio radio-primary block "
                onChange = {() => setSugar(true)}
              />
              <p className="text-black">可調整</p>
              <input
                type="radio"
                name="sugar"
                className="radio radio-primary block "
                onChange = {() => setSugar(false)}
              />
              <p className="text-black">不可調整</p>
            </div>
          </div>
          <div className="rounded-md shadow-md p-6 mt-8">
            <p className="text-2xl font-bold text-black">熱飲</p>
            <div className="flex items-center mt-8 justify-between">
              <input
                type="radio"
                name="hot"
                className="radio radio-primary block "
                onChange = {() => setHot(true)}
              />
              <p className="text-black">有</p>
              <input
                type="radio"
                name="hot"
                className="radio radio-primary block "
                onChange = {() => setHot(false)}
              />
              <p className="text-black">無</p>
            </div>
          </div>
          <div className="rounded-md shadow-md p-6 mt-8">
            <p className="text-2xl font-bold text-black">大小</p>
            <div className="flex items-center mt-8 justify-between">
              <input
                type="radio"
                name="size"
                className="radio radio-primary block "
                onChange = {() => setSize(true)}
              />
              <p className="text-black">可調整</p>
              <input
                type="radio"
                name="size"
                className="radio radio-primary block "
                onChange = {() => setSize(false)}
              />
              <p className="text-black">不可調整</p>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button 
              className="btn btn-warning mt-4 w-full"
              onClick={() => updateMenu(props)}
            >儲存</button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default AlterDataButton;
