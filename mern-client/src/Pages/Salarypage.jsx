import React, { useEffect, useState } from 'react'
import PageHeader from "../components/PageHeader";
const Salarypage = () => {
  const [searchText, setSearchText] = useState("");
  const [salary, setSalary] = useState([]);

  useEffect(() => {
    fetch("salary.json").then(res => res.json()).then(data => setSalary(data))
  }, [searchText])
  const handleSearch = ()=>{
    const filter = salary.filter(
      (job) =>
          job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  );
  console.log(filter)
  setSalary(filter)
  }

  


  console.log(searchText);
  return (
    <div className='container px-4 mx-auto max-w-scree-2xl xl:px-24'>
      <PageHeader title={"Estimate Salary"} path={"Salary"} />
      <div className='mt-5'>
        <div className='p-2 mb-2 text-center search-box'>
          <input onChange={e => setSearchText(e.target.value)} type="text" name='search' id='search' className='w-full py-2 pl-3 mb-4 border lg:w-6/12 focus:outline-none' />
          <button onClick={handleSearch} className='px-8 py-2 mb-4 font-semibold text-white rounded-sm bg-blue hover:bg-black'>
            Search
          </button>
        </div>

      </div>

      {/* salary  display card */}
      <div className='grid items-center grid-cols-1 gap-12 my-12 lg:grid-cols-3 sm:grid-cols-2'>
        {
          salary.map ((data)=>(
        <div key={data.id} className='px-4 py-8 shadow'>
          <h4 className='text-xl font-semibold'>{data.title}</h4>
          <p className='my-2 text-lg font-medium text-blue'>{data.salary}</p>
          <div className='flex flex-wrap gap-4'>
            <a href="/" className='underline'>{data.status}</a>
            <a href="/" className='underline'>{data.skills}</a>

          </div>

        </div>
          ))
        }
      </div>
    </div>
  )
}

export default Salarypage