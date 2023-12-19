"use client";
import axios from "axios";
import { useEffect,useState } from "react";
import jwt from "jsonwebtoken";

  
function Page() {
        const jwtToken = sessionStorage.getItem('jwt')
        const [userId, setUserId] = useState("")
        const [newLogin, setnewLogin] = useState("")
        const [newPassword, setnewPassword] = useState("");
        const [password, setPassword] = useState("");
        const [name, setName] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");
        const [email, setEmail] = useState("");
        const [login, setLogin] = useState("");
        let passwordChanged: boolean;
     

        useEffect(() => {
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
          fetchUserData();
          getLoginValue();
        }, []);   


  const getLoginValue = async () => {
    const jwtToken = sessionStorage.getItem('jwt');
    try {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
      const decoded = jwt.decode(jwtToken);
      setLogin(decoded.sub);
      console.log(decoded.sub);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const fetchUserData = async () => {
      const jwtToken = sessionStorage.getItem('jwt')
        try {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
            axios
            .get(process.env.api + "/getUserInfo")
            .then((response) => {
              setUserId(response.data.userId);
              setName(response.data.userName);
              setPhoneNumber(response.data.userPhone);
              setEmail(response.data.userEmail);
              setPassword(response.data.userPassword);
                
              //console.log(response.data);
              //console.log(userId);
            })
        }
        catch (error) {
          console.log(error);
        }
      }
        


      function UpdateUserInfo(){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
       
        if  (!newLogin){
          setnewLogin("");
        }
        if (!name|| !phoneNumber || !email ||!login ) {
          alert("未填之帳戶資料欄位將不進行更改");
        }
        axios
        .put(process.env.api + "/updateUserInfo/",{
          phone: phoneNumber,
          userName: name,
          email:email,
          userId: userId,
           })
        axios
        .post(process.env.api + "/updateUser/",{
          email: email,
          login:login,
          name: name,
          newLogin :newLogin,
          password: password,
          newPassword:null,
          phoneNumber: phoneNumber,
          passwordChanged: false,
          
        })
        .then((response) => {
            alert("帳戶資訊已更新");
             console.log(response);
             //setName("");
             //setPhoneNumber("");
             //setEmail("");
             //setLogin("");
             
             location.reload();   
            })
        .catch((error) => {
          alert("帳戶資訊更新發生錯誤");
           console.log(error.response.data);
      });
      
    }

      function UpdatePassword(){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
        
        passwordChanged = true;
        //newlogin
        setnewLogin("");

        if (!password || !newPassword) {
          alert("請填入原密碼及新密碼");
          return;
        }
       
        axios
         .post(process.env.api + "/updateUser/",{
          email: email,
          login:login,
          name: name,
          newLogin :newLogin,
          password: password,
          newPassword:newPassword,
          phoneNumber: phoneNumber,
          passwordChanged: passwordChanged,
           })
        .then((response) => {
           console.log(response);
           setPassword("");
           setnewPassword("");
           location.reload(); 
           alert("密碼已更改")  
            })
         .catch((error) => {
             console.log(error);
             if (error.response && error.response.status === 400) {
              alert("原密碼輸入錯誤");
            } else {
              alert("密碼更新失敗");
            }
            });
          }   
     
    
     return(


      <main className="w-1/3 rounded-md shadow-md mx-auto mt-10 p-6 text-black">
      <p className="text-2xl font-bold text-black">我的帳戶</p>

      <div className="label">
        <span className="label-text mt-4">登入帳號</span>
      </div>
      <input
        type="text"
        placeholder= {login.toString()}
        className="bg-white p-2 border-2 rounded-md block w-full"
        onChange={(e) => setLogin(e.target.value)}
      />

      <div className="label">
        <span className="label-text mt-4">姓名</span>
      </div>
      <input
        type="text"
        placeholder= {name.toString()}
        className="bg-white p-2 border-2 rounded-md block w-full"
        onChange={(e) => setName(e.target.value)}
      />
      <div className="label">
      <span className="label-text mt-4">手機號碼</span>   
      </div>
      <input
        type="tel"
       placeholder={phoneNumber.toString()}
        className="bg-white p-2 border-2 rounded-md block w-full"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div className="label">
        <span className="label-text mt-4">電子郵件</span>
      </div>
      <input
        type="email"
        placeholder={email.toString()}
        className="bg-white p-2 border-2 rounded-md block w-full"
        onChange={(e) => setEmail(e.target.value)}

      />
        <button className="text-black rounded-md btn mt-4 bg-red-400 border-none"
          onClick={() => { UpdateUserInfo(); }}>儲存</button>
             

      <p className="text-2xl font-bold text-black mt-12">密碼</p>
      <div className="label">
        <span className="label-text mt-4">現有密碼</span>
      </div>
      <input
        type="password"
        placeholder=""
        className="bg-white p-2 border-2 rounded-md block w-full"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="label">
        <span className="label-text mt-4">新密碼</span>
      </div>
      <input
        type="password"
        placeholder=""
        className="bg-white p-2 border-2 rounded-md block w-full"
        onChange={(e) => setnewPassword(e.target.value)}
      />
        <button className="text-black rounded-md btn mt-4 bg-red-400 border-none"
         onClick={() => { UpdatePassword(); }}>儲存</button>
        </main>
  );
}

export default Page;
