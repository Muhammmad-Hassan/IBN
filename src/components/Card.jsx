import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQty, removeFromCart } from "../helper/slice/CartSlice";

function Card({ name, price, id }) {
  const cartItem = useSelector((state) =>
    state.cart.cart.find((item) => item.id === id)
  );
  // console.log(cartItem);

  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`w-full duration-100  border bg-white border-gray-300 flex items-center justify-between`}
      >
        <div className="px-2">
          <p className="font-bold text-center text-gray-600 text-sm">{name}</p>
          <p className="text-sm text-gray-500">Rs.{price}</p>
        </div>
        <div>
          {cartItem && cartItem.qty > 0 ?  (
            <div className="flex gap-1">
               <button
                className=" bg-gray-300 px-8 text-gray-600 py-4 text-2xl"
                onClick={() => {dispatch(decrementQty({ id }))}}
              >
                  -
              </button>
              <button
                onClick={() => {
                  dispatch(addToCart({ name, price, id, qty: 1 }));
                }}
                className=" bg-gray-300 px-8 text-gray-600 py-4 text-2xl"
              >
                {cartItem.qty}
              </button>{" "}
             
            </div>
          ) : (  dispatch(removeFromCart({id})) ,
            <button
              onClick={() => {
                dispatch(addToCart({ name, price, id, qty: 1 }));
              }}
              className="bg-gray-300 px-8 text-gray-600 py-4 text-2xl"
            >
              +
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
