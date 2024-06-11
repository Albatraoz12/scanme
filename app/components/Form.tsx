'use client';
import React, { useState } from 'react';
import convertor from '../lib/converter';
import { IFormData } from '../Interfaces/IFormData';

const Junk = () => {
  const [formData, setFormData] = useState<IFormData>({
    itemName: '',
    articleNum: '',
    floorNum: '',
  });

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleClick = async () => {
    const imgInfo = await convertor();
    console.log(imgInfo);

    setFormData({
      itemName: imgInfo[0],
      articleNum: imgInfo[1],
      floorNum: imgInfo[2],
    });
  };

  return (
    <section className='flex justify-center items-center px-4 mx-10'>
      <form
        className='flex flex-col justify-center items-center w-full text-center gap-3 py-5'
        onSubmit={() => handleSubmit}
      >
        <div className='input-container'>
          <label htmlFor='itemName'>Name</label>
          <input
            type='text'
            id='itemName'
            className='border rounded'
            value={formData.itemName}
            onChange={(e) =>
              setFormData({ ...formData, itemName: e.target.value })
            }
          />
        </div>
        <div className='input-container'>
          <label htmlFor='articleNum'>Article number</label>
          <input
            type='text'
            id='articleNum'
            value={formData.articleNum}
            onChange={(e) =>
              setFormData({ ...formData, articleNum: e.target.value })
            }
          />
        </div>
        <div className='input-container'>
          <label htmlFor='floorNum'>Floor nr</label>
          <input
            type='text'
            id='floorNum'
            value={formData.floorNum}
            onChange={(e) =>
              setFormData({ ...formData, floorNum: e.target.value })
            }
          />
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

export default Junk;
