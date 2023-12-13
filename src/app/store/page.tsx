"use client";
import testCouponData from "./testCouponData.json";
import DrinkCard from "./components/drinkCard";
import CouponsCard from "./components/couponsCard";
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

  const [code,setcouponCode]=useState("");
  const [expireDatetime,setcouponExpireDatetime]=useState(0);
  const [usetimes,setcouponUseTimes]=useState("");
  const [discount,setcouponValue]=useState("");
  const [coupons, setCoupons] =useState([]);

  

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

  function createCoupon() {
    let uuid = uuidv4();
    if (!code || !expireDatetime || !usetimes || !discount) {
      alert("請填入所有優惠卷資訊!");
      return;
     }
    if(Number(usetimes)<=0 || Number(discount)<=0){
      alert("請填入正確優惠卷資訊!");
      return;
    }
    alert(expireDatetime);
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .post(process.env.api + '/coupons/createCoupon', {
            couponId: uuid,
            couponCode: code,
            couponExpireDateTime: expireDatetime,
            couponUseTimes: usetimes,
            couponValue: discount,
        })
      .then((response) => {
          console.log(response);
            setcouponCode("");
            setcouponExpireDatetime(0);
            setcouponUseTimes("");
            setcouponValue("");
                  
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
  
  useEffect(() =>{
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .get(process.env.api + "/coupons")
      .then(response => {
        setCoupons(response.data);
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
        {coupons.map((coupon, index) => (
          <CouponsCard
            key={index}
            id={coupon.id}
            uuid={coupon.couponId}
            code={coupon.couponCode}
            expireDatetime={coupon.couponExpireDatetime}
            usetimes={coupon.couponUseTimes}
            discount={coupon.couponValue}
            />
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
          onChange={(e)=>setcouponCode(e.target.value)}
        />
        <div className="label">
        <span className="label-text mt-4">優惠卷折扣</span>
        </div>
        <input
          type="number"
          placeholder=""
          className="bg-white p-2 border-2 rounded-md block w-full"
          onChange={(e)=>setcouponValue(e.target.value)}
        />
        <div className="label">
          <span className="label-text mt-4">優惠卷使用次數</span>
        </div>
        <input
          type="number"
          placeholder=""
          className="bg-white p-2 border-2 rounded-md block w-full"
          onChange={(e)=>setcouponUseTimes(e.target.value)}
        />
        <div className="label">
          <span className="label-text mt-4">優惠卷到期日</span>
        </div>
        <input
          type="datetime-local"
          step="1"
          placeholder=""
          className="bg-white p-2 border-2 rounded-md block w-full"
          onChange={(e)=>setcouponExpireDatetime(e.target.valueAsNumber)}
        />
        <button className="text-black rounded-md btn mt-4 bg-red-400 border-none"
          onClick={() => {createCoupon()}}>
          新增
        </button>
      </section>
    </main>
  );
}

export default Page;
