import React from "react";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    _id,
    companyName,
    companyLogo,
    jobTitle,
    minPrice,
    maxPrice,
    jobLocation,
    employmentType,
    postingDate,
    description,
  } = data;
  return (
    <section className="card">
      <Link to={`/job/${_id}`} className="flex flex-col items-start gap-4 sm:flex-row">
        <img src={companyLogo} alt="" />
        <div>
          <h4 className="mb-1 text-primary ">{companyName}</h4>
          <h3 className="mb-2 text-lg font-semibold">{jobTitle}</h3>

          <div className="flex flex-wrap gap-2 mb-2 text-base text-primary/70">
            <span className="flex items-center gap-2">
              {" "}
              <FiMapPin /> {jobLocation}
            </span>
            <span className="flex items-center gap-2">
              {" "}
              <FiClock /> {employmentType}
            </span>
            <span className="flex items-center gap-2">
              {" "}
              <FiDollarSign /> {minPrice}-{maxPrice}
            </span>
            <span className="flex items-center gap-2">
              {" "}
              <FiCalendar /> {postingDate}
            </span>
          </div>

          <p className="text-base text-primary/70">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
