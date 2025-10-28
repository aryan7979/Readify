import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <div className="max-w-screen-2xl mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      {/* Text Section */}
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36 space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold">
          Hello, welcome to learn something{" "}
          <span className="text-pink-500">new every day!</span>
        </h1>
        <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300">
          Explore a wide variety of courses and books that help you grow your
          skills. Start learning, improving, and achieving your goals today!
        </p>

        {/* Email Input */}
        <label className="flex items-center gap-2 border rounded-md overflow-hidden dark:border-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70 dark:text-gray-300 mx-2"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            placeholder="Email"
            className="grow px-2 py-2 outline-none dark:bg-slate-900 dark:text-white dark:placeholder-gray-400"
          />
        </label>

        {/* Get Started Button */}
        <button className="mt-4 px-6 py-2 rounded-md bg-pink-500 text-white font-semibold hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700">
          Get Started
        </button>
      </div>

      {/* Banner Image */}
      <div className="order-1 w-full mt-10 md:w-1/2 flex justify-center md:justify-end">
        <img
          src={banner}
          className="md:w-[550px] md:h-[460px]"
          alt="Banner"
        />
      </div>
    </div>
  );
}

export default Banner;
