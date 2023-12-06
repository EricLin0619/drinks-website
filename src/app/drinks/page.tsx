import React from "react";
import DrinkCard from "../../components/card/drinkCard";
import testData from "./testData.json";
function Page() {
  return (
    <section className="mx-auto w-2/3 grid grid-cols-2 justify-items-center gap-4 my-8">
      {testData.map((drink, index) => (
        <DrinkCard
          key={index}
          name={drink.name}
          price={drink.price}
          imageUrl={drink.imageUrl}
          description={drink.description}
        />
      ))}
    </section>
  );
}

export default Page;
