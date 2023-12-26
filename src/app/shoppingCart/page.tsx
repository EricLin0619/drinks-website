"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import ShoppingCartsCard from "./components/ShoppingCartsCard";
import axios from "axios";

function Page() {
  const router = useRouter();
  const jwtToken = sessionStorage.getItem('jwt');
  const [shoppingCarts, setShoppingCarts] = useState([]);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userUuid, setUserUuid] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [coupon, setCoupon] = useState("");
  const [coupons, setCoupons] = useState([]);
  const [couponCheck, setCouponCheck] = useState("無此優惠碼");
  const [payMethod, setPayMethod] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryDatetime,setDeliveryDatetime]=useState(0);
  
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .get(process.env.api + "/getUserInfo")
      .then((response) => {
        setUserName(response.data.userName);
        setUserPhone(response.data.userPhone);
        setUserEmail(response.data.userEmail);
        setUserUuid(response.data.userId);
        axios
          .get(process.env.api + "/getUserShoppingCart/"+response.data.userId)
          .then((response) => {
            setShoppingCarts(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
          })
      .catch((error) => {
        console.log(error);
      });

  },[])
  useEffect(() => {
    var temp=false;
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .get(process.env.api + "/coupons")
      .then((response) => {
        setCoupons(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  },[coupon])
    useEffect(() => {
      var temp=0;
      shoppingCarts.forEach((shoppingCart) => temp+=shoppingCart.drinkPrice);
      setTotalPrice(temp);
  },[shoppingCarts])
    useEffect(() => {
      var temp=false;
      coupons.forEach((coupons) => {if(coupons.couponCode===coupon) temp = true;});
      if(temp||coupon===""){
        setCouponCheck("")
      }
      else{
        setCouponCheck("無此優惠碼")
      }
  },[coupon])

  function createOrder() {
    if (coupon==="無此優惠碼") {
      return alert("coupon not found");
    }
    if (!deliveryLocation) {
      return alert("deliverylocation is empty");
    }
    if (deliveryDatetime<Date.now()) {
      return alert("deliveryDatetime is too early");
    }
    if (!payMethod) {
      return alert("paymethod is empty");
    }
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .post(process.env.api + "/commitOrder", {
        couponCode: coupon,
        deliveryLocation: "桃園市中壢區"+deliveryLocation,
        deliveryTime: deliveryDatetime/1000,
        payMethod: payMethod,
        userId: userUuid,
      })
      .then((response) => {
        console.log(response);
        setCoupon("");
        setDeliveryDatetime(0);
        setPayMethod("");
        setDeliveryLocation("");
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <main className="w-2/3 mx-auto flex mt-10">
      <section className="w-1/2 mr-4">
        <div className="rounded-md shadow-md p-6">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-black">送餐地址</p>
          </div>
          <div className="flex items-center justify-between">
          <p className="text-1xl font-bold text-black">桃園市中壢區</p>
            <input
              type="text"
              name="location"
              placeholder="輸入中壢區以後的地址"
              className="p-2 rounded-md bg-white shadow-md mt-3 text-black"
              onChange = {(e) => setDeliveryLocation(e.target.value)}
            />
          </div>
          <p className="text-sm mt-3">
            外送備註 -
            地標/建築物/社區大樓管理室。如您的送餐地址在較大的公共場合
            例如公園、河堤、疏洪道等，請務必於訂餐後留意手機訊息及電話
          </p>
        </div>
        <div className="rounded-md shadow-md p-6 mt-8">
          <p className="text-2xl font-bold text-black">送達時間</p>
          <input
            type="datetime-local"
            step="1"
            placeholder=""
            className="bg-white p-2 border-2 rounded-md block w-full mt-3"
            onChange={(e)=>setDeliveryDatetime(e.target.valueAsNumber)}
          />
        </div>
        <div className="rounded-md shadow-md p-6 mt-8">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-black">個人資料</p>
            <p className="text-red-400 font-bold cursor-pointer" onClick={()=>{router.push("./userData")}}>
              更改資料
            </p>
          </div>
          <p className="mt-8">{userName}</p>
          <p>{userPhone}</p>
          <p>{userEmail}</p>
        </div>
        <div className="rounded-md shadow-md p-6 mt-8">
          <p className="text-2xl font-bold text-black">優惠卷</p>
          <input
            type="text"
            name="coupon"
            placeholder="輸入優惠卷代碼"
            className="p-2 rounded-md bg-white shadow-md mt-4 text-black"
            onChange = {(e) => setCoupon(e.target.value)}
          />
          <span className="text-red-400 font-bold ml-4">{couponCheck}</span>
        </div>
        <div className="rounded-md shadow-md p-6 mt-8">
          <p className="text-2xl font-bold text-black">取貨方式</p>
          <div className="flex items-center mt-8 justify-between">
            <input
              type="radio"
              name="payment"
              value="0"
              className="radio radio-primary block "
              onChange = {(e) => setPayMethod(e.target.value)}
            />
            <p className="text-black">外帶</p>
          </div>
          <div className="flex items-center mt-4 justify-between">
            <input
              type="radio"
              name="payment"
              value="1"
              className="radio radio-primary block "
              onChange = {(e) => setPayMethod(e.target.value)}
            />
            <p className="text-black">外送</p>
          </div>
        </div>
        <button className="btn btn-info mt-8 w-full text-center"
        onClick={() => {createOrder()}}>
          完成並付款
        </button>
      </section>
      <section className="w-1/2 shadow-md rounded-md p-6 flex flex-col">
        <div className="">
          <p className="text-black text-2xl font-bold">您的訂單</p>
          <p>ching shin fu chuan (Zhongli National Branch)</p>
          {shoppingCarts.map((shoppingCart, index) => (
            <ShoppingCartsCard
              drinkName={shoppingCart.drinkName}
              drinkId={shoppingCart.shoppingCart.id}
              uuid={shoppingCart.shoppingCart.drinkId}
              size={shoppingCart.shoppingCart.drinkSize}
              sugar={shoppingCart.shoppingCart.sugar}
              ice={shoppingCart.shoppingCart.ice}
              key={index}
              price={shoppingCart.drinkPrice}
              userId={shoppingCart.shoppingCart.userId}
            />
          ))}
          <div className="flex justify-between mt-10">
            <p className="text-2xl text-black font-bold">總計</p>
            <p className="text-2xl text-black font-bold">${totalPrice}</p>
          </div>
        </div>
        <div className="flex-grow w-auto h-auto invisible"></div>
      </section>
    </main>
  );
}

export default Page;
