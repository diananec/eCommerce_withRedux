import React from "react";
import { useSelector } from "react-redux";
import { selectBasketTotalAmount, selectItems } from "../features/basketSlice";
import Product from "./Product";

function BasketView() {
  const items = useSelector(selectItems);
  const basketTotal = useSelector(selectBasketTotalAmount);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h5 className="text-4xl">Your Basket</h5>
        <p>Total: ${basketTotal}</p>
      </div>
      {items.map(({ id, title, price }) => (
        <Product id={id} title={title} price={price} />
      ))}
    </div>
  );
}

export default BasketView;
