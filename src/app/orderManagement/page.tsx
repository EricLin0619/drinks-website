import UnaccptedOrderCard from "./components/unaccptedOrderCard";
import UnsolvedOrderCard from "./components/unsolvedOrderCard";
import unacceptedOrderTestData from "./unacceptedOrderTestData.json";
import unsolvedOrderTestData from "./unsolvedOrderTestData.json";

function Page() {
  return (
    <main className="flex mx-auto w-full justify-center">
      <section className="w-1/3 shadow-md rounded-md mt-10 p-6 mr-8">
        <p className="text-2xl font-bold text-black mb-8">未接受</p>
        <div className="grid grid-cols-1 gap-10">
          {unacceptedOrderTestData.map((order, index) => {
            return (
              <UnaccptedOrderCard
                key={index}
                orderNumber={order.orderNumber}
                customerName={order.customerName}
                phone={order.customerPhone}
                method={order.method}
                content={order.content}
              />
            );
          })}
        </div>
      </section>
      <section className="w-1/3 shadow-md rounded-md mt-10 p-6">
        <p className="text-2xl font-bold text-black mb-8">處理中</p>
        <div className="grid grid-cols-1 gap-10">
          {unsolvedOrderTestData.map((order, index) => {
            return (
              <UnsolvedOrderCard
                key={index}
                orderNumber={order.orderNumber}
                customerName={order.customerName}
                phone={order.customerPhone}
                method={order.method}
                content={order.content}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Page;
