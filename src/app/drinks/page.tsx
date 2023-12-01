import DrinkCard from "@/components/card/drinkCard";
import testData from "./testData.json";
function Page() {
  return (
    <section className="mx-auto w-2/3 grid grid-cols-2 justify-items-center gap-4 my-8">
      {testData.map((drink, index) => (
        <DrinkCard
          key={index}
          name={drink.name}
          price={drink.price}
          imageURL={drink.imageUrl}
          description={drink.description}
        />
      ))}
      {/* <DrinkCard
        name={"珍珠奶茶"}
        price={75}
        imageURL={
          "https://images.deliveryhero.io/image/fd-tw/Products/19895531.jpg?width=300&height=300&quot"
        }
        description={
          "【L杯】總糖量59公克．總熱量366大卡【XL杯】總糖量75公克．總熱量455大卡∣咖啡因總含量：黃101-200mg/杯∣茶葉原產地：緬甸、台灣"
        }
      />
      <DrinkCard
        name={"拾JOE芝麻歐蕾"}
        price={75}
        imageURL={
          "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/AS/chains/dudooeatschain/7613e8785413b6690605bc2fa49202e0.png?width=300&height=300&quot"
        }
        description={
          "【L杯】總糖量59公克．總熱量366大卡【XL杯】總糖量75公克．總熱量455大卡∣咖啡因總含量：黃101-200mg/杯∣茶葉原產地：緬甸、台灣"
        }
      />
      <DrinkCard
        name={"橙芝汗"}
        price={87}
        imageURL={
          "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/AS/chains/dudooeatschain/cd3b40ae1dad7cf0d932cbdd6946860e.jpeg?width=300&height=300&quot"
        }
        description={
          "【L杯】總糖量59公克．總熱量366大卡【XL杯】總糖量75公克．總熱量455大卡∣咖啡因總含量：黃101-200mg/杯∣茶葉原產地：緬甸、台灣"
        }
      />
      <DrinkCard
        name={"愛荔殺殺"}
        price={78}
        imageURL={
          "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/AS/chains/dudooeatschain/6a95554301a54de2d47076f94a055a2d.jpg?width=300&height=300&quot"
        }
        description={
          "【L杯】總糖量59公克．總熱量366大卡【XL杯】總糖量75公克．總熱量455大卡∣咖啡因總含量：黃101-200mg/杯∣茶葉原產地：緬甸、台灣"
        }
      />
      <DrinkCard
        name={"超PINEAPPLE冰茶"}
        price={75}
        imageURL={
          "https://images.deliveryhero.io/image/menu-import-gateway-prd/regions/AS/chains/dudooeatschain/e849d6fcef7ca1ab643cd2f819b5dba3.jpeg?width=300&height=300&quot"
        }
        description={
          "【L杯】總糖量59公克．總熱量366大卡【XL杯】總糖量75公克．總熱量455大卡∣咖啡因總含量：黃101-200mg/杯∣茶葉原產地：緬甸、台灣"
        }
      /> */}
    </section>
  );
}

export default Page;
