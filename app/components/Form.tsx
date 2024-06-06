import React from 'react';

const Form = () => {
  return (
    <section className=' px-4'>
      <form action='' className=' flex justify-between border'>
        <div className='flex flex-col'>
          <label htmlFor='test-1'>Test 1</label>
          <input type='text' id='test-1' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='test-2'>Test 2</label>
          <input type='text' id='test-2' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='test-3'>Test 3</label>
          <input type='text' id='test-3' />
        </div>
      </form>
    </section>
  );
};

export default Form;
