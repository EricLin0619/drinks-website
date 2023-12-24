"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SalesTable from "./components/salesTable";
import testData from "./testData.json";

function Page() {
  const [orders, setOrders] = useState([]);
  const jwtToken = sessionStorage.getItem("jwt");
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + jwtToken;
    axios
      .get(process.env.api + "/orders")
      .then((orderResponse) => {
        var orderIds = []
        var salesReport = []
        for(var i = 0; i < 12; i++){
          orderIds.push({
            year: i,
            month: i,
            orderId: []
          })
        }
        for(var i = 0; i < 12; i++){
          salesReport.push({
            year: i,
            month: i,
            drinkName: [],
            drinkPrice: [],
            drinksAmount: []
          })
        }
        orderResponse.data.forEach((order) => {
          var temp = new Date(parseInt(order.deliveryTime)*1000)
          var tempNow = Date.now()
          var thisYear = new Date(tempNow)
          if(temp.getFullYear()===thisYear.getFullYear()){
            var dTime = temp.getMonth()
            orderIds[dTime].year = temp.getFullYear()
            for(var j = 0; j < 12; j++){
              salesReport[j].year = temp.getFullYear()
            }
            orderIds[dTime].orderId.push(order.orderId)
          }
        });
        axios
          .get(process.env.api + "/getAllMenus")
          .then((response) => {
            axios.defaults.headers.common["Authorization"] = "Bearer " + jwtToken;
            axios
              .get(process.env.api + "/order-drinks")
              .then((orderResponse) => {
                for(var i = 0; i < response.data.length; i++){
                  var amount = [0,0,0,0,0,0,0,0,0,0,0,0];
                  orderResponse.data.forEach((order) => {
                    if(order.drinkId===response.data[i].drinkId){
                      for(var j = 0; j < 12; j++){
                        if(orderIds[j].orderId.includes(order.orderId)){
                          amount[j] += 1;
                        }
                      }
                    }
                  });
                  for(var j = 0; j < 12; j++){
                    salesReport[j].drinkName.push(response.data[i].drinkName)
                    salesReport[j].drinkPrice.push(response.data[i].drinkPrice)
                    salesReport[j].drinksAmount.push(amount[j])
                  }
                }
                setOrders(salesReport)
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
  }, []);
  return (
    <main className="grow">
      <section className="w-1/2 shadow-md rounded-md mt-10 p-6 mx-auto text-black">
        <p className="text-black text-3xl font-bold text-center">銷售紀錄</p>
        {orders.map((order) => {
          return <SalesTable year={order.year} month={order.month} drinkName={order.drinkName}drinkPrice={order.drinkPrice}drinksAmount={order.drinksAmount}/>;
        })}
      </section>
    </main>
  );
}

export default Page;
