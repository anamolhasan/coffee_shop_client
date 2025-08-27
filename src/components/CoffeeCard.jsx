import React from 'react'
import { Link } from 'react-router'

const CoffeeCard = ({ coffee }) => {
        const { _id, photo, quantity, supplier, taste, name, price } = coffee
  return (
     <div>
            <div className="card card-side bg-base-100 shadow-sm border-2 p-5">
                <figure>
                    <img src={photo} alt="Movie" />
                </figure>
                <div className="flex justify-around w-full mt-10">
                    <div className='space-y-4'>
                        <h2 className="">{name}</h2>
                        <p>Price : {price}</p>
                        <p>Quantity : {quantity}</p>
                    </div>
                </div>
                <div className='card-actions justify-end mr-5'>
                    <div className="join join-vertical space-y-4">
                        <Link to={``}>
                            <button className="btn join-item">View</button>
                        </Link>
                        <Link to={``}>
                            <button className="btn join-item">Edite</button>
                        </Link>
                        <button  className="btn join-item">Delete</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CoffeeCard