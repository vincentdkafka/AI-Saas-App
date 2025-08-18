import { Eraser, Sparkles } from 'lucide-react';

import { Hash, HashIcon, Sparkle, Edit } from 'lucide-react';
import React, { useState } from 'react';

const RemoveBackgound = () => {

    const [input, setInput] = useState('');
  
    const onSubmitHandler = async (e) => {
      e.preventDefault();
      
    };

  return (
    <div className='h-full flex overflow-y-scroll p-6 items-start flex-wrap gap-4 text-slate-700'>

      
      <form
        onSubmit={onSubmitHandler}
        className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'
      >
        <div className="flex items-center gap-3">
          <Sparkles className='w-6 text-[#FF4938]' />
          <h1 className='text-xl font-semibold'>
            Background Removal
          </h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Upload Image</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          className='w-full p-2 px-3 outline-none text-sm rounded-md text-gray-600 border border-gray-300 mt-2'
          type="file"
          accept='image/*'
          required
          

          
        />

        <p className='text-xs  text-gray-500 fomt-light mt-1'>
          Supports JPG, PNG and other image formats
        </p>


        <button
          className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#F6AB41] to-[#FF4932] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'
        >
          <Eraser className='w-5' />
          Remove Background
        </button>
      </form>

      
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>
        <div className='flex items-center gap-3'>
          <Eraser className='w-5 h-5 text-[#ff4938]' />
          <h1 className='text-xl font-semibold'>Remove Background</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-500'>
            <Eraser className='w-9 h-9' />
            <p>Upload an image and click on "Remove Background" to get started</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default RemoveBackgound