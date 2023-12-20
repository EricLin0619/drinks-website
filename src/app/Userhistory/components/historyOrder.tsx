import { OrderType } from "@/type";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import HistoryOrderCard from "./historyOrderCard";

function HistoryOrder(props: OrderType) {
  const jwtToken = sessionStorage.getItem('jwt');
  const orderDeliveryTime = new Date(props.orderDeliveryTime*1000);
  const [shoppingCarts, setShoppingCarts] = useState([]);
  const [drinkPrice, setDrinkPrice] = useState(0);
  const [menus, setMenus] = useState([]);
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

  return (
    <div className="w-full rounded-md shadow-md mt-4 text-black p-6">
      <p className="text-xl font-bold">{orderDeliveryTime.getFullYear() + "年" + (orderDeliveryTime.getMonth()+1) + "月" + orderDeliveryTime.getDate() + "日" + orderDeliveryTime.getUTCHours() + "點" + orderDeliveryTime.getMinutes() + "分" }</p>
      {shoppingCarts.map((drink, index) => (
          <HistoryOrderCard
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
      <div className="flex items-center justify-between mt-8">
        <p className="text-1xl font-bold">優惠碼{props.couponCode}</p>
        <p className="text-1xl font-bold">${props.totalPrice - drinkPrice}</p>
      </div>
      <div className="flex items-center justify-between mt-8">
        <p className="text-2xl font-bold">總計</p>
        <p className="text-2xl font-bold">${props.totalPrice}</p>
      </div>
    </div>
  );
}

export default HistoryOrder;