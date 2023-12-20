"use client";
import React from "react";
import DrinkCard from "../../components/card/drinkCard";
import testData from "./testData.json";
import { useEffect, useState } from "react";
import axios from "axios";
function Page() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.api + "/getAllMenus")
      .then((response) => {
        setMenus(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <main className="grow">
      <section className="mx-auto w-2/3 grid grid-cols-2 justify-items-center gap-4 my-8">
        {menus.map((drink, index) => (
          <DrinkCard
            id={drink.id}
            uuid={drink.drinkId}
            size={drink.drinkSize}
            sugar={drink.sugar}
            ice={drink.ice}
            hot={drink.hot}
            key={index}
            name={drink.drinkName}
            price={drink.drinkPrice}
            imageUrl={drink.drinkPictureURL}
            description={drink.toppings}
          />
        ))}
      </section>
    </main>
  );
}

export default Page;
