import React from 'react'
import Button from './ContentWithButton'
import ContentWithButton from './ContentWithButton'

function Designer() {
  return (
    <div className='min-h-screen flex flex-col gap-10 lg:flex-row justify-around items-center px-6 py-12 bg-[#F5F4EF]'>
      <ContentWithButton
        title={"High-tech tailoring for every body"}
        subtitle={"When your clothes are made with care, you can feel it. Before our tailors handcraft your piece, our algorithm uses a decade’s worth of sizing data to make sure it fits you right. Hard to believe, easy to prove."}
        button={"Know more"}
      />
      <div className='max-w-[750px] md:w-2xl'>
        <video src="/desktop.mp4" loop autoPlay muted playsinline data-amp-remove="1"></video>
      </div>
    </div>
  )
}

export default Designer