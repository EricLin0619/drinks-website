import styles from "../app/drinks/styles.module.css";
import AddDrinkButton from "../button/addDrinkButton";

function DrinkCard(props: any) {
  return (
    <div className={`w-full bg-white shadow-lg p-4 rounded relative`}>
      <div className="flex items-center">
        <div className="mr-4">
          <p className="text-black font-bold text-xl">{props.name}</p>
          <p className="mb-2">
            {props.description}
          </p>
          <p className="text-black font-bold ">{`$${props.price}`}</p>
        </div>
        <img
          src={props.imageURL}
          className="w-1/3 rounded"
          alt=""
        />
      </div>
      <div className={`flex bg-white  w-8 h-8 rounded-full absolute right-6 bottom-8`}>
        <AddDrinkButton/>
      </div>
    </div>
  );
}

export default DrinkCard;
