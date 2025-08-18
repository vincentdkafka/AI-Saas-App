import { Edit, Sparkle } from 'lucide-react'
import React, { useState } from 'react'

const WriteArticle = () => {

const articleLength = [
  {
    length:800, text:'short(500-800 words)'
  },
  {
    length:1200, text:'medium(800-1200 words)'
  },
  {
    length:1600, text:'Long(1200+ words)'
  }
]


const [selectedLength, setSelectedLength] = useState(articleLength[0])

const [input, setInput] = useState('')


const onSubmitHandler = async (e)=>{

  e.preventDefault();

}

  return (
    <div className='h-full flex overflow-y-scroll p-6 items-start flex-wrap gap-4 text-slate-700'>

    <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200' action="">

      <div className="flex items-center gap-3">
        <Sparkle className='w-6 text-[#4A7AFF]'/>
        <h1 className='text-xl font-semibold'>
          AI Article Generator
        </h1>
      </div>

      <p className='mt-6 text-sm font-medium'>Article Topic</p>

      <input onChange={(e)=>setInput(e.target.value)}  className='w-full p-2  px-3 outline-none text-sm rounded-md border border-gray-300  mt-2' type="text" required placeholder='The Future is here'/>

      <p className='mt-4 text-sm font-medium' >Article length</p>

      <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
        {
          articleLength.map((item, index)=>(
            <span  onClick={()=> setSelectedLength(item)} className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedLength.text == item.text ?  'bg-blue-50 text-blue-700' : 'text-gray-500 border-gray-300'}`} key={index}>

              {item.text}
            </span>
          ))
        }
      </div>

      <br />

      <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#65ADFF] to-[#226BFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
        <Edit className='w-5 '/>
        Generate Article
      </button>

    </form>

    <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border
          border-gray-200 min-h-96 max-h-[600px]'>

            <div className='flex items-center gap-3' >

              <Edit className='w-5 h-5 text-[#4A7AFF]' />

                 <h1 className='text-xl font-semibold'>
                  Generated Article
                 </h1>

            </div>

            <div className='flex-1 flex justify-center items-center'>
              <div className='text-sm flex flex-col items-center gap-5 text-gray-500'>
                <Edit className='w-9 h-9'/>
                <p>
                  Enter a topic and click on "Generate Article" to get started
                 </p>

              </div>

            </div>

    </div>

    </div>
  )
}

export default WriteArticle