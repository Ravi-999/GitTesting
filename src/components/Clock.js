import React from "react";

function Clock() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-[200px] h-[200px] border-2 border-solid-black rounded-full">
        <span className="absolute z-[10] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-[black] rounded-full"></span>
        <div className="absolute top-1/2 left-1/2 w-[2px] h-[30px] bg-[green] ml-[-1px] origin-top rotate-180 animate-hoursAnime"></div>
        <div className="absolute top-1/2 left-1/2 w-[2px] h-[60px] bg-[pink] ml-[-1px] origin-top rotate-80 animate-minutesAnime"></div>
        <div className="absolute top-1/2 left-1/2 w-[2px] h-[90px] bg-[red] ml-[-1px] origin-top rotate-90 animate-secondsAnime"></div>
        <span className="absolute left-1/2 -translate-x-1/2">12</span>
        <span className="absolute left-full top-1/2 -translate-x-full -translate-y-1/2">
          3
        </span>
        <span className="absolute top-full -translate-y-full left-1/2">6</span>
        <span className="absolute top-1/2 -translate-y-1/2">9</span>
      </div>
    </div>
  );
}

export default Clock;
