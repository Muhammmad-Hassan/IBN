import React, { useContext } from "react";
import { useSelector } from "react-redux";
import Context from "../helper/Context";

function Invoice() {
  const cartItem = useSelector((state) => state.cart.cart);
  const { printval, setPrintVale } = useContext(Context);
  let totalPrice = cartItem.reduce(
    (total, food) => total + Number(food.qty) * Number(food.price),
    0
  );

  const currentDate = new Date();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString("en-GB", options);

  const handlePrint = () => {
    const printContents = document.getElementById("invoice").innerHTML;
    // const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    // document.body.innerHTML = originalContents;
  };

  return (
    <>
      <div
        id="invoice"
        className={`fixed top-14 bg-white right-0 border-2 border-solid border-yellow-500 shadow-lg w-full lg:w-[24vw]   p-5 h-[100vh]  ${
          printval ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50 `}
      >
        <div className="flex justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Invoice</h1>
            <p className="text-gray-600">{formattedDate}</p>
          </div>
          <div>
            <img
              src="logo.png"
              className="text-2xl p-1 bg-red-600 fill-white hover:fill-red-500 hover:bg-white hover:outline outline-1 outline-red-500 transition-all duration-200  cursor-pointer rounded-sm"
              onClick={() => setPrintVale(!printval)}
            />
          </div>
        </div>

        <div className="border-t border-gray-300 my-8"></div>

        <div>
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="font-bold">Client Information:</h2>
              <p>Client Name</p>
            </div>
            <div>
              <h2 className="font-bold">Invoice No:</h2>
              <p>#123456</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 py-2 px-4">Item</th>
                  <th className="border border-gray-300 py-2 px-4">Price</th>
                  <th className="border border-gray-300 py-2 px-4">Quantity</th>
                  <th className="border border-gray-300 py-2 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItem.length > 0 ? (
                  cartItem.map((item) => (
                    <tr key={item.id}>
                      <td className="border border-gray-300 py-2 px-4">
                        {item.name}
                      </td>
                      <td className="border border-gray-300 py-2 px-4">
                        {item.price}
                      </td>
                      <td className="border border-gray-300 py-2 px-4">
                        {item.qty}
                      </td>
                      <td className="border border-gray-300 py-2 px-4">{item.price * item.qty}</td>
                    </tr>
                  ))
                ) : (
                  <h4 className="text-center font-bold text-2xl  mt-10">
                    The Cart is empty
                  </h4>
                )}

                {/* Add more rows for additional items */}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <p className="text-right">
              <span className="font-bold">Total:</span> Rs.{totalPrice}
            </p>
          </div>
        </div>
        <button
          className={`border mt-6 w-80 block  mx-auto  py-2 px-8 rounded-md shadow-lg border-gray-400 bg-gray-200`}
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </>
  );
}

export default Invoice;
