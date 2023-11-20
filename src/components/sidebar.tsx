function Sidebar  () {
    return ( 
        <div className="bg-[#E1D6C9] w-1/5 rounded-r-lg">
            <div className="w-auto flex items-center h-1/4 justify-center ">
                <img src="https://cdn-icons-png.flaticon.com/512/5821/5821159.png" alt="bubble-tea" className="w-1/4 cursor-pointer"/>
                <p className="text-black text-xl cursor-pointer">飲品介紹</p>
            </div>
            <div className="w-auto flex items-center h-1/4 justify-center ">
                <img src="information.png" alt="bubble-tea" className="w-1/5 cursor-pointer"/>
                <p className="text-black text-xl cursor-pointer">關於得負</p>
            </div>
            <div className="w-auto flex items-center h-1/4 justify-center ">
                <img src="location.png" alt="bubble-tea" className="w-1/4 cursor-pointer"/>
                <p className="text-black text-xl cursor-pointer">門市據點</p>
            </div>
            <div className="w-auto flex items-center h-1/4 justify-center ">
                <img src="question.png" alt="bubble-tea" className="w-1/5 cursor-pointer"/>
                <p className="text-black text-xl cursor-pointer">常見問題</p>
            </div>
        </div>
     );
}

export default Sidebar ;