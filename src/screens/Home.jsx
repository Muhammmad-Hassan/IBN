  import React, { useContext } from "react";
  import Card from "../components/Card";
  import Cart from "./Cart";
  import Invoice from "./Invoice";
  import axios from "axios";
  import { decrementQty } from "../helper/slice/CartSlice";
  import { useDispatch } from "react-redux";
  function Home() {
    const existingDataString = localStorage.getItem("cartItem");

    const submitHandler = async () => {
      try {
        const data = JSON.parse(existingDataString); // Parse the existing data if it's JSON
        const response = await axios.post(
          "https://sheet.best/api/sheets/e01cb086-88a6-4c83-82bd-3dc893bb1a9f",
          data
        );
        localStorage.removeItem("cartItem");
      } catch (error) {
        console.error("Error submitting data to Google Sheets:", error.message);
      }
    };
    

    const itemData = [
      {
        id: 1,
        name: "Chaomein",
        price: 280,
      },
      {
        id: 2,
        name: "Fried Rise",
        price: 150,
      },

      {
        id: 3,
        name: "Zinger Burger",
        price: 250,
      },
      {
        id: 4,
        name: "K2 Burger",
        price: 350,
      },
      {
        id: 5,
        name: "Zinger Shourma",
        price: 160,
      },
      {
        id: 6,
        name: "Chicken Rise",
        price: 300,
      },
    ];

    return (
      <div className="mt-5">
        <div className="w-full h-full flex flex-wrap flex-col gap-3  items-center justify-evenly">
          {itemData.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
        {/* <button
          className=" bg-zinc-400 py-2 px-5 hover:scale-110 rounded-lg mt-2 block m-auto"
          onClick={submitHandler}
        >
          submit
        </button> */}
        <Cart />
        <Invoice />
      </div>
    );
  }

  export default Home;
