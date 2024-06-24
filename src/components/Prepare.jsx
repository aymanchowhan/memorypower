import React from 'react';
import img from '../assets/images/prepare.png';

function Prepare() {
  return (
    <div className='container m-auto py-[100px] px-[20px] lg:px-[160px]'>
      <div className='grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4 lg:h-96'>
        <div className='flex justify-center items-center'>
          <img src={img} alt="Preparation Illustration" className='h-[355px] w-[255px] lg:h-auto lg:w-auto' />
        </div>
        <div className='flex flex-col justify-center'>
          <div className='text-[34px] w-full mb-[10px]'>
            How do we prepare our kids for a better future?
          </div>
          <div className='border border-gray-300 mb-[10px]'></div>

          <div className='text-[20px] p-subtitle text-left'>
            <p>Here is a better way to build the mindsets of our kids to lead businesses of the future. This course has been carefully designed to enrich students with the skills needed for them to thrive as creative thinkers, great leaders, public speakers, and live like “Entrepreneurs”.</p>
            <br/>
            <p>Each module of the course contains fun & engaging assignments that help our students learn the subject matter better through practical implementation. This also helps schools and parents assess improvement and see tangible results of the student’s learning.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prepare;
