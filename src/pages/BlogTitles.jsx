import { Hash, HashIcon, Sparkle, Edit } from 'lucide-react';
import React, { useState } from 'react';

const GenerateImages = () => {
  const blogCategory = ['General', 'Technology', 'Health', 'Lifestyle', 'Education', 'Travel'];

  const [selectedcategory, setSelectedCategory] = useState('General');
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
          <Sparkle className='w-6 text-[#8337EB]' />
          <h1 className='text-xl font-semibold'>
            AI Title Generator
          </h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Keyword</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          className='w-full p-2 px-3 outline-none text-sm rounded-md border border-gray-300 mt-2'
          type="text"
          required
          placeholder='The Future is here'
          value={input}
        />

        <p className='mt-4 text-sm font-medium'>Category</p>
        <div className='mt-3 flex gap-3 flex-wrap'>
          {blogCategory.map((item, index) => (
            <span
              onClick={() => setSelectedCategory(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                selectedcategory === item
                  ? 'bg-purple-50 text-purple-700'
                  : 'text-gray-500 border-gray-300'
              }`}
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
        <br />

        <button
          className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#C341F6] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'
        >
          <Hash className='w-5' />
          Generate Title
        </button>
      </form>

      
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>
        <div className='flex items-center gap-3'>
          <Edit className='w-5 h-5 text-[#8E37EB]' />
          <h1 className='text-xl font-semibold'>Generated Titles</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-500'>
            <HashIcon className='w-9 h-9' />
            <p> Enter a topic and click on "Generate title" to get started</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default GenerateImages;
