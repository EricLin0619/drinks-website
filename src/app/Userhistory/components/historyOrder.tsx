import { HistoryOrderCardType } from "@/type";
import { HistoryOrderType } from "@/type";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import HistoryOrderCard from "./historyOrderCard";

function HistoryOrder(props: HistoryOrderType) {
  const jwtToken = sessionStorage.getItem('jwt');
  const orderDeliveryTime = new Date(props.orderDeliveryTime*1000);
  const [shoppingCarts, setShoppingCarts] = useState([]);
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    var temp=false;
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
    </div>
  );
}

export default HistoryOrder;