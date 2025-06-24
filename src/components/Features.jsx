import React from 'react'
import ContentWithButton from './ContentWithButton'

function Features() {
  return (
    <div className='py-20 px-10 flex flex-col gap-y-20'>
      <div className='flex justify-around items-center'>
        <img src="/environment.jpg" alt="environment" className='w-[650px]' />
        <ContentWithButton className="mb-5!"
          title={"Our planet appreciates it"}
          subtitle={"Feel great about your clothes and your environmental impact. There’s no waste when you wear one-of-a-kind."}
          button={"Learn how it's made"}
        />
      </div>
      <div className='flex justify-around items-center'>
        <ContentWithButton className=""
          title={"Looks that last"}
          subtitle={"We know you pay attention to detail, and so do we. From durable fabrics to our quality-controlled tailoring process. Get samples of any fabric in our 150+ range, and be assured that your garments are timeless."}
          button={"Order samples"}
        />
        <img src="/looks-that-last.jpg" alt="looks that last" className='w-[650px]' />
      </div>
    </div>
  )
}

export default Features