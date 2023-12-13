import React from "react";
import axios from "axios";
import { CurrentCouponType } from "../../../type";

function CouponsCard(props: CurrentCouponType) {
    const expirationDate = new Date(props.expireDatetime);

    const jwtToken = sessionStorage.getItem('jwt')
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    function deleteCoupons(id) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
        axios
          .delete(process.env.api + "/coupons/" + id)
          .then((response) => {
            if(response.status===200){
              alert("刪除成功!");
            }
            else
            {
            console.log(response);
            location.reload();
            }
        })
          .catch((error) => {
            console.log(error);
            alert('刪除失敗!');
          });
      }

    return (
        <div className="flex items-center justify-between w-full shadow-md rounded-md p-6">
        
         <img
            src="./coupon.png"
            alt="coupon"
            className="w-24 h-24 rotate-90"
          />
          <div className="mr-4">
            <p className="font-bold">優惠卷代碼</p>
            <p className="text-black font-bold text-xl">{props.code}</p>
            <p className="font-bold">優惠卷折扣</p>
            <p className="text-black font-bold ">{`${props.discount} 元`}</p>
            <p className="font-bold">優惠卷使用次數</p>
            <p className="text-black font-bold ">{`${props.usetimes} 次`}</p>
            <p className="font-bold">優惠卷到期日</p>
            <p className="text-black font-bold">{expirationDate.getFullYear() + "年" + (expirationDate.getMonth()+1) + "月" + expirationDate.getDate() + "日" + expirationDate.getUTCHours() + "點" + expirationDate.getMinutes() + "分" }</p>
        </div>
        <span 
          className="text-red-400 font-bold cursor-pointer"
          onClick={() => {
            deleteCoupons(props.id);
          }}
          >
          刪除優惠卷
        </span>
        </div>    
        
    );
}
export default CouponsCard;