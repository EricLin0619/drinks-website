"use client"
import Coursel from "../components/coursel";
import Sidebar from "../components/sidebar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <main className="grow">
      <section className="flex mt-8 w-2/3 mx-auto">
        <Coursel />
        <Sidebar />
      </section>
      <section className="w-2/3 mx-auto mt-8">
        <p className="text-2xl mb-4 text-blue-700 font-bold">
          用心泡好茶的下次一訂
        </p>
        <p className="text-black">
          得負創立於1987年，秉持踏實穩健、創發精進的經營理念，在手搖飲料店櫛比鱗次的台灣，一本用心泡好茶的初衷，傳遞喝好茶的幸福，始終堅持「手搖」傳統，並提供「客製化」的專業服務。
          得負嚴選優質茶葉、食材與包材，並逐批或定期送SGS檢驗，落實食品安全衛生自主管理，期許所奉上的每杯手搖飲料，都能帶給消費者「清」澄「心」靈、「福」澤「全」備的富足感。
        </p>
      </section>
      <section className="w-2/3 mx-auto mt-8">
        <p className="text-2xl mb-4 text-blue-700 font-bold">
        下次一訂手搖飲料系列介紹
        </p>
        <p className="text-black mb-4">
          清心福全飲品菜單可分為茗品、奶茶、鮮奶／拿鐵、特調、季節鮮果、冬瓜、優多、冰淇淋、果醋等系列，各有獨到的風味與口感，以提供消費者全方位、多樣化的手搖飲料推薦選擇。
        </p>
        <p className="text-black mb-4">
          「茗品系列」忠實呈現各茶種最純粹、天然的茶香與茶味，包括清心福全首創的烏龍綠茶，以及特級綠茶、錫蘭紅茶、極品菁茶、原鄉四季、特選普洱等招牌純茶。「奶茶系列」是頂級茗品與嚴選奶精所沖調的飲品，茶味濃醇，奶香到位，入口絲滑豐潤。而加入Q彈珍珠（波霸）的「珍珠奶茶（波霸奶茶）」是台灣特色美食，咀嚼之間美味倍增。奶茶還可加入椰果、布丁、仙草凍等食材，多重口感出類拔萃。「鮮奶／拿鐵系列」為溶入鮮乳的飲品，所選用的是高品質崙背鮮乳與瑞穗鮮乳，香濃純正無與倫比。其中鮮潤芳醇的「珍珠鮮奶茶」是手搖飲料推薦的必推款，而「清心隱藏版──珍珠蜂蜜鮮奶普洱」則堪稱漸層飲料、網美飲料的經典款。「特調系列」是結合茗品、話梅、蜂蜜等的飲品，恰到好處的混搭比例讓食材彼此相得益彰，打造別開生面的美味饗宴。
        </p>
      </section>
      <section className="w-2/3 mx-auto mt-8">
        <p className="text-2xl mb-4 text-blue-700 font-bold">暢銷飲品</p>
        <div className="grid grid-cols-3 gap-y-20 justify-items-center">
          <div>
            <img
              src="http://www.presotea.com.tw/webimages/1608538282702.png"
              alt=""
              className="h-80 mb-4"
            />
            <p className="mx-auto text-center text-xl text-black">
              熊貓黑糖珍珠奶茶
            </p>
          </div>
          <div>
            <img
              src="http://www.presotea.com.tw/webimages/1643255593545.png"
              alt=""
              className="h-80 mb-4"
            />
            <p className="mx-auto text-center text-xl text-black">琥珀奶茶</p>
          </div>
          <div>
            <img
              src="http://www.presotea.com.tw/webimages/1643260059133.png"
              alt=""
              className="h-80 mb-4"
            />
            <p className="mx-auto text-center text-xl text-black">
              沖繩黑糖風味奶茶
            </p>
          </div>
          <div>
            <img
              src="http://www.presotea.com.tw/webimages/1643255644879.png"
              alt=""
              className="h-80 mb-4"
            />
            <p className="mx-auto text-center text-xl text-black">仙草凍奶茶</p>
          </div>
          <div>
            <img
              src="http://www.presotea.com.tw/webimages/1643255662728.png"
              alt=""
              className="h-80 mb-4"
            />
            <p className="mx-auto text-center text-xl text-black">
              紅豆玄米奶茶
            </p>
          </div>
          <div>
            <img
              src="http://www.presotea.com.tw/webimages/1643255654649.png"
              alt=""
              className="h-80 mb-4"
            />
            <p className="mx-auto text-center text-xl text-black">布丁奶茶</p>
          </div>
          <div>
            <img
              src="http://www.presotea.com.tw/webimages/1643249935626.png"
              alt=""
              className="h-80 mb-4"
            />
            <p className="mx-auto text-center text-xl text-black">琥珀奶蓋</p>
          </div>
          <div>
            <img
              src="http://www.presotea.com.tw/webimages/1643249945579.png"
              alt=""
              className="h-80 mb-4"
            />
            <p className="mx-auto text-center text-xl text-black">焙茶奶蓋</p>
          </div>
          <div>
            <img
              src="http://www.presotea.com.tw/webimages/1643249958292.png"
              alt=""
              className="h-80 mb-4"
            />
            <p className="mx-auto text-center text-xl text-black">
              白桃風味烏龍奶蓋
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
