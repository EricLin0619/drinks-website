function Page() {
  return (
    <main className="w-2/3 mx-auto flex mt-10">
      <section className="w-1/2 mr-4">
        <div className="rounded-md shadow-md p-6">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-black">送餐地址</p>
            <p className="text-red-300 font-bold cursor-pointer">更改地址</p>
          </div>
          <p className="text-black mt-8">桃園市中壢區中大路300號</p>
          <p className="text-sm">
            外送備註 -
            地標/建築物/社區大樓管理室。如您的送餐地址在較大的公共場合
            例如公園、河堤、疏洪道等，請務必於訂餐後留意手機訊息及電話
          </p>
        </div>
        <div className="rounded-md shadow-md p-6 mt-8">
          <p className="text-2xl font-bold text-black">送達時間</p>
          <input type="date" id="birthday" name="birthday" className="p-2 shadow-md rounded bg-slate-200 text-black mt-4 mr-4"></input>
          <input type="time" id="appt" name="appt" min="09:00" max="18:00"  className="p-2 shadow-md rounded bg-slate-200 text-black" required />
        </div>
        <div className="rounded-md shadow-md p-6 mt-8">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-black">個人資料</p>
            <p className="text-red-300 font-bold cursor-pointer">更改資料</p>
          </div>
          <p className="mt-8">林阿冠</p>
          <p>0957893756</p>
          <p>1234@gmail.com</p>
        </div>
        <div className="rounded-md shadow-md p-6 mt-8">
          <p className="text-2xl font-bold text-black">付款方式</p>
          <div className="flex items-center mt-8 justify-between">
            <input
              type="radio"
              name="payment"
              className="radio radio-primary block "
            />
            <p className="text-black">現金付款</p>
          </div>
          <div className="flex items-center mt-4 justify-between">
            <input
              type="radio"
              name="payment"
              className="radio radio-primary block "
            />
            <p className="text-black">Line pay</p>
          </div>
        </div>
        <button className="btn btn-info mt-8 w-full text-center">完成並付款</button>
      </section>
      <section className="w-1/2 shadow-md rounded-md p-6 flex flex-col">
        <div className="">
          <p className="text-black text-2xl font-bold">您的訂單</p>
          <p>ching shin fu chuan (Zhongli National Branch)</p>
          <div className="flex mt-4 text-black">
            <p className="mr-2">1x</p>
            <div>
              <p>珍珠奶茶</p>
              <p>微糖</p>
              <p>微冰</p>
            </div>
            <p className="ml-auto">$ 50</p>
          </div>
          <div className="flex justify-between mt-10">
            <p className="text-2xl text-black font-bold">總計</p>
            <p className="text-2xl text-black font-bold">$50</p>
          </div>
        </div>
        <div className="flex-grow w-auto h-auto invisible"></div>
      </section>
    </main>
  );
}

export default Page;
