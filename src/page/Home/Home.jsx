import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "../coffees/components/CoffeeCard";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);
  // console.log(initialCoffees);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
        {/* coffee card */}
        {coffees.map((coffee) => (
          <CoffeeCard
            coffees={coffees}
            setCoffees={setCoffees}
            key={coffee._id}
            coffee={coffee}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
