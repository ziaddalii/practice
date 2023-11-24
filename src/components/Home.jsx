import React from 'react'
import ThreeJs from './ThreeJs'
import Redux from './Redux'
import Tailwind from './tailwind/Tailwind'
import Zod from './Zod';

function Home() {
  return (
    <div className='p-8'>
        <ThreeJs/>
        <Redux/>
        <Tailwind/>
        <Zod/>
    </div>
  )
}

export default Home