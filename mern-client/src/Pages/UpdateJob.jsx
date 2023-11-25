import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { useLoaderData, useParams } from 'react-router-dom'
import PageHeader from "../components/PageHeader";

    const UpdateJob = () => {
    const {id} = useParams();
    const [selectedOption, setSelectedOption] = useState(null);
    // console.log(id);
    const {
           jobTitle,
           companyName,
           minPrice,
           maxPrice,
           salaryType,
           jobLocation,
           postingDate,
           experienceLevel,
           companyLogo,
           employmentType,
           description,
           postedBy,
           skills 
          } = useLoaderData()

  
  const { 
          register,
          handleSubmit,
          reset,
          formState: { errors  }
        } = useForm();

        const onSubmit = (data) => {
            data.skills = selectedOption;
            // console.log(data)
             // update the book object
             fetch(`http://localhost:3000/update-job/${id}`, {
              method: "PATCH",
              headers: {'Content-type': ' application/json'},
              body: JSON.stringify(data)
            })
              .then((res) => res.json())
              .then((result) => {
                console.log(result);
                if(result.acknowledged === true){
                  alert("Job Updated Successfully!!")
                }
                reset();
              });
          };
          
  const options = [
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "React", label: "React" },
    { value: "Redux", label: "Redux" },
    { value: "Node", label: "Node" },
    { value: "Angular", label: "Angular" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "C#", label: "C#" },
    { value: ".Net", label: ".Net" },
  ];

  // console.log(watch("example"));


  return (
    <div className="container px-4 mx-auto max-w-screen-2xl xl:px-24">
    <PageHeader title={"Update This Job"} path={"Edit Job"} />
    {/* Form */}
    <div className="bg-[rgb(242,242,242)] py-10px-4 lg:px-16">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* First row */}
        <div className="create-job-flex ">
          <div className="w-full lg:w-1/2">
            <label className="block mb-2 text-lg">Job Title</label>
            <input
              type="text"
              defaultValue={jobTitle}
              {...register("jobTitle")}
              className="create-job-input"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <label className="block mb-2 text-lg">Company Name</label>
            <input
              type="text"
              placeholder="Ex: Microsoft"
              defaultValue={companyName}
              {...register("companyName")}
              className="create-job-input"
            />
          </div>
        </div>
        {/* Second Row */}
        <div className="create-job-flex">
          <div className="w-full lg:w-1/2">
            <label className="block mb-2 text-lg">Minimum Salary</label>
            <input
              type="text"
              defaultValue={minPrice}
              placeholder="$20k"
           
              {...register("minPrice")}
              className="create-job-input"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <label className="block mb-2 text-lg">Maxmimum Salary</label>
            <input
              type="text"
              defaultValue={maxPrice}
              placeholder="$120k"
              {...register("maxPrice")}
              className="create-job-input"
            />
          </div>
        </div>
        {/* Third row */}
        <div className="create-job-flex">
          <div className="w-full lg:w-1/2">
            <label className="block mb-2 text-lg">Salary Type</label>
            <select   className="create-job-input" {...register("salaryType")} >
              <option value={salaryType}>{salaryType}</option>
              <option value="Hourly">Hourly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <div className="w-full lg:w-1/2">
            <label className="block mb-2 text-lg">Job Location</label>
            <input
              type="text"
              defaultValue={jobLocation}
              placeholder="Ex:- New York"
              {...register("jobLocation")}
              className="create-job-input"
            />
          </div>
        </div>
        {/* fourth row */}
        <div className="create-job-flex">
          <div className="w-full lg:w-1/2">
            <label className="block mb-2 text-lg">Job Posting Date</label>
            <input
              type="date"
              defaultValue={postingDate}
              placeholder="Ex:- 2023-10-28"
              {...register("postingDate")}
              className="create-job-input"
            />
          </div>
          <div className="w-full lg:w-1/2 ">
            <label className="block mb-2 text-lg">Experience Level</label>
            <select
              {...register("experienceLevel")}
              className="create-job-input"
            >
              <option value={experienceLevel}>{experienceLevel}</option>
              <option value="NoExperience">Hourly</option>
              <option value="Internship">Internship</option>
              <option value="Work remotely">Work remotely</option>
            </select>
          </div>
        </div>
        {/* fifth row */}
        <div>
          <label className="block mb-2 text-lg">Required Skill Sets</label>
          <CreatableSelect
            options={options}
            isMulti
            onChange={setSelectedOption}
            defaultValue={skills}
            className="py-4 create-job-input"
          />
        </div>
        {/* Sixth Row*/}
        <div className="create-job-flex">
          <div className="w-full lg:w-1/2">
            <label className="block mb-2 text-lg">Company Logo</label>
            <input
              type="url"
              placeholder="paste your company logo URL: https://www.google.com/img/company-logo.png"
              defaultValue={companyLogo}
              {...register("companyLogo")}
              className="create-job-input"
            />
          </div>
          <div className="w-full lg:w-1/2 ">
            <label className="block mb-2 text-lg">Employment Type</label>
            <select
              {...register("employmentType")}
              className="create-job-input"
            >
              <option value={employmentType}>{employmentType}</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>
        </div>
        {/* Seventh Row */}
        <div className="w-full">
          <label className="block mb-2 text-lg">Job Descriptions</label>
          <textarea className="w-full pl-3 py-1.5 focus:outline-none text-gray-600" 
          rows={6}
          defaultValue={description}
          placeholder="Job Description"
          {...register("description")}/>
        </div>
        {/* last row */}
        <div className="w-full">
        <label className="block mb-2 text-lg">Job Posted By</label>
        <input
              type="email"
              className="w-full pl-3 py-1.5 focus:outline-none"
              placeholder="your email@gmail.com"
              defaultValue={postedBy}
              {...register("postedBy")}
           
            />

        </div>
        <input
          type="submit"
          className="block px-8 py-2 mt-12 font-semibold text-white rounded-sm cursor-pointer bg-blue hover:bg-black"
        />
      </form>
    </div>
  </div>
  )
}

export default UpdateJob