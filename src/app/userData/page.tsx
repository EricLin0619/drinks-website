function Page() {
  return (
    <main className="w-1/3 rounded-md shadow-md mx-auto mt-10 p-6">
      <p className="text-2xl font-bold text-black">我的帳戶</p>
      <div className="label">
        <span className="label-text mt-4">姓名</span>
      </div>
      <input
        type="text"
        placeholder="林冠廷"
        className="bg-white p-2 border-2 rounded-md block w-full"
      />
      <div className="label">
        <span className="label-text mt-4">手機號碼</span>
      </div>
      <input
        type="text"
        placeholder="0967849855"
        className="bg-white p-2 border-2 rounded-md block w-full"
      />
      <div className="label">
        <span className="label-text mt-4">電子郵件</span>
      </div>
      <input
        type="text"
        placeholder="1234@gmail.com"
        className="bg-white p-2 border-2 rounded-md block w-full"
      />
      <button className="text-black rounded-md btn mt-4 btn-error">儲存</button>
      <p className="text-2xl font-bold text-black mt-12">密碼</p>
      <div className="label">
        <span className="label-text mt-4">現有密碼</span>
      </div>
      <input
        type="password"
        placeholder=""
        className="bg-white p-2 border-2 rounded-md block w-full"
      />
      <div className="label">
        <span className="label-text mt-4">新密碼</span>
      </div>
      <input
        type="password"
        placeholder=""
        className="bg-white p-2 border-2 rounded-md block w-full"
      />
      <button className="text-black rounded-md btn mt-4 btn-error">儲存</button>
    </main>
  );
}

export default Page;
