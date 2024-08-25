import React from "react";
import "../index.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Hero() {
  const authStatus = useSelector((state) => state.auth.status);
  return (
    
      <div className="lg:bg-[url('../circles.svg')] bg-[url('../circles-m.png')] w-full h-screen bg-no-repeat bg-center bg-cover flex justify-center items-center">
    
        <div id="main" className="flex flex-col gap-4 md:gap-0 items-center md:items-start md:flex-row">
        <div className="md:w-1/2 w-full">
        <img src="../girl.jpg" className="md:h-[70%] md:w-full md:m-0 w-[90%] m-auto object-cover object-center rounded-tr-[187px] rounded-tl-[181px] rounded-br-[52px] rounded-bl-[133px]" alt="" />
        </div>
        <div className="md:w-1/2 w-full">
        <h1 className="lg:text-8xl text-6xl font-extrabold mt-2 text-center md:text-right">Write Your</h1>
        <h1 className="lg:text-8xl text-6xl font-extrabold mt-2 text-center md:text-right  bg-gradient-to-r from-[#3652e1] to-[#7e56f3] bg-clip-text text-transparent">Article</h1>
        <h1 className="lg:text-8xl text-6xl font-extrabold mt-2 text-center md:text-right">here</h1>
        <div className="w-full flex justify-center md:block md:justify-normal">
        <Link 
        to={authStatus ? "/add-post" : "/signup"}
        className="bg-[#3652e1] text-white font-bold py-4 px-6 rounded-full mt-6  md:float-right active:scale-[0.96]"
        >
          {!authStatus ? "Create Account" : "Add Post"}
        </Link>
        </div>
        </div>
        </div>
      </div>
  );
}

export default Hero;
