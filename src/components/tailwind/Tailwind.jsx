import React from 'react'

function Tailwind() {
  return (
    <div>
      <div className='grid grid-cols-3 gap-2'>
        <div className=' md:col-span-1 col-span-3 bg-red-300 w-full min-h-[100px] font-bold p-4 hover:scale-110 transition-transform'>
          <p className=' font-bold text-lg'>Title</p>
          <p className=' text-sm text-gray-100 my-2'>this is dexcription and some random words hello kitty</p>
          <button className=' bg-red-400 rounded-lg hover:bg-red-500 text-white px-4 py-2'>Show more</button>
        </div>
        <div className=' md:col-span-1 col-span-3 bg-red-300 w-full min-h-[100px] font-bold p-4 hover:scale-110'>
          <p className=' font-bold text-lg'>Title</p>
          <p className=' text-sm text-gray-100 my-2'>this is dexcription and some random words hello kitty</p>
          <button className=' bg-red-400 rounded-lg hover:bg-red-500 text-white px-4 py-2'>Show more</button>
        </div>
        <div className=' md:col-span-1 col-span-3 bg-red-300 w-full min-h-[100px] font-bold p-4 hover:scale-110'>
          <p className=' font-bold text-lg'>Title</p>
          <p className=' text-sm text-gray-100 my-2'>this is dexcription and some random words hello kitty</p>
          <button className=' bg-red-400 rounded-lg hover:bg-red-500 text-white px-4 py-2'>Show more</button>
        </div>
      </div>
      <div className='flex md:flex-row flex-wrap gap-2'>
        <div className=' basis-1/3 w-full min-h-[100px] font-bold p-4 transition-transform rounded-lg'>
          <p className=' font-bold text-lg'>Title</p>
          <p className=' text-sm text-gray-100 my-2'>this is dexcription and some random words hello kitty</p>
          <button className=' bg-red-400 rounded-lg hover:bg-red-500 text-white px-4 py-2'>Show more</button>
        </div>
        <div className=' basis-1/3 w-full min-h-[100px] font-bold p-4 transition-transform rounded-lg'>
          <p className=' font-bold text-lg'>Title</p>
          <p className=' text-sm text-gray-100 my-2'>this is dexcription and some random words hello kitty</p>
          <button className=' bg-red-400 rounded-lg hover:bg-red-500 text-white px-4 py-2'>Show more</button>
        </div>
        <div className=' basis-1/3 w-full min-h-[100px] font-bold p-4 transition-transform rounded-lg'>
          <p className=' font-bold text-lg text-blue'>Title</p>
          <p className=' text-sm text-gray-100 my-2'>this is dexcription and some random words hello kitty</p>

        </div>
      </div>
    </div>
  )
}

export default Tailwind