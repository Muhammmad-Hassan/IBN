import React, { useState } from "react";
import { useDispatch  } from "react-redux";
import {addToCart} from "../helper/slice/CartSlice"
function Card({name , price , id}) {

  const dipatch =  useDispatch()
  return (
    <>
      <div onClick={()=>{dipatch(addToCart({name,price, id,qty:1}));  }} className={`w-[150px] h-[100px]  duration-100 cursor-pointer border bg-white border-gray-300 px-4 py-2 hover:scale-105
       rounded-md flex flex-col items-center justify-center`}>
        <div className="font-bold  bg-white text-center text-sm">{name}</div>
        <div className="bg-white  ">Rs.{price}</div>
      </div>
    </>
  );
}

export default Card;
