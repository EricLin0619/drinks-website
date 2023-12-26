"use client";
import { useRouter } from "next/navigation";

function AdminDropDown(props: any) {
  const router = useRouter();
  function logout() {
    sessionStorage.removeItem("jwt");
    props.changeLoginState(false);
    router.push("/");
   
  }

  return (
    <div className="flex-none gap-2">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-black rounded-box w-52"
        >
          <li
            onClick={() => {
              router.push("./userData");
            }}
          >
            <div className="flex">
              <img
                src="./user.png"
                alt="shopping-cart"
                className="w-7 h-7 cursor-pointer"
              />
              <a className="ml-auto">個人資料</a>
            </div>
          </li>
          <li
            onClick={() => {
              router.push("./Userhistory");
            }}
          >
            <div className="flex">
              <img
                src="./order.png"
                alt="shopping-cart"
                className="w-8 h-8 cursor-pointer"
              />
              <a className="ml-auto">歷史訂單</a>
            </div>
          </li>
          <li
            onClick={() => {
              router.push("./store");
            }}
          >
            <div className="flex">
              <img
                src="./store.png"
                alt="shopping-cart"
                className="w-7 h-7 cursor-pointer"
              />
              <a className="ml-auto">資源控制台</a>
            </div>
          </li>
          <li
            onClick={() => {
              router.push("./orderManagement");
            }}
          >
            <div className="flex">
              <img
                src="./hand.png"
                alt="shopping-cart"
                className="w-7 h-7 cursor-pointer"
              />
              <a className="ml-auto">接收訂單</a>
            </div>
          </li>
          <li
            onClick={() => {
              router.push("./salesReport");
            }}
          >
            <div className="flex">
              <img
                src="./salesReport.png"
                alt="shopping-cart"
                className="w-7 h-7 cursor-pointer"
              />
              <a className="ml-auto">銷售報表</a>
            </div>
          </li>
          <li
            onClick={() => {
              router.push("./shoppingCart");
            }}
          >
            <div className="flex">
              <img
                src="./shopping-cart.png"
                alt="shopping-cart"
                className="w-7 h-7 cursor-pointer"
              />
              <a className="ml-auto">購物車</a>
            </div>
          </li>
          <li
            onClick={() => {
              logout();
            }}
          >
            <div className="flex">
              <img
                src="./logout.png"
                alt="shopping-cart"
                className="w-6 h-6 cursor-pointer"
              />
              <a className="ml-auto">登出</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminDropDown;
