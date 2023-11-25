import React from "react";
import { FaEnvelopeOpen, FaRocket } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className="flex items-center gap-2 mb-2 text-lg font-bold">
          <FaEnvelopeOpen />
          Email me for Jobs
        </h3>
        <p className="mb-4 text-base text-primary/75">
          Contact me regarding the job if you seeking for a new jobs. This is a
          job portal where you can apply for a job by your own choices.
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@gmail.com"
            className="block w-full py-2 pl-3 border focus:outline-none "
          />

          <input
            type="submit"
            value={"Subscribe"}
            className="block w-full py-2 pl-3 font-semibold text-white border rounded-sm cursor-pointer focus:outline-none bg-blue"
          />
        </div>
      </div>

      {/* 2nd Part  */}

      <div className="mt-20">
        <h3 className="flex items-center gap-2 mb-2 text-lg font-bold">
          <FaRocket />
          Get noticed faster
        </h3>
        <p className="mb-4 text-base text-primary/75">
          Contact me regarding the job if you seeking for a new jobs. This is a
          job portal where you can apply for a job by your own choices.
        </p>
        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Upload your resume"}
            className="block w-full py-2 pl-3 font-semibold text-white border rounded-sm cursor-pointer focus:outline-none bg-blue"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
