import { CurrentOrderType } from "@/type";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CurrentOrderCard from "./currentOrderCard";
function CurrentOrder(props: CurrentOrderType) {
  const jwtToken = sessionStorage.getItem('jwt');
  const [shoppingCarts, setShoppingCarts] = useState([]);
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
    <div className="w-full rounded-md shadow-md mt-4 text-black p-6">
      <p className="text-xl font-bold">{orderDeliveryTime.getFullYear() + "年" + (orderDeliveryTime.getMonth()+1) + "月" + orderDeliveryTime.getDate() + "日" + orderDeliveryTime.getUTCHours() + "點" + orderDeliveryTime.getMinutes() + "分" }</p>
      {shoppingCarts.map((drink, index) => (
          <CurrentOrderCard
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

      <button 
      className="btn btn-success w-full mt-6"
      onClick={() => updateOrderStatus()}
      >完成訂單</button>
    </div>
  );
}

export default CurrentOrder;
