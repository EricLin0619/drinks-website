import SalesTable from "./components/salesTable";
import testData from "./testData.json";

function Page() {
  return (
    <main className="grow">
      <section className="w-1/2 shadow-md rounded-md mt-10 p-6 mx-auto text-black">
        <p className="text-black text-3xl font-bold text-center">銷售紀錄</p>
        {testData.map((item) => {
          return <SalesTable time={item.time} drinks={item.drinks} />;
        })}
      </section>
    </main>
  );
}

export default Page;
