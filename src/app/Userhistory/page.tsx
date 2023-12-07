import historyTestData from "./HistorytestData.json";
import currentTestData from "./CurrentOrderTestData.json";
import HistoryCard from "./components/historyOrderCard";
import CurrentCard from "./components/currentOrderCard";

function Page() {
  return (
    <main className="w-1/2 rounded-md shadow-md mt-10 mx-auto p-6">
      <p className="text-2xl font-bold text-black">當前訂單</p>
      <CurrentCard time={currentTestData.time} drinks={currentTestData.drinks}/>
      <p className="text-2xl font-bold text-black mt-10">歷史訂單</p>
      {historyTestData.map((order, index) => {
        return (
          <HistoryCard key={index} time={order.time} drinks={order.drinks} />
        );
      })}
    </main>
  );
}

export default Page;
