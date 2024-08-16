import React, { useState, useContext, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Context from "../helper/Context";
import { drop } from "../helper/slice/CartSlice";
import { IoMdClose } from "react-icons/io";
import ReactToPrint from "react-to-print";

function Invoice() {
  const [invoiceNo, setInvoiceNo] = useState(
    localStorage.getItem("invoiceNo")
      ? parseInt(localStorage.getItem("invoiceNo"))
      : 1
  );
  const componentRef = useRef();

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cart);
  const { printval, setPrintVale, setActive, active } = useContext(Context);

  // Initialize invoice number state with the value from local storage or 1 if not available

  let totalPrice = cartItem.reduce(
    (total, food) => total + Number(food.qty) * Number(food.price),
    0
  );

  const handlClick = () => {
    const existingDataString = localStorage.getItem("cartItem");

    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : [];

    const newData = [...existingData, ...cartItem];

    localStorage.setItem("cartItem", JSON.stringify(newData));
  };

  const currentDate = new Date();
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  const dateAndTime = currentDate.toLocaleDateString("en-GB", options);

  const handleBeforePrint = () => {
    handlClick();
    dispatch(drop());
    setInvoiceNo((prevInvoiceNo) => prevInvoiceNo + 1);
    setActive(!active);
    setPrintVale(!printval);
  };

  // Update local storage when invoice number changes
  useEffect(() => {
    localStorage.setItem("invoiceNo", invoiceNo.toString());
  }, [invoiceNo]);

  return (
    <>
      <div
        id="invoice"
        className={`fixed top-14 bg-white right-0 border-2 border-solid border-yellow-500 shadow-lg w-full lg:w-[24vw]   p-5 h-[100vh]  ${
          printval ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50 `}
        ref={componentRef}
      >
        <div className="flex justify-end mb-8">
          <div>
            <IoMdClose
              className="text-3xl p-1 bg-gray-600 fill-white hover:fill-red-500 hover:bg-white hover:outline outline-1 outline-red-500 transition-all duration-200  cursor-pointer rounded-sm"
              onClick={() => setPrintVale(!printval)}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-1 mb-5  mx-auto">
          <h2 className="  tracking-[1px] text-lg font-semibold">IBN E RAHAT</h2>
          <span>Canal Road Peshawar</span>
          <span>03132408945</span>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <div>
              <span>{dateAndTime}</span>
              <p>Costomer Name</p>
            </div>
            <div>
              <p className="font-semibold">#{invoiceNo}</p> {/* Dynamic invoice number */}
            </div>
          </div>

          <div className="overflow-x-auto ">
            <hr className="border border-dashed mb-1 border-gray-600 border-separate  w-full mx-auto" />
            <div className="w-full">
              {cartItem.length > 0 ? (
                cartItem.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div className="flex flex-col">
                      <span className="font-semibold">{item.name}</span>
                      <span className="text-sm">
                        {item.qty} x {item.price}
                      </span>
                    </div>
                    <div className="text-right ">{item.price * item.qty}</div>
                  </div>
                ))
              ) : (
                <div className="text-center border border-gray-300 py-4">
                  The Cart is empty
                </div>
              )}
            </div>
          </div>
          <hr className="border border-dashed mt-1 border-gray-600  w-full mx-auto" />

          <div className="mt-2 flex flex-col">
            <div className="flex justify-between">
              <span className="font-bold">Total</span>
              <span className=" font-semibold">Rs.{totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Cash</span>
              <span>Rs.{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
      {cartItem.length > 0 && (
        <ReactToPrint
          trigger={() => (
            <button
              className={`border ${
                printval ? "block" : "hidden"
              } absolute top-3 lg:right-36 py-1 px-8 right-32 rounded-md shadow-lg`}
            >
              Print
            </button>
          )}
          content={() => componentRef.current}
          onBeforePrint={handleBeforePrint}
        />
      )}
    </>
  );
}

export default Invoice;
