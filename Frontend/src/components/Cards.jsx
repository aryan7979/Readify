// Cards.jsx (Revised for Hover)
import React from "react";

function Cards({ item }) {
  return (
    <>
      {/* Increased padding for separation and added z-10 for hover-layering */}
      <div className="mt-4 my-3 px-3 relative z-10"> 
        {/* The hover:scale-105 is correct. Ensure duration-300 is also applied. */}
        <div className="card w-full bg-base-100 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border"> 
          <figure>
            <img src={item.image} alt={item.name} className="h-60 w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="text-sm">{item.title}</p>
            <div className="card-actions justify-between items-center mt-2">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-3 py-1 rounded-full border-[2px] border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white duration-200 text-sm font-semibold">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;