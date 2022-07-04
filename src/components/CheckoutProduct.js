import React from "react";
import Image from "next/image";
import { CurrencyPoundIcon, StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";

function CheckoutProduct({
  id,
  title,
  rating,
  price,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
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

  const removeItemFromBasket = () => {
    //remove item from redux
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div>
      <div className="grid grid-cols-5">
        <Image src={image} height={200} width={200} objectFit="contain" />

        {/* middle */}
        <div className="col-span-3 mx-5">
          <div>{title}</div>
          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500 " />
              ))}
          </div>
          <div className="text-xs mt-2 mb-2 line-clamp-3">{description}</div>
          <Currency quantity={price} currency="USD" />

          {hasPrime && (
            <div className="flex items-center space-x-2">
              <img
                loading="lazy"
                className="w-12"
                src="https://links.papareact.com/fdw"
                alt=""
              />
              <div className="text-xs text-gray-500">
                FREE Next-day Delivery
              </div>
            </div>
          )}
        </div>

        {/*Right add and remove buttons */}
        <div className="flex flex-col space-y-2 my-auto justify-self-end">
          <button className="button" onClick={addItemToBasket}>
            Add to basket
          </button>
          <button className="button" onClick={removeItemFromBasket}>
            Remove from basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
