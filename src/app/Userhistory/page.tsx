"use client"
import historyTestData from "./HistorytestData.json";
import currentTestData from "./CurrentOrderTestData.json";
import HistoryOrder from "./components/historyOrder";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CurrentOrder from "./components/currentOrder";

function Page() {
  const jwtToken = sessionStorage.getItem('jwt');
  const [ordersNow, setOrdersNow] = useState([]);
  const [ordersPast, setOrdersPast] = useState([]);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    var tempNow=[];
    var tempPast=[];
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .get(process.env.api + "/orders")
      .then((response) => {
        axios
          .get(process.env.api + "/getAllMenus")
          .then((response) => {
            setMenus(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
        response.data.forEach((order) => {
          if(order.orderStatus==="待處理"){
            tempNow.push([order.orderId, order.deliveryTime, order.id]);
          }
          else{
            tempPast.push([order.orderId, order.deliveryTime, order.id]);
          }
        });
        setOrdersNow(tempNow);
        setOrdersPast(tempPast);
      })
      .catch((error) => {
        console.log(error);
      });
  },[])

  return (
    <main className="w-1/2 rounded-md shadow-md mt-10 mx-auto p-6">
      <p className="text-2xl font-bold text-black">當前訂單</p>
      {ordersNow.map((order, index) => (
          <CurrentOrder
            orderId={order[0]}
            orderDeliveryTime={order[1]}
            id={order[2]}
            menu={menus}
          />
        ))}
      <p className="text-2xl font-bold text-black mt-10">歷史訂單</p>
      {ordersPast.map((order, index) => (
          <HistoryOrder
            orderId={order[0]}
            orderDeliveryTime={order[1]}
            id={order[2]}
            menu={menus}
          />
        ))}
    </main>
  );
}

export default Page;
