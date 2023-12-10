"use client";
import testCouponData from "./testCouponData.json";
import DrinkCard from "./components/drinkCard";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {v4 as uuidv4} from 'uuid';
import { Console } from "console";

function Page() {
  const jwtToken = sessionStorage.getItem('jwt')
  const [menus, setMenus] = useState([]);
  const [id, setId] = useState("");
  const [size, setSize] = useState(false);
  const [ice, setIce] = useState(false);
  const [hot, setHot] = useState(false);
  const [sugar, setSugar] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  

  const onIceOptionChange = e => {
    setIce(e.target.value)
  }
  const onHotOptionChange = e => {
    setHot(e.target.value)
  }
  const onSugarOptionChange = e => {
    setSugar(e.target.value)
  }
  const onSizeOptionChange = e => {
    setSize(e.target.value)
  }

  function createMenu() {
    let uuid = uuidv4();
    if (!name) {
      return alert("username is empty");
    }
    if (!price) {
      return alert("password is empty");
    }
    if (!imageUrl) {
      return alert("username is empty");
    }
    if (!description) {
      return alert("password is empty");
    }
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .post(process.env.api + "/menus", {
        drinkName: name,
        drinkId: uuid,
        drinkPictureURL: imageUrl,
        drinkPrice: price,
        drinkSize: size,
        hot: hot,
        sugar: sugar,
        ice: ice,
        toppings: description,
      })
      .then((response) => {
        console.log(response);
        setName("");
        setPrice("");
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
  
  useEffect(() => {
    axios
      .get(process.env.api + "/getAllMenus")
      .then((response) => {
        setMenus(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[])
  return (
    <main className="flex mx-auto w-full justify-center">
      <section className="w-1/3 shadow-md rounded-md mt-10 p-6 mr-8">
        <p className="text-2xl font-bold text-black mb-8">飲品</p>

        {menus.map((drink, index) => (
          <DrinkCard
            id={drink.id}
            uuid={drink.drinkId}
            size={drink.drinkSize}
            sugar={drink.sugar}
            ice={drink.ice}
            hot={drink.hot}
            key={index}
            name={drink.drinkName}
            price={drink.drinkPrice}
            imageUrl={drink.drinkPictureURL}
            description={drink.toppings}
          />
        ))}

        <p className="text-2xl font-bold text-black mb-8">優惠卷</p>
        {testCouponData.map((coupon, index) => (
          <div className="flex items-center justify-between w-full shadow-md rounded-md p-6">
            <img
              src="./coupon.png"
              alt="coupon"
              className="w-12 h-12 rotate-90"
            />
            <div className="text-black">
              <p className="font-bold">{coupon.name}</p>
              <p>到期日 {coupon.duedate}</p>
              <p>優惠卷代碼 {coupon.code}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="w-1/3 shadow-md rounded-md mt-10 p-6">
        <p className="text-2xl font-bold text-black">新增飲品</p>
        <div className="label">
          <span className="label-text mt-4">飲品名字</span>
        </div>
        <input
          type="text"
          placeholder="林冠廷"
          className="bg-white p-2 border-2 rounded-md block w-full"
          onChange = {(e) => setName(e.target.value)}
        />
        <div className="label">
          <span className="label-text mt-4">飲品圖片</span>
        </div>
        <input
          type="text"
          placeholder="url"
          className="bg-white p-2 border-2 rounded-md block w-full"
          onChange = {(e) => setImageUrl(e.target.value)}
        />
        <div className="label">
          <span className="label-text mt-4">飲品價格</span>
        </div>
        <input
          type="text"
          placeholder="75"
          className="bg-white p-2 border-2 rounded-md block w-full"
          onChange = {(e) => setPrice(e.target.value)}
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
        <div className="label">
          <span className="label-text mt-4">飲品敘述</span>
        </div>
        <input
          type="text"
          placeholder="【L杯】總糖量59公克．總熱量366大卡【XL杯】總糖量75公克．總熱量455大卡∣咖啡因總含量：黃101-200mg/杯∣茶葉原產地：緬甸、台灣"
          className="bg-white p-2 border-2 rounded-md block w-full"
          onChange = {(e) => setDescription(e.target.value)}
        />
        <button 
          className="text-black rounded-md btn mt-4 bg-red-400 border-none"
          onClick={() => createMenu()}
        >
          新增
        </button>
        <p className="text-2xl font-bold text-black mt-10">新增優惠卷</p>
        <div className="label">
          <span className="label-text mt-4">優惠卷代碼</span>
        </div>
        <input
          type="text"
          placeholder=""
          className="bg-white p-2 border-2 rounded-md block w-full"
        />
        <button 
          className="text-black rounded-md btn mt-4 bg-red-400 border-none"
        >
          新增
        </button>
      </section>
    </main>
  );
}

export default Page;
