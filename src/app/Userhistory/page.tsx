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
        .get(process.env.api + "/getUserInfo")
        .then((response) => {
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
          axios
            .post(process.env.api + "/customerReadOrder", {
              orderStatus: "",
              userId: response.data.userId
            })
            .then((orderResponse) => {
              axios
                .get(process.env.api + "/getAllMenus")
                .then((response) => {
                  setMenus(response.data);
                  orderResponse.data.forEach((order) => {
                    if(order.order.orderStatus==="待處理"){
                      tempNow.push([order.order.orderId, order.order.deliveryTime, order.order.id, order.order.totalPrice, order.order.coupon, order.order.orderStatus]);
                    }
                    else if(order.order.orderStatus==="完成"){
                      tempPast.push([order.order.orderId, order.order.deliveryTime, order.order.id, order.order.totalPrice, order.order.coupon, order.order.orderStatus]);
                    }
                  });
                  setOrdersNow(tempNow);
                  setOrdersPast(tempPast);
                })
                .catch((error) => {
                  console.log(error);
                });
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
    <main className="grow w-1/2 rounded-md shadow-md mt-10 mx-auto p-6">
      <p className="text-2xl font-bold text-black">當前訂單</p>
      {ordersNow.map((order, index) => (
          <CurrentOrder
            orderId={order[0]}
            orderDeliveryTime={order[1]}
            id={order[2]}
            totalPrice={order[3]}
            couponCode={order[4]}
            orderStatus={order[5]}
            menu={menus}
          />
        ))}
      <p className="text-2xl font-bold text-black mt-10">歷史訂單</p>
      {ordersPast.map((order, index) => (
          <HistoryOrder
            orderId={order[0]}
            orderDeliveryTime={order[1]}
            id={order[2]}
            totalPrice={order[3]}
            couponCode={order[4]}
            orderStatus={order[5]}
            menu={menus}
          />
        ))}
    </main>
  );
}

export default Page;
