import React, { useState } from 'react';

export default function Form() {

  const [formInputs, setFormInputs] = useState({});
  let stringifiedFormInputs = JSON.stringify(formInputs);

  const handleChange = (e) => {
    let name = e.target.name;
    const value = e.target.value;
    setFormInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs);
  }


  return (
    <section className='flex flex-col mx-auto'>
      <form onSubmit={handleSubmit} className="bg-form-color w-[50rem] rounded border-solid border-2">
        <h3 className=" text-lg font-semibold text-center pt-5">Create Cookie Stand</h3>
        <div className="">
          <label>Location</label>
          <input name='location' type='text' value={formInputs.location || ''} onChange={handleChange}></input>
        </div>
        <section className="flex">
          <div className="">
            <label>Minimum Customers Per Hour</label>
            <input type='number' name='minCustomersHr' value={formInputs.minCustHr} onChange={handleChange} className=""></input>
          </div>
          <div>
            <label>Maximum Customers Per Hour</label>
            <input type='number' name='maxCustomersHr' value={formInputs.maxCustHr} onChange={handleChange} className=""></input>
          </div>
          <div>
            <label>Average Cookies Per Hour</label>
            <input type='number' name='avgCustomersHr' value={formInputs.avgCookieHr} onChange={handleChange} className=""></input>
          </div>
        </section>
        <input type='submit' />
      </form>
      <p className='font-semibold'>Data Table Coming Soon!</p>
      <p>{stringifiedFormInputs}</p>


    </section>
  )
}