import React from "react";
import { DrinkCardType } from "../../../type";
import AlterDataButton from "./alterDataButton";

function DrinkCard(props: DrinkCardType) {
  
  return (
    <div className="flex items-center mb-8">
      <div className="mr-4">
        <p className="text-black font-bold text-xl">{props.name}</p>
        <p className="mb-2">{props.description}</p>
        <p className="text-black font-bold ">{`$${props.price}`}</p>
        <AlterDataButton name={props.name} price={props.price} imageUrl={props.imageUrl} description={props.description}/>
        <span className="text-red-400 font-bold cursor-pointer">刪除飲品</span>
      </div>
      <img src={props.imageUrl} className="w-1/4 rounded" alt={props.name} />
    </div>
  );
}

export default DrinkCard;
