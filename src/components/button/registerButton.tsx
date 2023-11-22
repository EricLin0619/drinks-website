'use client';
export default function RegisterButton() {
  const handleButtonClick = async () => {
    if (document) {
      (document.getElementById("register_modal") as HTMLFormElement).showModal();
    }
  }

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
          <h3 className="font-bold text-lg text-center">請輸入您的的電子郵件及密碼</h3>
          <input type="text" placeholder="電子郵件帳號" className="input input-bordered w-full bg-white mt-4 text-white"/>
          <input type="text" placeholder="密碼" className="input input-bordered w-full bg-white mt-4 text-white"/>
          <button className="btn btn-warning mt-4 w-full">註冊</button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
