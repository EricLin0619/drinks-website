import React from "react";
import { DrinkCardType } from "../../../type";
import AlterDataButton from "./alterDataButton";
import axios from "axios";

function DrinkCard(props: DrinkCardType) {
  const jwtToken = sessionStorage.getItem('jwt')
  function deleteMenu(id) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .delete(process.env.api + "/menus/" + id)
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="flex items-center mb-8">
      <div className="mr-4">
        <p className="text-black font-bold text-xl">{props.name}</p>
        <p className="mb-2">{props.description}</p>
        <p className="text-black font-bold ">{`$${props.price}`}</p>
        <AlterDataButton 
          name={props.name} 
          price={props.price} 
          imageUrl={props.imageUrl} 
          description={props.description}
          id={props.id} 
          uuid={props.uuid} 
          sugar={props.sugar} 
          ice={props.ice}
          hot={props.hot} 
          size={props.size}
        />
        <span 
          className="text-red-400 font-bold cursor-pointer"
          onClick={() => {
            deleteMenu(props.id);
          }}
        >
          刪除飲品
        </span>
      </div>
      <img src={props.imageUrl} className="w-1/4 rounded" alt={props.name} />
    </div>
  );
}

export default DrinkCard;
