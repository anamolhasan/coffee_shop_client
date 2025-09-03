import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const {data:coffee} = useLoaderData();
  console.log(coffee)
  const { name, supplier, taste, details, photo, price, quantity, email,likedBy } = coffee || {};

  return (
    <div className="flex justify-center items-center min-h-screen  p-6">
      <div className=" shadow-lg rounded-2xl max-w-lg w-full overflow-hidden">
        <img src={photo} alt={name} className="w-full h-64 object-cover" />

        <div className="p-6">
          <h2 className="text-2xl font-bold  mb-2">{name}</h2>
          <p className=" mb-4">{details}</p>

          <div className="grid grid-cols-2 gap-4 text-sm ">
            <p><span className="font-semibold">Supplier:</span> {supplier}</p>
            <p><span className="font-semibold">Taste:</span> {taste}</p>
            <p><span className="font-semibold">Quantity:</span> {quantity}</p>
            <p><span className="font-semibold">Price:</span> ${price}</p>
            <p><span className="font-semibold">likes:</span> {likedBy.length}</p>
            <p className="col-span-2"><span className="font-semibold">Email:</span> {email}</p>
          </div>

          <div className="mt-6 flex justify-between">
            <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700">
              Order Now
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300">
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
