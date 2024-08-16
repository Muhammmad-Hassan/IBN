import { useDispatch } from "react-redux";
import {incrementQty,decrementQty} from "../helper/slice/CartSlice";
import { AiOutlineMinus, AiOutlinePlus  } from "react-icons/ai";



function CartItem({ name, price1 ,id , qty}) {
  let price = price1 * qty;
    const dipatch = useDispatch()
  return (
    <>
      <div></div>
      <div className="flex flex-col w-full justify-between ml-2">
      <div className="flex justify-between">
          <p>Rs.{price}</p>
          <p>{name}</p>
          <div className="flex items-center justify-between w-20 ">
            <AiOutlinePlus
              onClick={ () => dipatch(incrementQty({ id }))}
              className="text-3xl hover:scale-110 transition-all  duration-100 p-2 bg-gray-200  cursor-pointer rounded-sm"
            />
            <span className="text-sm">{qty}</span>
            <AiOutlineMinus
              onClick={() => dipatch(decrementQty({ id }))}
              className=" text-3xl  bg-gray-200 
             cursor-pointer rounded-sm hover:scale-110 transition-all  duration-100 p-2"
            />
            
          </div>
        </div>
      </div>
      
    </>
  );
}

export default CartItem;
