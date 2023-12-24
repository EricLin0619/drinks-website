"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ReportType } from "../../../type";

function SalesTable(props: ReportType) {
  const [menus, setMenus] = useState([]);
  const [first, setFirst] = useState(true);
  const [price, setPrice] = useState("");
  const jwtToken = sessionStorage.getItem("jwt");
  useEffect(() => {
    var tempMenus = []
    for(var i = 0; i < props.drinkName.length; i++){
      tempMenus.push({
        drinkName: props.drinkName[i],
        drinkPrice: props.drinkPrice[i],
        drinksAmount: props.drinksAmount[i]
      })
    }
    setMenus(tempMenus)
  }, []);
  let avenue = 0;
  return (
    <div className="rounded-md shadow-md p-6">
      <p className="text-black font-bold text-xl mb-2">{props.year}/{props.month+1}</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-black text-lg">
              <th>品名</th>
              <th>價錢</th>
              <th>數量</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menus.map((item) => {
              avenue += item.drinkPrice * item.drinksAmount
              return (
                <tr>
                  <td>{item.drinkName}</td>
                  <td>{item.drinkPrice}</td>
                  <td>{item.drinksAmount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex">
        <p className="text-black font-bold mt-4 text-xl">總計：</p>
        <p className="text-black font-bold mt-4 text-xl ml-auto">$ {avenue}</p>
      </div>
    </div>
  );
}

export default SalesTable;
