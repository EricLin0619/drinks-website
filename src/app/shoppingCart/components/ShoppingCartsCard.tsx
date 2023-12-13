import React from "react";
import axios from "axios";
import { ShoppingCartType } from "../../../type";

function ShoppingCartsCard(props: ShoppingCartType) {
  const jwtToken = sessionStorage.getItem('jwt')
  function deleteShoppingCart(id) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios
      .delete(process.env.api + "/shopping-carts/" + id.toString())
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="flex mt-4 text-black">
      <p className="mr-2">1x</p>
      <div>
        <p>{props.drinkName}</p>
        <p>{props.sugar}</p>
        <p>{props.ice}</p>
        <p>{props.size}</p>
      </div>
      <p className="ml-auto">$ {props.price}</p>
      <button 
        className="text-black rounded-md btn mt-4 bg-red-400 border-none"
        onClick={() => deleteShoppingCart(props.drinkId)}
      >
        移除
      </button>
    </div>
    
  );
}
export default ShoppingCartsCard;