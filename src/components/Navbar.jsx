import React , {useContext} from "react";
import Context from "../helper/Context";
import { FaShoppingCart } from "react-icons/fa";


function Navbar() {

  const {active  , setActive} = useContext(Context)
  return (
    <div  className=" sticky top-0 right-0 left-0">
      <nav className="flex px-4  items-center justify-between lg:px-6  h-[60px] shadow-lg">
        <div
         className={`text-[20px]  cursor-pointer text-gray-600 font-semibold `}>Cafe</div>
        <div className="flex gap-7">
          <div className=" cursor-pointer " onClick={()=> setActive(!active)}><FaShoppingCart className="text-4xl fill-gray-600"/></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
