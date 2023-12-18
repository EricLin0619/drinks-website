import React from "react";
import axios from "axios";
import { HistoryOrderCardType } from "../../../type";
import { useEffect, useState } from "react";

function HistoryOrderCard(props: HistoryOrderCardType) {
  const jwtToken = sessionStorage.getItem('jwt')
  const [drinkName, setDrinkName] = useState("");
  const [drinkPrice, setDrinkPrice] = useState("");
  useEffect(() => {
    props.menu.forEach((drink) => {
      if(drink.drinkId === props.drinkId){
        setDrinkName(drink.drinkName);
        setDrinkPrice(drink.drinkPrice);
      }
    });
  },[])
  return (
    <div className="flex">
      <p>1x</p>
      <div className="ml-2">
        <p>{drinkName}</p>
        <p className="text-slate-400">
          {props.sugar}
          {props.ice}
        </p>
      </div>
      <p className="ml-auto">$ {drinkPrice}</p>
    </div>
  );
}
export default HistoryOrderCard;