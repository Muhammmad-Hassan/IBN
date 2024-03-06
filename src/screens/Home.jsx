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
      name: "chaomein",
      price: 280,
    },
    {
      id: 2,
      name: "rise",
      price: 150,
    },
    {
      id: 3,
      name: "burger",
      price: 250,
    },
    {
      id: 4,
      name: "burger",
      price: 250,
    },
    {
      id: 5,
      name: "burger",
      price: 250,
    },
    {
      id: 6,
      name: "burger",
      price: 250,
    },
    {
      id: 7,
      name: "burger",
      price: 250,
    },
    {
      id: 8,
      name: "burger",
      price: 250,
    },
    {
      id: 9,
      name: "burger",
      price: 250,
    },
    {
      id: 10,
      name: "burger",
      price: 250,
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
