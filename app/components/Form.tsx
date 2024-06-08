'use client';
import React from 'react';
import convertor from '../lib/converter';

const Form = () => {
  return (
    <section className='flex justify-center items-center px-4 mx-10'>
      <form className='flex flex-col justify-center items-center w-full text-center gap-3 py-5'>
        <div className='input-container'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='num' className='border rounded' />
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
          <button className='btn bg-green-600 hover:bg-green-900'>
            Submit
          </button>
        </div>
        <div>
          <button
            className='btn bg-green-600 hover:bg-green-900'
            onClick={() => convertor()}
            type='button'
          >
            test
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
