"use client";
export default function RegisterButton() {
  const handleButtonClick = async () => {
    if (document) {
      (
        document.getElementById("register_modal") as HTMLFormElement
      ).showModal();
    }
  };

  return (
    <>
      <button
        className="btn btn-warning mr-4"
        onClick={() => {
          handleButtonClick();
        }}
      >
        註冊
      </button>
      <dialog id="register_modal" className="modal">
        <div className="modal-box bg-white text-black p-10">
          <h3 className="font-bold text-xl text-center">
            請輸入您的個人資料及密碼
          </h3>
          <input
            type="text"
            placeholder="姓名"
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
          />
          <input
            type="text"
            placeholder="電話"
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
          />
          <input
            type="text"
            placeholder="送餐地址"
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
          />
          <input
            type="text"
            placeholder="電子郵件"
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
          />
          <input
            type="password"
            placeholder="密碼"
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
          />
          <button className="btn btn-warning mt-4 w-full">註冊</button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
