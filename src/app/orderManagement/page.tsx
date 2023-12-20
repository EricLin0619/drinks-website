"use client"
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "./components/OrderCard";
import UnaccptedOrder from "./components/unaccptedOrder";
import UnsolvedOrder from "./components/unsolvedOrder";

function Page() {
  const jwtToken = sessionStorage.getItem('jwt');
  const [ordersUnAccept, setOrdersUnAccept] = useState([]);
  const [ordersUnSolved, setOrdersUnSolved] = useState([]);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    var tempUnAccept=[];
    var tempUnSolved=[];
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .get(process.env.api + "/orders")
      .then((orderResponse) => {
        axios
          .get(process.env.api + "/getAllMenus")
          .then((response) => {
            setMenus(response.data);
            orderResponse.data.forEach((order) => {
              if(order.orderStatus==="待處理"){
                tempUnAccept.push([order.orderId, order.deliveryTime, order.id, order.totalPrice, order.coupon, order.createBy, order.payMethod, order.userId]);
              }
              else if(order.orderStatus==="處理中"){
                tempUnSolved.push([order.orderId, order.deliveryTime, order.id, order.totalPrice, order.coupon, order.createBy, order.payMethod, order.userId]);
              }
            });
            setOrdersUnAccept(tempUnAccept);
            setOrdersUnSolved(tempUnSolved);
          })
          .catch((error) => {
            console.log(error);
          });
        
      })
      .catch((error) => {
        console.log(error);
      });
  },[])
  return (
    <main className="flex mx-auto w-full justify-center">
      <section className="w-1/3 shadow-md rounded-md mt-10 p-6 mr-8">
        <p className="text-2xl font-bold text-black mb-8">待處理</p>
        <div className="grid grid-cols-1 gap-10">
        {ordersUnAccept.map((order, index) => (
          <UnaccptedOrder
            orderId={order[0]}
            orderDeliveryTime={order[1]}
            id={order[2]}
            totalPrice={order[3]}
            couponCode={order[4]}
            userName={order[5]}
            payMethod={order[6]}
            userId={order[7]}
            menu={menus}
          />
        ))}
        </div>
      </section>
      <section className="w-1/3 shadow-md rounded-md mt-10 p-6">
        <p className="text-2xl font-bold text-black mb-8">處理中</p>
        <div className="grid grid-cols-1 gap-10">
        {ordersUnSolved.map((order, index) => (
          <UnsolvedOrder
            orderId={order[0]}
            orderDeliveryTime={order[1]}
            id={order[2]}
            totalPrice={order[3]}
            couponCode={order[4]}
            userName={order[5]}
            payMethod={order[6]}
            userId={order[7]}
            menu={menus}
          />
        ))}
        </div>
      </section>
    </main>
  );
}

export default Page;
