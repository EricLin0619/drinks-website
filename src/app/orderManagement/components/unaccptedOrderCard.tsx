import { UnaccptedOrderCardType } from "@/type";

function UnaccptedOrderCard(props: UnaccptedOrderCardType) {
  let totalPrice = 0;
  for (let i = 0; i < props.content.length; i++) {
    totalPrice += props.content[i].price;
  }
  return (
    <div className="w-full shadow-md rounded-md p-6 text-black">
      <div className="flex justify-between mb-2">
        <p>單號:</p>
        <p>{props.orderNumber}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>顧客姓名:</p>
        <p>{props.customerName}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>顧客電話:</p>
        <p>{props.phone}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>取貨方式:</p>
        <p>{props.method}</p>
      </div>
      <div className="flex">
        <p>訂單內容：</p>
        <div>
          {props.content.map((item) => {
            return (
              <div className="flex w-full mb-2">
                <p>{item.quantity}x </p>
                <div>
                  <p>{item.name}</p>
                  <p className="text-slate-400">
                    {item.ice}
                    {item.sugar}
                  </p>
                </div>
                <p className="ml-auto">$ {item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-between mt-8">
        <p className="text-2xl font-bold">總計</p>
        <p className="text-2xl font-bold">${totalPrice}</p>
      </div>
      <button className="btn btn-info w-full mt-8">接受訂單</button>
    </div>
  );
}

export default UnaccptedOrderCard;
