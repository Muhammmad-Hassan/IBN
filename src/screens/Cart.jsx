import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import Context from "../helper/Context";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import CartItem from "./CartIem";

function Cart() {
  const { active, setActive } = useContext(Context);
  const {  setPrintVale } = useContext(Context);
  const cartItem = useSelector((state) => state.cart.cart);
  let totalPrice = cartItem.reduce(
    (total, food) => total + Number(food.qty) * Number(food.price),
    0
  );

  return (
    <>
      <div
        className={`fixed top-14 bg-white right-0 border-2 border-solid border-yellow-500 shadow-lg w-full lg:w-[24vw]   p-5 h-[100vh]  ${
          active ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50 `}
      >
        <div className="h-[75px]">
          <div className="mb-4">
            <div className="flex justify-between  items-center  scroll-smooth">
           
              <span className="font-bold text-x  ">My Orders</span>
              <button
                className="border  py-1 px-5 rounded-md shadow-lg border-gray-400 bg-gray-200"
                onClick={() => setPrintVale(true) &&  setActive(!active)}
              >
                Proceid
              </button>
              <IoMdClose
                className="text-3xl p-1 bg-red-600 fill-white hover:fill-red-500 hover:bg-white hover:outline outline-1 outline-red-500 transition-all duration-200  cursor-pointer rounded-sm"
                onClick={() => setActive(!active)}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="">Grand Total </h2>
            <span className="">Rs.{totalPrice}</span>
          </div>
        </div>
        <div className="w-full  h-[80%] overflow-y-scroll overflow-x-hidden ">
          {cartItem.length > 0 ? (
            cartItem.map((foodItems, foodIndex) => (
              <div
                key={foodItems.id}
                className={`shadow-lg rounded-lg flex p-3 border-solid border-gray-300 mt-2 border-2 `}
              >
                <CartItem
                  name={foodItems.name}
                  price1={foodItems.price}
                  id={foodItems.id}
                  qty={foodItems.qty}
                />
              </div>
            ))
          ) : (
            <h4 className="text-center font-bold text-2xl  mt-10">
              The Cart is empty
            </h4>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
