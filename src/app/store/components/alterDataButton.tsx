"use client";
import { AlterDrinksType } from "@/type";

function AlterDataButton(props: AlterDrinksType) {
  const handleButtonClick = async () => {
    if (document) {
      (
        document.getElementById(`AlterDrink${props.name}`) as HTMLFormElement
      ).showModal();
    }
  };
  return (
    <>
      <span
        className="text-red-400 mr-4 font-bold cursor-pointer"
        onClick={handleButtonClick}
      >
        更改資料
      </span>
      <dialog id={`AlterDrink${props.name}`} className="modal">
        <div className="modal-box bg-white text-black p-10">
          <input
            type="text"
            placeholder={props.name}
            className="bg-white p-2 border-2 rounded-md block w-full "
          />
          <input
            type="text"
            placeholder={props.price.toString()}
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
          />
          <input
            type="text"
            placeholder={props.imageUrl}
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
          />
          <input
            type="text"
            placeholder={props.description}
            className="bg-white p-2 border-2 rounded-md block w-full mt-4"
          />
          <form method="dialog" className="modal-backdrop">
            <button className="btn btn-warning mt-4 w-full">儲存</button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default AlterDataButton;
