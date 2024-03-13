import React, {useContext}from "react";
import Card from "../components/Card";
import Cart from "./Cart";
import Context from "../helper/Context.js"
import Invoice from "./Invoice"
function Home() {
  const { printval, setPrintVale } = useContext(Context);

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
      <div className="w-full h-full flex flex-wrap gap-3  items-center justify-evenly">
      {itemData.map((item) => (
        <Card key={item.id} id={item.id} name={item.name} price={item.price} />
      ))}
    </div>
    <Cart/>
    <Invoice/>
    </div>
  );
}

export default Home;
