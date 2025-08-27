import React from 'react'
import { useLoaderData } from 'react-router'
import CoffeeCard from './CoffeeCard'

const Home = () => {
  const initialCoffees = useLoaderData()
  console.log(initialCoffees)
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-16'>
       {/* coffee card */}
       {
        initialCoffees.map(coffee => (
          <CoffeeCard key={coffee._id} coffee={coffee}/>
        ))
       }
      </div>
    </div>
  )
}

export default Home