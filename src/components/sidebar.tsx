function Sidebar  () {
    return ( 
        <div className="bg-[#E1D6C9] w-1/5 rounded-r-lg">
            <div className="w-auto flex items-center h-1/4">
                <img src="https://cdn-icons-png.flaticon.com/512/5821/5821159.png" alt="bubble-tea" className="ml-8 w-16 h-16"/>
                <p className="text-black text-xl ml-4">飲品介紹</p>
            </div>
            <div className="w-auto flex items-center h-1/4">
                <img src="information.png" alt="bubble-tea" className="ml-[35px] w-14 h-14"/>
                <p className="text-black text-xl ml-[21px]">關於得負</p>
            </div>
            <div className="w-auto flex items-center h-1/4">
                <img src="location.png" alt="bubble-tea" className="ml-8 w-16 h-16"/>
                <p className="text-black text-xl ml-4">門市據點</p>
            </div>
            <div className="w-auto flex items-center h-1/4">
                <img src="question.png" alt="bubble-tea" className="ml-8 w-16 h-16"/>
                <p className="text-black text-xl ml-4">常見問題</p>
            </div>
        </div>
     );
}

export default Sidebar ;