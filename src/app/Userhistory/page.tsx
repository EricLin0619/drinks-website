import testData from './testData.json';

function Page() {
  return (
    <main className="w-1/2 rounded-md shadow-md mt-10 mx-auto p-6">
      <p className="text-2xl font-bold text-black">歷史訂單</p>
      {testData.map((order, index) => {
        return (
          <div
            key={index}
            className="w-full rounded-md shadow-md mt-4 text-black p-6"
          >
            <p className="text-xl font-bold">
              {order.time}
            </p>
            <div className="grid grid-cols-1 gap-2 mt-2">
              {order.drinks.map((drink, index) => {
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
      })}
    </main>
  );
}

export default Page;
