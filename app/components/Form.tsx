'use client';
import React, { useState } from 'react';
import convertor from '../lib/converter';
import { IFormData } from '../Interfaces/IFormData';

const Form = () => {
  const [formData, setFormData] = useState<IFormData>({
    itemName: '',
    articleNum: '',
    floorNum: '',
  });

  const handleClick = async () => {
    // Static for the time being. will be imported with a state to function
    const imgInfo = await convertor();
    console.log(imgInfo);
  };

  return (
    <section className='flex justify-center items-center px-4 mx-10'>
      <form className='flex flex-col justify-center items-center w-full text-center gap-3 py-5'>
        <div className='input-container'>
          <label htmlFor='itemName'>Name</label>
          <input type='text' id='itemName' className='border rounded' />
        </div>
        <div className='input-container'>
          <label htmlFor='articleNum'>Article number</label>
          <input type='text' id='articleNum' />
        </div>
        <div className='input-container'>
          <label htmlFor='floorNum'>Floor nr</label>
          <input type='text' id='floorNum' />
        </div>
        <div>
          <button className='btn bg-green-600 hover:bg-green-900' type='submit'>
            Submit
          </button>
        </div>
        <div>
          <button
            className='btn bg-green-600 hover:bg-green-900'
            onClick={() => handleClick()}
            type='button'
          >
            Test
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
