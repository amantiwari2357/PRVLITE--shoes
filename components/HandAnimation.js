import React from "react";

const HandAnimation = () => {
  return (
    <div className="relative w-20 h-16 ml-20">
      {/* Shadow */}
      <div className="absolute top-[70%] right-[20%] w-[180%] h-[75%] bg-black rounded-[40px_10px] blur-lg opacity-30"></div>

      {/* Palm */}
      <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 rounded-[10px_40px]"></div>

      {/* Thumb */}
      <div className="absolute bottom-[-18%] right-[1%] w-[120%] h-[38px] bg-yellow-400 rotate-[-20deg] rounded-[30px_20px_20px_10px] border-b-2 border-l-2 border-black/10"></div>

      {/* Fingers with Animation */}
      <div className="absolute bottom-[32%] right-[64%] w-[80%] h-[35px] bg-yellow-400 origin-right animate-finger"></div>
      <div className="absolute bottom-[32%] right-[64%] w-[80%] h-[35px] bg-yellow-400 origin-right animate-finger delay-100"></div>
      <div className="absolute bottom-[32%] right-[64%] w-[80%] h-[35px] bg-yellow-400 origin-right animate-finger delay-200"></div>
      <div className="absolute bottom-[32%] right-[64%] w-[80%] h-[35px] bg-yellow-400 origin-right animate-finger delay-300"></div>
    </div>
  );
};

export default HandAnimation;
