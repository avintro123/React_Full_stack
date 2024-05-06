import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group hover:bg-red-500">
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black">
          {props.title}
        </span>
        <span className="absolute inset-0 border-2 border-white rounded-full hover:border-black"></span>
      </button>
    </div>
  );
};

export default Button;