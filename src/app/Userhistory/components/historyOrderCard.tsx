import { HistoryOrderCardType } from "@/type";

function HistoryCard(props: HistoryOrderCardType) {
    return ( 
        <div
            className="w-full rounded-md shadow-md mt-4 text-black p-6"
          >
            <p className="text-xl font-bold">
              {props.time}
            </p>
            <div className="grid grid-cols-1 gap-2 mt-2">
              {props.drinks.map((drink, index) => {
                return (
                  <div key={index} className="flex">
                    <p>{drink.quantity}x</p>
                    <div className="ml-2">
                      <p>{drink.name}</p>
                      <p className="text-slate-400">{drink.sugar}{drink.ice}</p>
                    </div>
                    <p className="ml-auto">$ {drink.price}</p>
                  </div>
                );
              })}
            </div>
          </div>
     );
}

export default HistoryCard;