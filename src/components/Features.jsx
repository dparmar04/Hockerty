import React from 'react';
import ContentWithButton from './ContentWithButton';

function Features() {
  return (
    <div className="py-16 px-4 md:px-10 flex flex-col gap-y-20">
      {/* First Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-around gap-10">
        <img
          src="/environment.jpg"
          alt="environment"
          className="w-full md:w-[50%] object-cover max-w-[650px] rounded-lg"
        />
        <ContentWithButton
          title="Our planet appreciates it"
          subtitle="Feel great about your clothes and your environmental impact. There’s no waste when you wear one-of-a-kind."
          button="Learn how it's made"
          className="text-center md:text-left"
        />
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-10">
        <ContentWithButton
          title="Looks that last"
          subtitle="We know you pay attention to detail, and so do we. From durable fabrics to our quality-controlled tailoring process. Get samples of any fabric in our 150+ range, and be assured that your garments are timeless."
          button="Order samples"
          className="text-center md:text-left"
        />
        <img
          src="/looks-that-last.jpg"
          alt="looks that last"
          className="w-full md:w-[50%] object-cover max-w-[650px] rounded-lg"
        />
      </div>
    </div>
  );
}

export default Features;
