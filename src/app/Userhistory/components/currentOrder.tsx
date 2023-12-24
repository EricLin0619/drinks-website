import { OrderType } from "@/type";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CurrentOrderCard from "./currentOrderCard";
function CurrentOrder(props: OrderType) {
  const jwtToken = sessionStorage.getItem('jwt');
  const [shoppingCarts, setShoppingCarts] = useState([]);
  const [drinkPrice, setDrinkPrice] = useState(0);
  const [userUuid, setUserUuid] = useState("");
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
  function deleteOrder() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .get(process.env.api + "/getUserInfo")
      .then((response) => {
        setUserUuid(response.data.userId);
        axios
          .post(process.env.api + "/customerDeleteOrder",{
            orderId: props.orderId,
            userId: response.data.userId
          })
          .then((response) => {
            alert("成功刪除")
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
      <div className="flex items-center justify-between mt-8">
        <p className="text-1xl font-bold">優惠碼{props.couponCode}</p>
        <p className="text-1xl font-bold">${props.totalPrice - drinkPrice}</p>
      </div>
      <div className="flex items-center justify-between mt-8">
        <p className="text-2xl font-bold">總計</p>
        <p className="text-2xl font-bold">${props.totalPrice}</p>
      </div>
      <div className="flex items-center justify-between mt-8">
        <button className="btn btn-disabled mt-6">{props.orderStatus}</button>
        { props.orderStatus==="待處理" ? 
          <>
            <button className="btn btn-success mt-6"onClick={() => deleteOrder()}>取消訂單</button>
          </>
          :
          <>
            <button className="btn btn-disabled mt-6"onClick={() => deleteOrder()}>取消訂單</button>
          </>
        }
        
      </div>
    </div>
  );
}

export default CurrentOrder;
