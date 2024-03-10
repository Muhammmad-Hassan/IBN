import React , {useContext} from "react";
import Context from "../helper/Context";
import { FaShoppingCart } from "react-icons/fa";


function Navbar() {
  const {active  , setActive} = useContext(Context)
  return (
    <div  className=" sticky top-0 right-0 left-0">
      <nav className="flex  items-center justify-between px-9 py-3 h-[60px] shadow-lg">
        <div className="bg-gray-800 rounded-[3px] px-4  py-[5px] text-gray-100">Cafe</div>
        <div className="flex gap-7">
          <div className=" cursor-pointer" onClick={()=> setActive(!active)}><FaShoppingCart className="text-4xl"/></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
