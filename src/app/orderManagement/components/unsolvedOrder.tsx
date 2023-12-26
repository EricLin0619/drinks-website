import { AdminOrderType } from "@/type";
import OrderCard from "./OrderCard";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function unsolvedOrder(props: AdminOrderType) {
  const jwtToken = sessionStorage.getItem('jwt');
  const [shoppingCarts, setShoppingCarts] = useState([]);
  const [drinkPrice, setDrinkPrice] = useState(0);
  const [userPhone, setUserPhone] = useState("");
  const [payMethod, setPayMethod] = useState("");
  const orderDeliveryTime = new Date(props.orderDeliveryTime*1000);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .get(process.env.api + "/userOrders/"+props.orderId)
      .then((response) => {
        setShoppingCarts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[])
  useEffect(() => {
    if(props.payMethod==="0"){
      setPayMethod("外帶");
    }
    else{
      setPayMethod("外送");
    }
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .get(process.env.api + "/user-infos")
      .then((response) => {
        response.data.forEach((user) => {
          if(user.userId === props.userId){
            setUserPhone(user.phoneNumber);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },[])
  useEffect(() => {
    var tempTotalPrice = 0;
    props.menu.forEach((drinks) => {
      shoppingCarts.forEach((drink) => {
        if(drinks.drinkId === drink.drinkId){
          tempTotalPrice +=drinks.drinkPrice;
        }
      });
    });
    setDrinkPrice(tempTotalPrice);
  },[shoppingCarts])

  function updateOrderStatus() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .get(process.env.api + "/orders/" + props.id)
      .then((response) => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
        axios
          .put(process.env.api + "/orders/" + props.id, {
            coupon: response.data.coupon,
            createBy: response.data.createBy,
            createDatetime: response.data.createDatetime,
            deliveryLocation: response.data.deliveryLocation,
            deliveryTime: response.data.deliveryTime,
            orderId: response.data.orderId,
            orderStatus: "完成",
            id: props.id,
            payMethod: response.data.payMethod,
            totalPrice: response.data.totalPrice,
            userId: response.data.userId
          })
          .then((response) => {
            console.log(response);
            location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
        })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="w-full shadow-md rounded-md p-6 text-black">
      <div className="flex justify-between mb-2">
        <p>顧客姓名:</p>
        <p>{props.userName}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>顧客電話:</p>
        <p>{userPhone}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>取貨方式:</p>
        <p>{payMethod}</p>
      </div>
      <div className="flex">
        <p>訂單內容：</p>
        <div>
        {shoppingCarts.map((drink, index) => (
          <OrderCard
            id={drink.id}
            time={drink.deliveryDatetime}
            drinkId={drink.drinkId}
            size={drink.drinkSize}
            sugar={drink.sugar}
            ice={drink.ice}
            key={index}
            drinkPrice={drink.drinkPrice}
            menu={props.menu}
          />
        ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-8">
        <p className="text-1xl font-bold">優惠碼{props.couponCode}</p>
        <p className="text-1xl font-bold">${props.totalPrice - drinkPrice}</p>
      </div>
      <div className="flex items-center justify-between mt-8">
        <p className="text-2xl font-bold">總計</p>
        <p className="text-2xl font-bold">${drinkPrice}</p>
      </div>
      <button 
        className="btn btn-info w-full mt-8"
        onClick={() => updateOrderStatus()}
      >完成訂單</button>
    </div>
  );
}

export default unsolvedOrder;
