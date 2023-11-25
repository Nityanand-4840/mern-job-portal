import React from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

const Banner = ({ handleInputChange, query }) => {
  return (
    <div className="container px-4 mx-auto max-w-screen-2xl xl:px-24 md:py-20 py-14">
      <h1 className="mb-3 text-5xl font-bold text-primary">
        Find your <span className="text-blue">new job</span> today
      </h1>
      <p className="mb-8 text-lg text-black/70">
        Thousands of jobs in the computer, engineering and technology sectors
        are waiting for you.
      </p>

      <form className="">
        <div className="flex flex-col justify-start gap-4 md:flex-row md:gap-0">
          <div className="flex w-full rounded shadow-sm md:rounded-s-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2">
            <input
              type="text"
              name="username"
              id="username"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="What position are you looking for ?"
              onChange={handleInputChange}
              value={query}
            />
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>

          <div className="flex rounded md:rounded-none ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3">
            <input
              type="text"
              name="username"
              id="username"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Location"
              onChange={handleInputChange}
              value={""}
            />
            <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>

          <button
            type="submit"
            className="px-8 py-2 text-white rounded bg-blue md:rounded-e-md md:rounded-s-none"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
