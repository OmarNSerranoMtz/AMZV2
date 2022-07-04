import React, { useState, useEffect, useRouter } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { addToBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(1);
  const dispatch = useDispatch();

  const [hasPrime] = useState(1);
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      rating,
      price,
      description,
      category,
      image,
      hasPrime,
    };

    //sending the product as an action to Redux Store the basket slice
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 key={id}>{title}</h4>

      <div key={id} className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={id} className="h-5 text-yellow-500" />
          ))}
      </div>

      <div className="text-xs my-2 line-clamp-2">{description}</div>

      <div>
        <Currency quantity={price} currency="USD" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <div className="text-xs text-gray-500">FREE Next-day Delivery</div>
        </div>
      )}

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
