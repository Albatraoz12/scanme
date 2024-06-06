import React from 'react';

const Form = () => {
  return (
    <section className='flex justify-center items-center px-4 mx-10'>
      <form className='flex flex-col justify-center items-center border w-full text-center gap-3 py-5'>
        <div className='input-container'>
          <label htmlFor='test-1'>Test 1</label>
          <input type='text' id='test-1' className='border rounded' />
        </div>
        <div className='input-container'>
          <label htmlFor='test-2'>Test 2</label>
          <input type='text' id='test-2' />
        </div>
        <div className='input-container'>
          <label htmlFor='test-3'>Test 3</label>
          <input type='text' id='test-3' />
        </div>
      </form>
    </section>
  );
};

export default Form;
