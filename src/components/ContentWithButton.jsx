import React from 'react'

function ContentWithButton({ title, subtitle, button }) {
  return (
    <div className='flex flex-col items-start gap-y-3 md:w-[410px]'>
      <h1 className='text-6xl mb-5 leading-20'>{title}</h1>
      <p className='my-5'>{subtitle}</p>
      <button className='px-6 py-3 border rounded-full hover:bg-black hover:text-white transition-all duration-300'>{button}</button>
    </div>
  )
}

export default ContentWithButton